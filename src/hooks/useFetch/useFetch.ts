import { useReducer, useEffect, useCallback } from 'react'

interface QueryResult<T> {
  data: T | unknown
  loading: boolean
  error: Error | null
  refetch: () => void
  isSuccess: boolean
  isError: boolean
}

interface QueryState<T> {
  data: T | unknown
  loading: boolean
  error: Error | null
}

type QueryAction<T> =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILURE'; payload: Error }

function queryReducer<T>(
  state: QueryState<T>,
  action: QueryAction<T>
): QueryState<T> {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      }

    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      throw new Error()
  }
}

const cache: Record<string, any> = {}

export function useFetch<T>(
  url: string,
  options?: RequestInit
): QueryResult<T> {
  const [state, dispatch] = useReducer(queryReducer, {
    data: null,
    loading: true,
    error: null,
  })

  const fetchData = useCallback(async () => {
    dispatch({ type: 'FETCH_INIT' })
    if (cache[url]) {
      dispatch({ type: 'FETCH_SUCCESS', payload: cache[url] })
    } else {
      try {
        const response = await fetch(url, options)
        if (!response?.ok) {
          throw new Error(response.statusText)
        }
        const jsonData = (await response.json()) as T
        cache[url] = jsonData
        dispatch({ type: 'FETCH_SUCCESS', payload: jsonData })
      } catch (err) {
        dispatch({ type: 'FETCH_FAILURE', payload: err as Error })
      }
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = useCallback(() => {
    delete cache[url]
    fetchData()
  }, [url, fetchData])

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    refetch,
    isSuccess: !state.loading && !state.error,
    isError: !!state.error,
  }
}

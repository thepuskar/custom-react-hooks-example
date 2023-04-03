import { useReducer, useCallback, useEffect } from 'react'

type State<T> = {
  data: T | unknown
  error: Error | null
  status: 'idle' | 'loading' | 'success' | 'error'
}

type Action<T> =
  | { type: 'reset' }
  | { type: 'loading' }
  | { type: 'success'; data: T }
  | { type: 'error'; error: Error }

const initialState: {
  data: unknown
  error: Error | null
  status: 'idle' | 'loading' | 'success' | 'error'
} = {
  data: null,
  error: null,
  status: 'idle',
}

function asyncReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'reset':
      return {
        ...initialState,
      }
    case 'loading':
      return {
        ...state,
        status: 'loading',
      }
    case 'success':
      return {
        data: action.data,
        error: null,
        status: 'success',
      }
    case 'error':
      return {
        data: null,
        error: action.error,
        status: 'error',
      }
    default:
      throw new Error(`Unhandled action type`)
  }
}

/**
 * It returns an object with the current status of the async function, the data returned by the async
 * function, and an execute function that can be called to run the async function
 * @param asyncFunction - The async function to execute.
 * @param [immediate=true] - If true, the async function will be executed immediately. If false, you'll
 * need to call the execute function yourself.
 * @returns The return value is an object with the following properties:
 */
export function useAsync<T>(asyncFunction: () => Promise<T>, immediate = true) {
  const [state, dispatch] = useReducer(asyncReducer, initialState)

  const execute = useCallback(() => {
    dispatch({ type: 'loading' })
    asyncFunction()
      .then(data => dispatch({ type: 'success', data }))
      .catch(error => dispatch({ type: 'error', error }))
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [immediate])

  return { ...state, execute }
}

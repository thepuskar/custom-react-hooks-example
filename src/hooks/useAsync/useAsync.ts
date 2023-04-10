import { DependencyList, useEffect } from 'react'
import { useAsyncFnc } from '../useAsyncFnc'
import { FunctionReturningPromise, AsyncFnReturn } from 'misc/types'

export function useAsync<T extends FunctionReturningPromise>(
  fn: T,
  deps: DependencyList = [],
  immidate: boolean = false
): AsyncFnReturn<T> {
  const [state, execute] = useAsyncFnc(fn, deps, {
    loading: true,
  })

  useEffect(() => {
    if (immidate) execute()
  }, [execute, immidate])

  return [state, execute as T]
}

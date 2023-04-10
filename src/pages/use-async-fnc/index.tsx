import { useAsyncFnc } from 'hooks'
import { Header, Paragraph, Button, Alert } from 'components'

interface IUser {
  name: string
  id: number
}

export default function UseAsyncFncDemo() {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const [state, callback] = useAsyncFnc(
    async () => {
      const res = await fetch(url)
      const result = await res.json()
      return result
    },
    [url],
    { loading: true }
  )
  console.log('result', state)
  return (
    <div>
      <Header title="useAsyncFnc Demo" />
      <Paragraph text="Below action is when function is Idel. We can invoke async function immediately also" />
      <button type="button" onClick={() => callback()}>
        Execute
      </button>
      {/* {status === 'loading' && <p>Loading...</p>}
      {status === 'success' && <p>Fetched successful!</p>}
      {status === 'error' && <p>Fetched failed: {error?.message}</p>}
      {status === 'success' && data ? (
        <ul>
          {(data as IUser[]).map((user: IUser) => (
            <li key={user.id}>{user?.name}</li>
          ))}
        </ul> */}
      {/* ) : null} */}
    </div>
  )
}

import { useAsync } from 'hooks'
import { Header, Paragraph, Button, Alert } from 'components'

interface IUser {
  name: string
  id: number
}

export default function UseAsyncDemo() {
  const fetchUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
  }

  const { data, error, status, execute } = useAsync<IUser[]>(fetchUser, false)

  return (
    <div>
      <Header title="useAsync Demo" />
      <Paragraph text="Below action is when function is Idel. We can invoke async function immediately also" />
      <button type="button" onClick={() => execute()}>
        Execute
      </button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'success' && <p>Fetched successful!</p>}
      {status === 'error' && <p>Fetched failed: {error?.message}</p>}
      {status === 'success' && data ? (
        <ul>
          {(data as IUser[]).map((user: IUser) => (
            <li key={user.id}>{user?.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

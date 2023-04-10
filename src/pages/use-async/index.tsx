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

  const [state, execute] = useAsync(
    async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      return res.json()
    },
    [],
    true
  )

  return (
    <div>
      <Header title="useAsync Demo" />
      <Paragraph text="Below action is when function is Idel. We can invoke async function immediately also" />
      <button type="button" onClick={() => execute()}>
        Execute
      </button>
      {state?.loading && <p>Loading...</p>}

      {state?.error && <p>Fetched failed</p>}
      {!state?.loading && state?.value ? (
        <ul>
          {(state?.value as unknown as IUser[])?.map((user: IUser) => (
            <li key={user.id}>{user?.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

import { useFetch } from 'hooks'
import { Header, Paragraph, Button, Alert } from 'components'

interface IImageData {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export default function UseFetchDemo() {
  const { data, loading, isSuccess, refetch, isError, error } = useFetch(
    'https://jsonplaceholder.typicode.com/photos'
  )
  console.log('data', isError, error?.message)
  return (
    <div>
      <Header title="useFetch Demo" />
      <Paragraph text="The useFetch hook provides an easy way to fetch and cache data in a React application, thereby improving the performance of the application by reducing the number of API calls." />

      {isError ? (
        <Alert message={error?.message || 'something went wrong'} />
      ) : (
        <div className="image-lists flex flex-wrap gap-2 justify-center">
          {loading ? (
            'Loading...'
          ) : (
            <>
              {isSuccess &&
                (data as IImageData[])?.slice(0, 10)?.map((img: IImageData) => (
                  <div
                    key={img?.id}
                    className="w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <img className="rounded-t-lg" src={img?.url} alt="" />
                  </div>
                ))}
            </>
          )}
        </div>
      )}

      {isSuccess ? <Button onClick={refetch} text="Refetch" /> : null}
    </div>
  )
}

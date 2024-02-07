import type { Database } from '../../database.types'
import Counter from './counter'

type News = Database['public']['Tables']['news']['Row']

async function fetchNews() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/news?select=*`, {
    headers: new Headers({
      apiKey: process.env.apiKey as string,
    }),
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const news: News[] = await res.json()
  return news
}

export default async function NewsList() {
  const news = await fetchNews()
  return (
    <div className="p-4">
      <Counter />
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        News
      </p>
      <ul className="m-3">
        {news?.map((news) => (
          <li key={news.id}>
            <p>{news.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

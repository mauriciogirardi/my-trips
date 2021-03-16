import { GetPlacesQuery } from 'graphql/generated/graphql'

import { MapProps } from 'components/Map'
import { GET_PLACES } from 'graphql/queries'
import client from 'graphql/client'
import HomeTemplate from 'templates/Home'

export default function Home({ places }: MapProps) {
  return (
    <>
      <HomeTemplate places={places} />
    </>
  )
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 60,
    props: {
      places
    }
  }
}

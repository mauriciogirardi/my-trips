import { GetStaticProps } from 'next'
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'graphql/generated/graphql'
import { useRouter } from 'next/dist/client/router'

import client from 'graphql/client'
import { GET_PLACES, GET_PLACES_BY_SLUG } from 'graphql/queries'
import PlaceTemplate, { PlaceTemplateProps } from 'templates/Places'

export default function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <PlaceTemplate place={place} />
    </>
  )
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACES_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    revalidate: 60,
    props: {
      place
    }
  }
}

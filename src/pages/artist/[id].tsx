import { useRouter } from 'next/router'
import { Flex } from '@radix-ui/themes'
import RootLayout from '~/layouts/RootLayout'
import { api } from '~/utils/api'
import ViewArtist from '~/components/ViewArtist'
import Loading from '~/components/Loading'
import { useMemo } from 'react'
import { httpRequest } from '@trpc/client/dist/links/internals/httpUtils'

export default function ViewArtistPage() {
    const router = useRouter()
    const id = router.query.id as string
    const getArtistQuery = api.artist.get.useQuery({ id }, { enabled: !!id })
    const getArtistEventsQuery = api.event.getAllByArtist.useQuery(
        { artistId: id },
        { enabled: !!id }
    )

    const isLoading = useMemo(
        () => getArtistQuery.isLoading || getArtistEventsQuery.isLoading,
        [getArtistQuery, getArtistEventsQuery]
    )

    return (
        <RootLayout
            pageTitle="Toronto Live Jazz Tracker | View Artist"
            breadcrumbs={{
                href: '/events',
                title: 'Events',
                currentPageTitle: 'Artist'
            }}
        >
            <Flex justify="center" px={{ initial: '5', xs: '0' }} py="9">
                {!isLoading &&
                getArtistEventsQuery.data &&
                getArtistQuery.data ? (
                    <ViewArtist
                        artist={getArtistQuery.data}
                        events={getArtistEventsQuery.data}
                    />
                ) : (
                    <Loading />
                )}
            </Flex>
        </RootLayout>
    )
}

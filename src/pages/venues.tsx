import { useMemo } from 'react'
import RootLayout from '~/layouts/RootLayout'
import VenueCard from '~/components/VenueCard/VenueCard'
import { api } from '~/utils/api'
import { Flex, Heading, Text } from '@radix-ui/themes'
import Link from '~/components/Link'
import Loading from '~/components/Loading'

export default function Venues() {
    const getAllVenuesQuery = api.venue.getAll.useQuery()

    const venueCards = useMemo(
        () =>
            getAllVenuesQuery.data?.length
                ? getAllVenuesQuery.data
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((venue, index) => {
                          return (
                              <VenueCard
                                  key={venue.id}
                                  venue={venue}
                                  priority={index < 3}
                              />
                          )
                      })
                : [],
        [getAllVenuesQuery.data]
    )

    return (
        <RootLayout
            pageTitle="Toronto Live Jazz Tracker | Venues"
            calloutContent={
                <Text>
                    Don't see your venue listed below?{' '}
                    <Link href="/venue">
                        Submit a request to add your venue
                    </Link>
                </Text>
            }
        >
            <Flex
                direction="column"
                align="center"
                width="100%"
                p={{ initial: '5', xs: '9' }}
            >
                <Heading mb="9" size="9">
                    Venues
                </Heading>
                {getAllVenuesQuery.isLoading ? (
                    <Loading />
                ) : (
                    <Flex
                        direction="column"
                        gap={{ initial: '5', xs: '9' }}
                        align="center"
                        width="100%"
                    >
                        {venueCards}
                    </Flex>
                )}
            </Flex>
        </RootLayout>
    )
}

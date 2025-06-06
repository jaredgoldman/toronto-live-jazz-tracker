import { EventWithArtistVenue, Venue } from '~/types/data'
import { Popover, Flex, Box, Heading, Text } from '@radix-ui/themes'
import { formatTime } from '~/utils'
import { ArrowRightIcon, Cross1Icon } from '@radix-ui/react-icons'
import Link from '~/components/Link'

/**
 * @param events - EventWithArtistVenue[]
 * @param venue - Venue
 * @param children - React.ReactNode
 * @param visible - boolean
 * @returns JSX.Element
 */
type Props = {
    events: EventWithArtistVenue[]
    venue: Venue
    children: React.ReactNode
    visible: boolean
    handleChangePopoverState: (venueId: string) => void
}

/**
 * Popover component for displaying venue events
 * @param {Props}
 */
export function MapVenuePopover({
    events,
    venue,
    children,
    visible,
    handleChangePopoverState
}: Props) {
    return (
        <Popover.Root open={visible}>
            <Popover.Trigger>
                <Flex>{children}</Flex>
            </Popover.Trigger>
            <Popover.Content size="4">
                <Flex direction="column" gap="2" className="max-w-[72vw] max-h-[70vh] overflow-y-auto">
                    <Flex align="center" justify="between" gap="4">
                        <Link href={`/venue/${venue.id}`}>
                            <Heading className="text-white hover:underline">
                                {venue.name}
                            </Heading>
                        </Link>
                        <Cross1Icon
                            onClick={() => handleChangePopoverState(venue.id)}
                            className="cursor-pointer"
                        />
                    </Flex>
                    <Box>
                        {events.map((event) => (
                            <Flex gap="2" align="center" key={event.id}>
                                <Text>{formatTime(event.startDate)}</Text>
                                <ArrowRightIcon />
                                <Link href={`/artist/${event.artist.id}`}>
                                    {event.name
                                        ? event.name
                                        : event.artist.name}
                                </Link>
                            </Flex>
                        ))}
                    </Box>
                </Flex>
            </Popover.Content>
        </Popover.Root>
    )
}

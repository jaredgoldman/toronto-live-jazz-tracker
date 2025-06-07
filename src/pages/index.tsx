import { useCallback, useState } from 'react'
import RootLayout from '~/layouts/RootLayout'
import { Flex, Text, Button, Heading, TextField, Box } from '@radix-ui/themes'
import Link from '~/components/Link'
import { EventsMap } from '~/components/EventsMap'
import { DateTime } from 'luxon'
import DailyListings from '~/components/DailyListings'
import { Cross1Icon } from '@radix-ui/react-icons'
import { IconButton } from '@radix-ui/themes'

/**
 * Component to display the daily listings
 */
export default function Listings() {
    const defaultDate = DateTime.now()
        .startOf('day')
        .setZone('America/New_York')
        .toJSDate()
    const [selectedDate, setSelectedDate] = useState(defaultDate)
    const [showListingsOverlay, setShowListingsOverlay] = useState(false)

    /**
     * Function to handle the next day button
     * @returns void
     */
    const handleNext = useCallback(
        () =>
            setSelectedDate(
                DateTime.fromJSDate(selectedDate)
                    .plus({ day: 1 })
                    .startOf('day')
                    .toJSDate()
            ),
        [selectedDate]
    )

    /**
     * Function to handle the previous day button
     * @returns void
     */
    const handlePrevious = useCallback(
        () =>
            setSelectedDate(
                DateTime.fromJSDate(selectedDate)
                    .minus({ day: 1 })
                    .startOf('day')
                    .toJSDate()
            ),
        [selectedDate]
    )

    /**
     * Function to handle the date picker input change
     * @param date
     */
    const handleDatePickerChange = (date: string) => {
        setSelectedDate(DateTime.fromISO(date).startOf('day').toJSDate())
    }

    /**
     * Function to handle the map controls
     * @returns void
     */
    function MapControls() {
        return (
            <Flex
                className="absolute right-4 top-4 z-20 flex flex-wrap gap-5 rounded bg-black/90 p-4 shadow"
                align="center"
            >
                <Button onClick={handlePrevious}>{`Previous Day`}</Button>
                <Text>{DateTime.fromJSDate(selectedDate).toFormat('DD')}</Text>
                <Button onClick={handleNext}>{`Next Day`}</Button>
                <TextField.Root>
                    <TextField.Input
                        type="date"
                        value={
                            new Date(selectedDate).toISOString().split('T')[0]
                        }
                        onChange={(e) => handleDatePickerChange(e.target.value)}
                        placeholder="Filter"
                    />
                </TextField.Root>
                <Button
                    variant={showListingsOverlay ? 'solid' : 'soft'}
                    onClick={() => setShowListingsOverlay((v) => !v)}
                >
                    {showListingsOverlay ? 'Hide Listings' : 'Show Listings'}
                </Button>
            </Flex>
        )
    }

    return (
        <RootLayout
            pageTitle="Live Music In Toronto | Event Listings"
            calloutContent={
                <Text>
                    Don't see your gig listed in our below agenda and would like
                    to be added? Submit a{' '}
                    <Link href="/event">request to join our listings!</Link>
                </Text>
            }
        >
            <Flex width="100%" align="center" direction="column">
                <Flex width="100%" className="relative h-[calc(100vh-200px)]">
                    <EventsMap
                        selectedDate={selectedDate}
                        controls={MapControls()}
                    />
                    {showListingsOverlay && (
                        <Box className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center">
                            <Box className="pointer-events-auto relative w-full max-w-5xl rounded-lg bg-black p-8 shadow-xl">
                                <IconButton
                                    className="absolute right-2 top-2 z-40"
                                    onClick={() =>
                                        setShowListingsOverlay(false)
                                    }
                                    variant="ghost"
                                    aria-label="Close"
                                >
                                    <Cross1Icon />
                                </IconButton>
                                <DailyListings selectedDate={selectedDate} />
                            </Box>
                        </Box>
                    )}
                    <Heading
                        className="absolute bottom-6 left-6 z-20 text-6xl font-bold text-black"
                        size="9"
                    >
                        Daily Listings
                    </Heading>
                </Flex>
            </Flex>
        </RootLayout>
    )
}

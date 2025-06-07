import { useCallback, useState, useMemo } from 'react'
import RootLayout from '~/layouts/RootLayout'
import { Flex, Text, Button, Heading, TextField } from '@radix-ui/themes'
import Link from '~/components/Link'
import { EventsMap } from '~/components/EventsMap'
import { DateTime } from 'luxon'
import { formatTime } from '~/utils'

enum ListingType {
    CALENDAR = 'CALENDAR',
    DAILY_LISTINGS = 'DAILY_LISTINGS',
    EVENT_MAP = 'EVENT_MAP'
}

export default function Listings() {
    const defaultDate = DateTime.now()
        .startOf('day')
        .setZone('America/New_York')
        .toJSDate()
    const [selectedDate, setSelectedDate] = useState(defaultDate)
    const [listingType, setListingType] = useState(ListingType.EVENT_MAP)
    const onChangeListingType = (type: ListingType) => setListingType(type)
    const listingTypeDuration = useMemo(
        () =>
            listingType === ListingType.CALENDAR ? { months: 1 } : { days: 1 },
        [listingType]
    )
    const listingTypeDurationString = useMemo(
        () => (listingType === ListingType.CALENDAR ? 'month' : 'day'),
        [listingType]
    )

    /**
     * Function to handle the next day button
     * @returns void
     */
    const handleNext = useCallback(
        () =>
            setSelectedDate(
                DateTime.fromJSDate(selectedDate)
                    .plus(listingTypeDuration)
                    .startOf('day')
                    .toJSDate()
            ),
        [selectedDate, listingTypeDuration]
    )

    /**
     * Function to handle the previous day button
     * @returns void
     */
    const handlePrevious = useCallback(
        () =>
            setSelectedDate(
                DateTime.fromJSDate(selectedDate)
                    .minus(listingTypeDuration)
                    .startOf('day')
                    .toJSDate()
            ),
        [selectedDate, listingTypeDuration]
    )

    const handleDatePickerChange = (date: string) => {
        setSelectedDate(DateTime.fromISO(date).startOf('day').toJSDate())
    }

    const mapControls = (
        <Flex
            className="absolute left-1/2 top-4 z-20 flex -translate-x-1/2 flex-wrap gap-5 rounded bg-black/90 p-4 shadow"
            align="center"
        >
            <Button
                onClick={handlePrevious}
            >{`Previous Day - ${DateTime.fromJSDate(selectedDate)
                .minus({ day: 1 })
                .toFormat('DD')}`}</Button>
            <Text>{`Current Day - ${DateTime.fromJSDate(selectedDate).toFormat(
                'DD'
            )}`}</Text>
            <Button onClick={handleNext}>{`Next Day - ${DateTime.fromJSDate(
                selectedDate
            )
                .plus({ day: 1 })
                .toFormat('DD')}`}</Button>
            <TextField.Root>
                <TextField.Input
                    type="date"
                    value={new Date(selectedDate).toISOString().split('T')[0]}
                    onChange={(e) => handleDatePickerChange(e.target.value)}
                    placeholder="Filter"
                />
            </TextField.Root>
        </Flex>
    )

    return (
        <RootLayout
            pageTitle="Toronto Live Jazz Tracker | Event Listings"
            calloutContent={
                <Text>
                    Don't see your gig listed in our below agenda and would like
                    to be added? Submit a{' '}
                    <Link href="/event">request to join our listings!</Link>
                </Text>
            }
        >
            <Flex width="100%" align="center" direction="column">
                <Flex
                    width="100%"
                    className="relative mt-4 h-[calc(100vh-200px)]"
                >
                    <EventsMap
                        selectedDate={selectedDate}
                        controls={mapControls}
                    />
                    <Heading className="absolute bottom-6 left-6 z-20 text-6xl font-bold text-black" size="9">
                        Daily Listings
                    </Heading>
                </Flex>
            </Flex>
        </RootLayout>
    )
}

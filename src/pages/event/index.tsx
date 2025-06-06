import RootLayout from '~/layouts/RootLayout'
import EventForm from '~/components/Forms/Event'
import { Flex } from '@radix-ui/themes'

export default function Event(): JSX.Element {
    return (
        <RootLayout pageTitle="Toronto Live Jazz Tracker | Book Your Event">
            <Flex justify="center" py="9" px={{ initial: '5', xs: '0' }}>
                <EventForm />
            </Flex>
        </RootLayout>
    )
}

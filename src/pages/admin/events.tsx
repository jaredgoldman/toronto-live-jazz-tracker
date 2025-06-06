import AdminLayout from '~/layouts/AdminLayout'
import { Heading } from '@radix-ui/themes'
import { EventsTable } from '~/components/Tables/Events'

export default function AdminEvents(): JSX.Element {
    return (
        <AdminLayout pageTitle="Toronto Live Jazz Tracker | Admin - Events">
            <Heading align="center" size="9" mb="9">
                Events
            </Heading>
            <EventsTable />
        </AdminLayout>
    )
}

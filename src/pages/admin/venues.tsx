// Components
import AdminLayout from '~/layouts/AdminLayout'
import { Heading } from '@radix-ui/themes'
// Utils
import { VenuesTable } from '~/components/Tables'

export default function AdminVenues() {
    return (
        <AdminLayout pageTitle="Toronto Live Jazz Tracker | Admin - Venues">
            <Heading align="center" size="9" mb="2">
                Venues
            </Heading>
            <VenuesTable />
        </AdminLayout>
    )
}

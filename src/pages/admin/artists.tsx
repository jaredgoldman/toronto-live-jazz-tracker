// Componentsj
import { Heading } from '@radix-ui/themes'
import AdminLayout from '~/layouts/AdminLayout'
// Utils
import { ArtistsTable } from '~/components/Tables'

export default function AdminArtists() {
    return (
        <AdminLayout pageTitle="Toronto Live Jazz Tracker | Admin - artists">
            <>
                <Heading align="center" size="9" mb="2">
                    Artists
                </Heading>
                <ArtistsTable />
            </>
        </AdminLayout>
    )
}

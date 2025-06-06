import AdminLayout from '~/layouts/AdminLayout'
import { Heading } from '@radix-ui/themes'
import PostGenerator from '~/components/Forms/PostGenerator'

export default function AdminPost() {
    return (
        <AdminLayout pageTitle="Toronto Live Jazz Tracker | Admin - Post">
            <Heading align="center" size="9" mb="4">
                Post
            </Heading>
            <PostGenerator />
        </AdminLayout>
    )
}

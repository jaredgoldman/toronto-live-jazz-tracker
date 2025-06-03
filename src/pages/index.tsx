import RootLayout from '~/layouts/RootLayout'
import Featured from '~/components/Featured'
import { Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'

export default function Home() {
    return (
        <RootLayout pageTitle="Toronto Live Jazz Tracker | Home">
            <Flex
                direction="column"
                align="center"
                gap="9"
                className="bg-gradient-overlay bg-cover bg-center bg-no-repeat dark:bg-hero-pattern-dark"
            >
                <Image
                    src="/images/logo.png"
                    alt="facebook"
                    width={600}
                    height={600}
                />
                <Text
                    size={{ initial: '5', xs: '7' }}
                    align="center"
                    className="max-w-2xl text-white py-10"
                >
                    Welcome to the Toronto Live Jazz Tracker, a platform
                    dedicated to tracking and promoting the best live jazz
                    performances in Toronto. Our mission is to provide a
                    comprehensive and user-friendly platform for discovering and
                    promoting, connecting, and nourishing Toronto’s live music
                    scene.
                </Text>
            </Flex>
            <Flex
                justify="center"
                grow="1"
                className="dark:bg-hero-pattern-2 bg-cover bg-center bg-no-repeat"
                py="6"
            >
                <Featured />
            </Flex>
        </RootLayout>
    )
}

import RootLayout from '~/layouts/RootLayout'
import Featured from '~/components/Featured'
import { Flex, Heading, Text } from '@radix-ui/themes'
import Image from 'next/image'

export default function Home() {
    return (
        <RootLayout pageTitle="Toronto Live Jazz Tracker | Home">
            <Flex
                direction="column"
                align="center"
                justify="center"
                className="h-[60rem] bg-gradient-overlay bg-cover bg-center bg-no-repeat dark:bg-hero-pattern-dark"
            >
                <Heading
                    size={{ initial: '8', xs: '9' }}
                    align="center"
                    weight="bold"
                    className="text-white"
                >
                    Toronto Live Jazz Tracker
                </Heading>
                <Flex>
                    <Image
                        src="/images/logo.svg"
                        alt="facebook"
                        width={350}
                        height={350}
                        className="my-16"
                    />
                </Flex>
                <Text
                    size={{ initial: '6', xs: '7' }}
                    align="center"
                    className="max-w-2xl text-white"
                >
                    JazzInToronto is a not-for-profit organization dedicated to
                    promoting, connecting, and nourishing Toronto’s live music
                    scene.
                </Text>
            </Flex>
            <Flex
                justify="center"
                grow="1"
                className="dark:bg-hero-pattern-2 bg-cover bg-center bg-no-repeat"
                pb="6"
            >
                <Featured />
            </Flex>
        </RootLayout>
    )
}

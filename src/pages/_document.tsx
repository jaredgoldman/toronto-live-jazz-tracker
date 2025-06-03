import { Html, Head, Main, NextScript } from 'next/document'
import { env } from '../env.mjs'

export default function Document() {
    const src = `https://maps.googleapis.com/maps/api/js?key=${env.GOOGLE_API_KEY}&libraries=places`
    return (
        <Html className="dark">
            <Head>
                <meta name="description" content="Toronto Live Jazz Tracker" />
                <script async src={src} />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                ></link>
                {/* Preload images */}
                <link rel="preload" as="image" href="/images/logo.png" />
                <link rel="preload" as="image" href="/images/jazzhome.webp" />
                <link rel="preload" as="image" href="/images/spinner.png" />
                <link rel="preload" as="image" href="/logo.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

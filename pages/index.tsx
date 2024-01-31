import Head from 'next/head';
import Image from 'next/image';



export default function Home() {
    return (
        <>
            <Head>
                <title>Aldous Tech</title>
                <meta name="description" content="Aldous Tech LLC is a company that makes and sells software for supporting ecommerce businesses." />
            </Head>
            <section>
                <header className="flex flex-col items-center">
                    <h1 className="xs:w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3">
                        <span className="sr-only">
                            Aldous Tech
                        </span>
                    </h1>
                </header>
                <section className="max-w-prose mx-auto text-center">
                    <h2 className="mt-20 text-3xl">
                        Website Coming Soon
                    </h2>
                </section>
            </section>
        </>
    );
}

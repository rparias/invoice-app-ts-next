import Head from 'next/head';
import '@/styles/home.scss';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="This app allows you to keep track of your invoices" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Main element</h1>
		</>
	);
}

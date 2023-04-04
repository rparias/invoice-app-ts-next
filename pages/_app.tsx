import '@/styles/globals/index.scss';
import type { AppProps } from 'next/app';
import Layout from '@/templates/Layout/layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

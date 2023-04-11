import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from '@/templates/Layout/layout';
import '@/styles/globals/index.scss';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function DefaultLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available, otherwise Default Layout
	const getLayout = Component.getLayout ?? ((page) => DefaultLayout(page));

	return getLayout(<Component {...pageProps} />);
}

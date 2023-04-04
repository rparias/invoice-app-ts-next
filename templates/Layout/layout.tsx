import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/navbar';

type Props = {
	children: ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}

import { ReactNode } from 'react';
import Navbar from '@/components/Navbar/navbar';
import './layout.scss';

type Props = {
	children: ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<div className="layout">
			<div className="layout__navbar">
				<Navbar />
			</div>
			<main className="layout__main">{children}</main>
		</div>
	);
}

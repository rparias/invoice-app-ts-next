import Image from 'next/image';

import './navbar.scss';

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar__logo-container">
				<Image
					className="logo"
					src="/assets/logo.svg"
					alt="App Logo"
					width={40}
					height={38}
					priority
				/>
			</div>
			<div className="navbar__icons-container">icons</div>
		</nav>
	);
}

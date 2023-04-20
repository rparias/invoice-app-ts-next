import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

import './navbar.scss';

const lgScreenSize = 960;

export default function Navbar() {
	const { width } = useWindowSize();
	return (
		<nav className="navbar">
			<div className="navbar__logo-container">
				<Image
					className="logo"
					src="/assets/logo.svg"
					alt="App Logo"
					width={width < lgScreenSize ? 28 : 40}
					height={width < lgScreenSize ? 26 : 38}
					priority
				/>
			</div>
			<div className="navbar__icons-container">
				<button className="navbar__dark-light-switch">
					<Image
						src="/assets/icon-moon.svg"
						alt="Switch dark/light mode"
						width={20}
						height={20}
						priority
					/>
				</button>
				<Image
					className="navbar__user-picture br-full"
					src="/assets/image-avatar.jpg"
					alt="App Logo"
					width={width < lgScreenSize ? 32 : 40}
					height={width < lgScreenSize ? 32 : 40}
					priority
				/>
			</div>
		</nav>
	);
}

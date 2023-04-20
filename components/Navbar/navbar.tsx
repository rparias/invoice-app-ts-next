import Image from 'next/image';
import { useWindowSize, useDarkMode } from 'usehooks-ts';

import './navbar.scss';

const lgScreenSize = 960;

export default function Navbar() {
	const { width } = useWindowSize();
	const { isDarkMode, toggle } = useDarkMode();
	const isMobile = width < lgScreenSize;

	return (
		<nav className="navbar">
			<div className="navbar__logo-container">
				<Image
					className="logo"
					src="/assets/logo.svg"
					alt="App Logo"
					width={isMobile ? 28 : 40}
					height={isMobile ? 26 : 38}
					priority
				/>
			</div>
			<div className="navbar__icons-container">
				<div className="navbar__dark-light-switch">
					<button onClick={toggle}>
						<Image
							src={isDarkMode ? '/assets/icon-sun.svg' : '/assets/icon-moon.svg'}
							alt="Switch dark/light mode"
							width={20}
							height={20}
							priority
						/>
					</button>
				</div>
				<div className="navbar__user-picture">
					<Image
						className="br-full"
						src="/assets/image-avatar.jpg"
						alt="App Logo"
						width={isMobile ? 32 : 40}
						height={isMobile ? 32 : 40}
						priority
					/>
				</div>
			</div>
		</nav>
	);
}

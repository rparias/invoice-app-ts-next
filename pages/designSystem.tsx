import { ReactElement } from 'react';
import Colors from '@/templates/Colors/colors';
import Typography from '@/templates/Typography/typography';
import Buttons from '@/templates/Buttons/buttons';
import FormElements from '@/templates/FormElements/formElements';
import '@/styles/designSystem.scss';

export default function DesignSystem() {
	return (
		<div className="design-system__container">
			<section className="row">
				<h1>Design System</h1>
			</section>
			<Colors />
			<Typography />
			<Buttons />
			<FormElements />
		</div>
	);
}

DesignSystem.getLayout = function getLayout(page: ReactElement) {
	return page;
};

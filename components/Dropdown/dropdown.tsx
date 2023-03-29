import { Grommet, Select } from 'grommet';
import { theme } from '@/styles/grommetTheme';

type Props = {
	id?: string | undefined;
	label?: string | undefined;
	onChange?: () => void;
	options: (string | boolean | number | JSX.Element | object)[];
	value?: string | number | undefined;
};

export default function Dropdown({ id, label, onChange, options, value }: Props) {
	return (
		<Grommet theme={theme}>
			{!label ? null : (
				<div className="input__label">
					<label htmlFor={id}>{label}</label>
				</div>
			)}
			<Select value={value} id={id} onChange={onChange} options={options} />
		</Grommet>
	);
}

import { Grommet } from 'grommet';
import { theme } from '@/styles/grommetTheme';
import { TextInput as TextInputGrommet } from 'grommet';

type Props = {
	id?: string | undefined;
	label?: string | undefined;
	onChange?: () => void;
	value?: string | number | undefined;
};

export default function TextInput({ id, label, onChange, value }: Props) {
	return (
		<Grommet theme={theme}>
			{!label ? null : (
				<div className="input__label">
					<label htmlFor={id}>{label}</label>
				</div>
			)}
			<TextInputGrommet value={value} id={id} onChange={onChange} aria-label="Input Text" />
		</Grommet>
	);
}

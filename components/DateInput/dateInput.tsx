import { Grommet, DateInput as DateInputGrommet } from 'grommet';
import { theme } from '@/styles/grommetTheme';

type Props = {
	format?: string | undefined;
	id?: string | undefined;
	label?: string | undefined;
	onChange?: () => void;
	value?: string | string[] | undefined;
};

export default function DateInput({ format, id, label, onChange, value }: Props) {
	return (
		<Grommet theme={theme}>
			{!label ? null : (
				<div className="input__label">
					<label htmlFor={id}>{label}</label>
				</div>
			)}
			<DateInputGrommet format={format} id={id} value={value} onChange={onChange} />
		</Grommet>
	);
}

DateInput.defaultProps = {
	format: 'dd/mm/yyyy',
};

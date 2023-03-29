import { TextInput as TextInputGrommet } from 'grommet';

type Props = {
	id?: string | undefined;
	label?: string | undefined;
	onChange?: () => void;
	value?: string | number | undefined;
};

export default function TextInput({ id, label, onChange, value }: Props) {
	return (
		<>
			{!label ? null : (
				<div className="mt-1 mb-1 text-soft-purple">
					<label htmlFor={id}>{label}</label>
				</div>
			)}
			<TextInputGrommet
				value={value}
				id={id}
				onChange={onChange}
				aria-label="Input Text"
				className="text-input__txt-container"
				style={{ padding: '16px' }}
			/>
		</>
	);
}

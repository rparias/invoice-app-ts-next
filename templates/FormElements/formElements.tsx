import TextInput from '@/components/TextInput/textInput';

export default function FormElements() {
	return (
		<section className="mt-4">
			<h2 className="text-grey">Form Elements</h2>
			<TextInput label="Street Address" id="street-address" />
		</section>
	);
}

import Dropdown from '@/components/Dropdown/dropdown';
import TextInput from '@/components/TextInput/textInput';

export default function FormElements() {
	return (
		<section className="mt-4">
			<h2 className="text-grey">Form Elements</h2>
			<div className="row">
				<div className="col-12-xs col-6-sm col-4-lg mt-2 mb-2 buttons__btn-container">
					<div>
						<p className="row justify-center text-grey mb-1">Text Field</p>
						<TextInput label="Street Address" id="street-address" />
					</div>
				</div>
				<div className="col-12-xs col-6-sm col-4-lg mt-2 mb-2 buttons__btn-container">
					<div>
						<p className="row justify-center text-grey mb-1">Dropdown</p>
						<Dropdown
							label="Payment Terms"
							id="payment-terms"
							options={['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days']}
						/>
					</div>
				</div>
				<div className="col-12-xs col-6-sm col-4-lg mt-2 mb-2 buttons__btn-container">
					<div>
						<p className="row justify-center text-grey mb-1">Date Picker</p>
					</div>
				</div>
			</div>
		</section>
	);
}

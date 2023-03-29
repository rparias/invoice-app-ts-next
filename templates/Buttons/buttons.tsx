import Button from '@/components/Button/button';
import './buttons.scss';

export default function Buttons() {
	return (
		<section className="mt-4">
			<h2 className="text-grey">Buttons</h2>
			<div className="row">
				<div className="col-12-xs col-6-sm col-4-lg mt-2 mb-2 buttons__btn-container">
					<div>
						<p className="row justify-center text-grey mb-1">Button with icon</p>
						<Button design="primary" icon="/assets/icon-plus.svg">
							New Invoice
						</Button>
					</div>
				</div>
				<div className="col-12-xs col-6-sm col-4-lg mt-2 mb-2 buttons__btn-container">
					<div>
						<p className="row justify-center text-grey mb-1">Button Primary</p>
						<Button design="primary">Mark as Paid</Button>
					</div>
				</div>
				<div className="col-12-xs col-6-sm col-4-lg mt-2 mb-2 buttons__btn-container">
					<div>
						<p className="row justify-center text-grey mb-1">Button Danger</p>
						<Button design="danger">Delete</Button>
					</div>
				</div>
				<div className="col-12-xs col-6-sm col-4-lg mt-2 mb-2 buttons__btn-container">
					<div>
						<p className="row justify-center text-grey mb-1">Button Gray Light</p>
						<Button design="gray-light">Edit</Button>
					</div>
				</div>
				<div className="col-12-xs col-6-sm col-4-lg mt-2 mb-2 buttons__btn-container">
					<div>
						<p className="row justify-center text-grey mb-1">Button Gray Dark</p>
						<Button design="gray-dark">Save as Draft</Button>
					</div>
				</div>
				<div className="col-12-xs col-6-sm col-4-lg mt-2 mb-2 buttons__btn-container">
					<div>
						<p className="row justify-center text-grey mb-1">Button Full Width</p>
						<Button design="full-width">+ Add New Item</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

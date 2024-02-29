import { ControlContainer } from '@gb-superset/supports/control';
import { Button } from '@wordpress/components';
import { useState, useMemo, useEffect } from '@wordpress/element';
import 'react-responsive-modal/styles.css';
import './style.scss';
import Modal from 'react-responsive-modal';
export default (props) => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => {
		setOpen(true);

	}

	const onCloseModal = () => setOpen(false);
	return (
		<ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-icon-picker-control">
			<h4 className='gb-superset-icon-picker-control-label'>{props.label || 'Icon Picker'}</h4>

			<div className="gb-superset-icon-picker-area" onClick={onOpenModal}>
				<Button >Pick Icon</Button>
			</div>

			<Modal open={open} onClose={onCloseModal} center classNames={{}}>
				<h5>All Icons</h5>
			</Modal>
		</ControlContainer>
	);
}

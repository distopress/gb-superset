import { ControlContainer } from '@gb-superset/supports/control';
import { Button, TabPanel } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

import Modal from 'react-responsive-modal';
import icons from '../../../../assets/icons';
import IconList from './IconList';


const iconCategories = [
	{
		label: 'All',
		value: 'all',
	},
	{
		label: 'Font Awesome Solid',
		value: 'solid',
	},
	{
		label: 'Font Awesome Brand',
		value: 'brands',
	},
	{
		label: 'Font Awesome Regular',
		value: 'regular',
	}
];


const iconsByCategory = Object.groupBy(icons, ({ type }) => type);

export default (props) => {
	const [open, setOpen] = useState(false);
	const [iconList, setIconList] = useState(icons);
	const defaultIcon = icons.find(icon => icon?.title === props?.value?.title || 'plus');
	const [selectedIcon, setSelectedIcon] = useState(defaultIcon);

	const onOpenModal = () => {
		setOpen(true);

	}

	// useEffect(() => {
	// 	props.onChange(selectedIcon);
	// }, [selectedIcon]);

	const onCloseModal = () => setOpen(false);
	return (
		<ControlContainer {...props} valueProp={'value'} changeProp={'onChange'} className="gb-superset-icon-picker-control">
			<h4 className='gb-superset-icon-picker-control-label'>{props.label || 'Icon Picker'}</h4>

			<div className="gb-superset-icon-picker-area" onClick={onOpenModal}>
				<div className="gb-superset-icon-picker-preview">
					<div className="gb-superset-icon-picker-preview-icon" dangerouslySetInnerHTML={{ __html: selectedIcon?.src }} />
				</div>
			</div>

			<Modal open={open} onClose={onCloseModal} center classNames={{
				overlay: '',
				modal: 'gb-superset-icon-picker-modal',
			}}>
				<h5>All Icons</h5>

				<TabPanel
					tabs={iconCategories.map((category) => { return { name: category?.value, title: category?.label } })}
				>
					{
						(tab) => (
							<IconList icons={tab.name === 'all' ? iconList : iconsByCategory[tab.name]} selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
						)
					}
				</TabPanel>
			</Modal>

		</ControlContainer>
	);
}

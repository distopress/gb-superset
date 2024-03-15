import { Button, TabPanel, Modal } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { list, reset } from '@wordpress/icons';
import { dispatch, select } from '@wordpress/data';
import { solid, regular } from '../../../../assets/icons';
import IconList from './IconList';


const iconCategories = [
	{
		label: 'All',
		value: 'all',
	},
	{
		label: 'Solid',
		value: 'solid',
	},
	{
		label: 'Regular',
		value: 'regular',
	}
];

const solidIcons = Object.values(solid).map(icon => ({ name: icon.name, component: icon }))
const regularIcons = Object.values(regular).map(icon => ({ name: icon.name, component: icon }))


const iconsByCategory = {
	solid: solidIcons,
	regular: regularIcons
}

const icons = [...solidIcons, ...regularIcons];

const IconControl = ({ label, value, onChange }) => {
	const [open, setOpen] = useState(false);
	const defaultIcon = value?.title ? icons.find(icon => icon?.title === value.title) : {};
	const [selectedIcon, setSelectedIcon] = useState();
	const [scrollToSelected, setScrollToSelected] = useState(false);

	useEffect(() => {
		if (!selectedIcon?.name || !open || !scrollToSelected) {
			return
		}

		setTimeout(() => {
			const selectedIconEl = document.querySelector('.gb-superset-icon-picker-icon-selected');
			if (selectedIconEl) {
				let scrollHeight = selectedIconEl.offsetTop;
				selectedIconEl.parentNode.scrollTop = scrollHeight - 130;
				setScrollToSelected(false);
			}
		})
	}, [open, selectedIcon]);


	useEffect(() => {
		const { getSelectedBlockClientId } = select('core/block-editor');
		const { selectBlock } = dispatch("core/block-editor");
		const blockId = getSelectedBlockClientId();
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				selectBlock(blockId);
			}
		})
	}, [])



	const onOpenModal = () => {
		setOpen(true);
		if (selectedIcon?.name)
			setScrollToSelected(true);
	}

	const handleInsertIcon = () => {
		setOpen(false);
		if (onChange) {
			onChange(selectedIcon);
		}
	}

	const onCloseModal = () => setOpen(false);

	const defaultActionProps = {
		showTooltip: true,
		tooltipPosition: 'top',
		className: 'gb-superset-icon-picker-actions-item'
	}

	return (
		<>
			<div className='gb-superset-icon-picker-wrapper'>
				<label className='gb-superset-icon-picker-label'>{label || 'Add Icon'}</label>

				<div className='gb-superset-icon-picker-actions'>
					<Button {...defaultActionProps} label='None' icon={reset} onClick={() => setSelectedIcon(null)} />
					<Button {...defaultActionProps} label="Pick from library" onClick={onOpenModal}>
						{selectedIcon ?
							<selectedIcon.component />
							:
							list
						}
					</Button>
				</div>
			</div>

			{open && <Modal onRequestClose={onCloseModal} className='gb-superset-icon-picker-modal'>
				<TabPanel orientation='vertical' className='gb-superset-icon-picker-tab'
					tabs={iconCategories.map((category) => { return { name: category?.value, title: category?.label } })}
				>
					{
						(tab) => (
							<IconList type={tab.name} icons={tab.name === 'all' ? icons : iconsByCategory[tab.name]} selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
						)
					}
				</TabPanel>
				<div className="gb-superset-icon-picker-modal-footer">
					<Button
						variant="primary"
						size="compact"
						onClick={handleInsertIcon}
						className={`gb-superset-icon-picker-insert-btn`}>
						Insert
					</Button>
				</div>
			</Modal>}
		</>
	);
};

export default IconControl;

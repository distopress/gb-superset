import { Button, TabPanel, ButtonGroup, Dropdown, Modal } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { list, reset, upload, Icon } from '@wordpress/icons';
import { applyFilters } from '@wordpress/hooks';
import { MediaUpload } from '@wordpress/block-editor';
import { dispatch, select } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import icons from '../../../../assets/icons';
import IconList from './IconList';
import UpdateDatabase from '../../../api/UpdateDatabase';


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


const iconsByCategory = Object.groupBy(icons.slice(0, 100), ({ type }) => type);

const IconControl = ({ label, value, onChange }) => {
	const [open, setOpen] = useState(false);
	const defaultIcon = value?.title ? icons.find(icon => icon?.title === value.title) : {};
	const [selectedIcon, setSelectedIcon] = useState(defaultIcon);
	const [scrollToSelected, setScrollToSelected] = useState(false);
	const [allowUpload, setAllowUpload] = useState(false);
	const [settingsData, setSettingsData] = useState({});
	const [svg, setSvg] = useState(value?.id || '');


	useEffect(() => {
		// apiFetch({ path: '/gb-superset/v1/settings' })
		// 	.then((data) => {
		// 		setSettingsData(data.settings);
		// 		setAllowUpload(data.settings.unfiltered_upload.status === 'active')
		// 	})
	}, []);

	useEffect(() => {
		if (!selectedIcon?.title || !open || !scrollToSelected) {
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
		if (Object.keys(selectedIcon).length > 0)
			setScrollToSelected(true);
	}

	const handleInsertIcon = () => {
		setOpen(false);
		if (onChange) {
			onChange(selectedIcon);
		}
		setSvg('')
	}

	const onCloseModal = () => setOpen(false);

	const handleSVGUpload = (media) => {

		if (media.url && media.mime.includes('svg')) {
			fetch(media.url)
				.then(response => response.text())
				.then(data => {
					const svgMarkup = data;
					const svgObject = {
						id: media.id,
						label: media.title,
						src: svgMarkup,
						title: media.title.toLowerCase(),
						type: 'custom'
					}
					console.log(svgObject);
					//setShowIconOnPreview(svgMarkup);
					onChange(svgObject);
					setSelectedIcon(svgObject);
				})
		}
		setSvg(media.id);
	}

	const handleAllowSvg = (onClose) => {

		const newSettings = { ...settingsData };
		if (newSettings.unfiltered_upload) {
			newSettings.unfiltered_upload.status = 'active';
		}
		UpdateDatabase('settings', { settings: newSettings });
		setAllowUpload(true);
		onClose;
		location.reload();
	}

	const defaultActionProps = {
		showTooltip: true,
		tooltipPosition: 'top',
		//isSmall: true,
		className: 'gb-superset-icon-picker-actions-item'
	}



	return (
		<>
			<div className='gb-superset-icon-picker-wrapper'>
				<label className='gb-superset-icon-picker-label'>{label || 'Add Icon'}</label>

				<div className='gb-superset-icon-picker-actions'>
					<Button {...defaultActionProps} label='None' icon={reset} onClick={() => setSelectedIcon({})} />
					{/*

					{allowUpload ?
						(
							<MediaUpload
								onSelect={handleSVGUpload}
								allowedTypes={['image/svg+xml']}
								value={svg}
								render={({ open }) => (
									<Button {...defaultActionProps} onClick={open} label="Pick from library" icon={upload} />
								)}
							/>
						)
						:
						(
							<Dropdown
								className="gkit-icon-picker__dropdown"
								contentClassName="gkit-icon-picker__dropdown-content"
								popoverProps={{ placement: "top" }}
								renderToggle={({ isOpen, onToggle }) => (
									<Button {...defaultActionProps} aria-expanded={isOpen} onClick={onToggle} label="Upload SVG" icon={upload} />
								)}
								renderContent={({ onClose }) => <>
									<div className='gkit-icon-picker__dropdown-content-wrapper'>
										<h2 className='gkit-icon-picker__dropdown-header'>Enable SVG File Upload</h2>
										<p className='gkit-icon-picker__dropdown-description'>Before you enable SVG file upload, be aware that such files include a security vulnerability. <b>Reload</b> the editor once after clicking the "Enable" button to finish the process</p>
										<div className='gkit-icon-picker__dropdown-buttons'>
											<Button variant="secondary" onClick={onClose}>Cancel</Button>
											<Button variant="primary" onClick={() => handleAllowSvg(onClose)}>Enable</Button>
										</div>
									</div>
								</>}
							/>
						)}
				*/}

					<Button {...defaultActionProps} label="Pick from library" onClick={onOpenModal}>
						{selectedIcon?.src ?
							<span dangerouslySetInnerHTML={{ __html: selectedIcon.src }} />
							:
							list
						}
					</Button>
				</div>
			</div>

			{open && <Modal onRequestClose={onCloseModal} className='gb-superset-icon-picker-modal'>
				<TabPanel
					tabs={iconCategories.map((category) => { return { name: category?.value, title: category?.label } })}
				>
					{
						(tab) => (
							<IconList icons={tab.name === 'all' ? icons : iconsByCategory[tab.name]} selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
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

import { Flex, FlexItem, SearchControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import React from 'react';
import { RangeControl, ColorPicker } from '@wordpress/components';

const IconList = ({ icons = [], type, selectedIcon, setSelectedIcon }) => {

	const [searchInput, setSearchInput] = useState('');
	const [filteredIcons, setFilteredIcons] = useState(icons);
	const [strokeWidth, setStrokeWidth] = useState(1.5);
	const [size, setSize] = useState(24);
	const [color, setColor] = useState('#000000');

	useEffect(() => {
		setFilteredIcons(icons);
	}, [icons]);

	let timer;
	useEffect(() => {
		if (!searchInput) {
			setFilteredIcons(icons);
			return;
		}

		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			const keyword = searchInput.toLowerCase();
			const newFilteredIcons = icons.filter((icon) => {
				return icon.name.toLowerCase().includes(keyword);
			})
			setFilteredIcons(newFilteredIcons);
		}, 500);
	}, [searchInput]);

	return (
		<div>
			{/* <RangeControl
				initialPosition={24}
				label="Size (px)"
				max={50}
				min={1}
				onChange={setSize}
			/> */}
			{type === 'regular' && <RangeControl
				step={0.5}
				initialPosition={1.5}
				label="Stroke Width"
				max={5}
				min={1}
				onChange={setStrokeWidth}
			/>}
			{/* <ColorPicker onChange={setColor} /> */}
			<SearchControl
				size="compact"
				value={searchInput}
				onChange={setSearchInput}
				className="gb-superset-icon-picker-search-control"
			/>

			<div className="gb-superset-icon-picker-list">
				{filteredIcons.map((icon, index) => {
					return (
						<div className={`gb-superset-icon-picker-icon ${(selectedIcon?.name == icon?.name ? 'gb-superset-icon-picker-icon-selected' : '')} ${icon?.name || ''}`} key={index} onClick={() => setSelectedIcon(icon)}>
							<div className="gb-superset-icon-picker-icon-content">
								<icon.component width={size + 'px'} strokeWidth={strokeWidth} color={color} />
							</div>
						</div>
					);
				})}
			</div>

		</div>
	);
};

export default IconList;

import { SearchControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import React from 'react';

const IconList = ({ icons = [], type, selectedIcon, setSelectedIcon, strokeWidth }) => {

	const [searchInput, setSearchInput] = useState('');
	const [filteredIcons, setFilteredIcons] = useState(icons);
	const [size, setSize] = useState(24);

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
								<icon.component width={size + 'px'} strokeWidth={strokeWidth} />
							</div>
						</div>
					);
				})}
			</div>

		</div>
	);
};

export default IconList;

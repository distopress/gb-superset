import { Flex, FlexItem, SearchControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import React from 'react';

const IconList = ({ icons = [], selectedIcon, setSelectedIcon }) => {

	const [searchInput, setSearchInput] = useState('');
	const [filteredIcons, setFilteredIcons] = useState(icons);


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
				return icon.title.toLowerCase().includes(keyword);
			})
			setFilteredIcons(newFilteredIcons);
		}, 500);
	}, [searchInput]);
	return (
		<div>

			<SearchControl
				value={searchInput}
				onChange={setSearchInput}
				className="gb-superset-icon-picker-search-control"
			/>

			<div className="gb-superset-icon-picker-list">
				{filteredIcons.map((icon, index) => {
					return (
						<div className={"gb-superset-icon-picker-icon " + icon?.title + (selectedIcon?.title == icon?.title ? ' gb-superset-icon-picker-icon-selected' : '')} key={index} onClick={() => setSelectedIcon(icon)}>
							<div className="gb-superset-icon-picker-icon-content" dangerouslySetInnerHTML={{ __html: icon?.src }} />
						</div>
					);
				})}
			</div>

		</div>
	);
};

export default IconList;

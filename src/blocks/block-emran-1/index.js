import metadata from './block.json';
import SaveContent from './SaveContent';
import style from './style';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
	TextControl,
	ToggleControl,
	TestGroupControl,
	ColorPicker
} from '@gb-superset/controls/inspector';

import './style.scss';

const block = class extends blockType {
	metadata = metadata;

	InspectorControls = () => {
		return (
			<>
				<Panel title={__('My control')}>
					<TextControl
						label="Foo"
						help="bar"
						name="backgroundColor"

						responsive={true}
						state={['hover', 'focus']}
					/>
					<ToggleControl
						label="Text Field"
						help="Additional help text"
						name="toggle"

						responsive={false}
					/>
					<ColorPicker
					label="Color"
					help="Additional help text"
					name="color"

					responsive={false}
				/>
					{/* <TestGroupControl
						label="My Text Field"
						help="Additional help text"
						name="groupControl"
						responsive={true}
					/> */}

					{/* <IconPicker label="Add Icon" name="icon" /> */}
				</Panel>
			</>
		);
	}

	EditorControls = () => {
		return (
			<>
				<AlignmentControl
					value={this.ctx.attributes.align}
					onChange={(v) => this.ctx.setAttributes({ align: v })}
				/>
			</>
		);
	}

	// EditContent = ({ attributes, blockProps }) => {
	// 	return (
	// 		<div { ...blockProps }>
	// 			foo
	// 		</div>
	// 	);
	// }

	SaveContent = SaveContent;

	StyleSheet = style
}

new block().register();

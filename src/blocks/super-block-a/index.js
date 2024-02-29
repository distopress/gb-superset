import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
	TextControl,
	ToggleControl,
	TestGroupControl
} from '@gb-superset/controls/inspector';
import IconPicker from '../../gb-superset/controls/inspector/icon-picker';

const block = class extends blockType {
	metadata = metadata;

	InspectorControls = () => {
		return (
			<>
				<Panel title={__('My control')}>
					{/* <TextControl
						label="Text Field"
						help="Additional help text"
						name="content"

						responsive={true}
						state={['hover', 'focus']}
					/> */}
					<ToggleControl
						label="Text Field"
						help="Additional help text"
						name="toggle"

						responsive={false}
					/>
					{/* <TestGroupControl
						label="My Text Field"
						help="Additional help text"
						name="groupControl"
						responsive={true}
					/> */}

					<IconPicker label="Choose Icon" name="icon" />
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
}

new block().register();

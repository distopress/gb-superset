import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
	TextControl,
	ToggleControl,
	TestGroupControl,
	MediaUpload
} from '@gb-superset/controls/inspector';

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

					<h3>MediaUpload:</h3>
					<MediaUpload
						name="image"
					/>

					<h3>ToggleControl:</h3>
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
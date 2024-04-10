import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
	Dropdown,
	DimensionsGroupControl,
	MediaUpload
} from '@gb-superset/controls/inspector';

const block = class extends blockType {
	metadata = metadata;

	InspectorControls = () => {
		return (
			<>
				<Panel title={__('My control')}>	

					<MediaUpload
						name="images"
					/>

					{/* <Dropdown
						label="Color 1"
						labelPosition="inline"
					>
						
					</Dropdown> */}

					{/* <DimensionsGroupControl
						label="Dimensions"
						labelPosition="inline"
						name="textGroup"
					/>	 */}

					{/* <Dropdown
						label="Color 2"
						labelPosition="inline"
					>
						
					</Dropdown> */}
					
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
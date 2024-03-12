import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
	Dropdown,
	RangeControl
} from '@gb-superset/controls/inspector';

const block = class extends blockType {
	metadata = metadata;

	InspectorControls = () => {
		return (
			<>
				<Panel title={__('CSS Transformation')}>		

					<Dropdown
						label="Rotate"
						labelPosition="inline"
					>
						<RangeControl
							max={360}
							min={-360}
							name="rotate"
							label="Rotate (deg)"
							labelPosition="top"
						/>
					</Dropdown>

					<Dropdown
						label="Offset"
						labelPosition="inline"
					>
						<RangeControl
							max={360}
							min={-360}
							name="offsetx"
							label="Offset X"
							labelPosition="top"
						/>

						<RangeControl
							max={360}
							min={-360}
							name="offsety"
							label="Offset Y"
							labelPosition="top"
						/>
					</Dropdown>

					<Dropdown
						label="Scale"
						labelPosition="inline"
					>
						<RangeControl
							max={2}
							min={0}
							name="scale"
							label="Scale"
							labelPosition="top"
						/>
					</Dropdown>

					<Dropdown
						label="Skew"
						labelPosition="inline"
					>
						<RangeControl
							max={360}
							min={-360}
							name="skewx"
							label="Skew X"
							labelPosition="top"
						/>
						
						<RangeControl
							max={360}
							min={-360}
							name="skewy"
							label="Skew Y"
							labelPosition="top"
						/>
					</Dropdown>
					
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

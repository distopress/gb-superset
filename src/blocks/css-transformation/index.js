import metadata from './block.json';
import SaveContent from './SaveContent';
import style from './style';

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
						label="Translate"
						labelPosition="inline"
					>
						<RangeControl
							max={360}
							min={-360}
							name="translatex"
							label="Translate X"
							labelPosition="top"
							allowReset={true}
						/>

						<RangeControl
							max={360}
							min={-360}
							name="translatey"
							label="Translate Y"
							labelPosition="top"
							allowReset={true}
						/>
					</Dropdown>

					<Dropdown
						label="Rotate"
						labelPosition="inline"
					>
						<RangeControl
							max={360}
							min={-360}
							name="rotatex"
							label="Rotate X (deg)"
							labelPosition="top"
							allowReset={true}
						/>

						<RangeControl
							max={360}
							min={-360}
							name="rotatey"
							label="Rotate Y (deg)"
							labelPosition="top"
							allowReset={true}
						/>

						<RangeControl
							max={360}
							min={-360}
							name="rotatez"
							label="Rotate Z (deg)"
							labelPosition="top"
							allowReset={true}
						/>
					</Dropdown>

					<Dropdown
						label="Scale"
						labelPosition="inline"
					>
						<RangeControl
							min={ 0.0 }
							max={ 2.0 }
							step={ 0.1 }
							name="scalex"
							label="Scale X"
							labelPosition="top"
							allowReset={true}
						/>

						<RangeControl
							min={ 0.0 }
							max={ 2.0 }
							step={ 0.1 }
							name="scaley"
							label="Scale Y"
							labelPosition="top"
							allowReset={true}
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
							allowReset={true}
						/>
						
						<RangeControl
							max={360}
							min={-360}
							name="skewy"
							label="Skew Y"
							labelPosition="top"
							allowReset={true}
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

	StyleSheet = style;
}

new block().register();

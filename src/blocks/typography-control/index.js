import metadata from './block.json';
import SaveContent from './SaveContent';
import style from './style';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
	Dropdown,
	RangeControl,
	SelectControl,
	FontFamilyControl,
	ToggleGroupControl,
} from '@gb-superset/controls/inspector';

const block = class extends blockType {
	metadata = metadata;

	InspectorControls = () => {
		return (
			<>
				<Panel title={__('Typography Control')}>		
					<Dropdown
						label="Typography"
						labelPosition="inline"
					>
						<FontFamilyControl
							label="Family"
							labelPosition="inline"
							name="fontFamily"
							loadFont={this.ctx?.attributes?.fontFamily?.desktop}
						/>
						<RangeControl
							min={0}
							max={100}
							name="fontSize"
							label="Size"
							labelPosition="top"
						/>

						<SelectControl
							label="Weight"
							labelPosition="top"
							name="fontWeight"
							options={[
								{ label: 'Default', value: '' },
								{ label: '100', value: '100' },
								{ label: '200', value: '200' },
								{ label: '300', value: '300' },
								{ label: '400', value: '400' },
								{ label: '500', value: '500' },
								{ label: '600', value: '600' },
								{ label: '700', value: '700' },
								{ label: '800', value: '800' },
								{ label: '900', value: '900' },
							]}
						/>

						<ToggleGroupControl
							label="Transform"
							labelPosition="top"
							name="textTransform"
							options={[ 
								{ label: '-', value: 'none' },
								{ label: 'Ab', value: 'capitalize' },
								{ label: 'AB', value: 'uppercase' },
								{ label: 'ab', value: 'lowercase' },
							]}
						/>

						<ToggleGroupControl
							label="Style"
							labelPosition="top"
							name="fontStyle"
							options={[ 
								{ label: '-', value: 'normal' },
								{ label: '/', value: 'italic' },
								{ label: '< >', value: 'oblique' },
							]}
						/>

						<ToggleGroupControl
							label="Decoration"
							labelPosition="top"
							name="textDecoration"
							options={[ 
								{ label: '-', value: 'none' },
								{ label: 'U', value: 'underline' },
								{ label: 'L', value: 'line-through' },
							]}
						/>

						<RangeControl
							min={0}
							max={100}
							name="lineHeight"
							label="Line Height"
							labelPosition="top"
						/>

						<RangeControl
							min={-5}
							max={10}
							step={ 0.1 }
							name="letterSpacing"
							label="Letter Spacing"
							labelPosition="top"
						/>

						<RangeControl
							min={0}
							max={100}
							name="wordSpacing"
							label="Word Spacing"
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

	StyleSheet = style;
}

new block().register();

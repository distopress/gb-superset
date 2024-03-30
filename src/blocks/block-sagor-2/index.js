import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	AnglePickerControl,
	BoxControl,
	RadioControl,
	SelectTagsField,
	MultiToggleControl,
	QueryControls,
	Panel,
} from '@gb-superset/controls/inspector';

const block = class extends blockType {
	metadata = metadata;

	InspectorControls = () => {
		return (
			<>
				<Panel title={__('My control')}>					
					<AnglePickerControl
						label="AnglePicker Control"
						labelPosition="top"
						help="AnglePicker Control Help Text."
						name="anglePicker"
					/>

					<BoxControl
						label="Box Control"
						labelPosition="top"
						help="Box Control Help Text."
						name="box"
						allowReset={true}
					/>

					<SelectTagsField
						label="Select Tags Field"
						labelPosition="top"
						help="Select Tags Field Help Text."
						name="selectTagsField"
						suggestions={[ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ]}
					/>

					<RadioControl
						label="Radio Control"
						labelPosition="top"
						help="Radio Control Help Text."
						name="radio"
						options={['Author', 'Editor']}
					/>

					<QueryControls
						label="Query Controls Control"
						labelPosition="top"
						help="Query Controls Control Help Text."
						authorList={[
							{ id: 1, name: 'admin' },
							{ id: 2, name: 'editor' }
						]}					
						categoriesList={[
							{ id: 1, name: 'Category 1', parent: 0 },
							{ id: 2, name: 'Category 2', parent: 0 },
							{ id: 3, name: 'Category 3', parent: 0 },
						]}			
						value={this.ctx.attributes.query}
						setHandler={this.ctx.setAttributes}
					/>
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
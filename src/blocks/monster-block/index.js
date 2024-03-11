import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';

import {
	AnglePickerControl,
	AlignmentMatrixControl,
	BorderBoxControl,
	BorderControl,
	BoxControl,
	CheckboxControl,
	ColorPalette,
	ColorPicker,
	DatePicker,
	DuoColorPicker,
	DateTimePicker,
	FontSizePicker,
	SelectTagsField,
	FocalPointPicker,
	GradientPicker,
	MediaUpload,
	NumberControl,
	RadioControl,
	RangeControl,
	SelectControl,
	SearchControl,
	TimePicker,
	TextControl,
	TextareaControl,
	ToggleGroupControl,
	ToggleControl,
	QueryControls,
	Panel,
} from '@gb-superset/controls/inspector';


import './style.scss';

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

					<AlignmentMatrixControl
						label="Alignment Matrix Control"
						labelPosition="top"
						help="Alignment Matrix Control Help Text."
						name="alignmentMatrix"
					/>

					<BorderBoxControl
						label="Border Box Control"
						labelPosition="top"
						help="Border Box Control Help Text."
						name="borderBox"
					/>

					<BorderControl
						label="Border Control"
						labelPosition="top"
						help="Border Control Help Text."
						name="border"
					/>

					<BoxControl
						label="Box Control"
						labelPosition="top"
						help="Box Control Help Text."
						name="box"
						allowReset={true}
					/>

					<CheckboxControl
						label="Checkbox Control"
						labelPosition="top"
						help="Checkbox Control Help Text."
						name="checkbox"
					/>

					<ColorPalette
						label="Color Palette"
						labelPosition="top"
						help="Color Palette Help Text."
						name="colorPalette"
					/>

					<ColorPicker
						label="Color Picker"
						labelPosition="top"
						help="Color Picker Help Text."
            name="colorPicker"
            enableAlpha
        	/>

					<FontSizePicker
						label="FontSize Picker"
						labelPosition="top"
						help="FontSize Picker Help Text."
						name="fontSizePicker"
						fontSizes={[
							{ name: __('Small'), slug: 'small', size: 12 },
							{ name: __('Big'), slug: 'big', size: 26 },
						]}
						withReset={true}
						withSlider={true}
						fallbackFontSize={16}	// Only relevant if withSlider is true
					/>

					<GradientPicker
						label="Gradient Picker"
						labelPosition="top"
						help="Gradient Picker Help Text."
						name="gradientPicker"
					/>

					<NumberControl
						label="Number Control"
						labelPosition="top"
						help="Number Control Help Text."
						name="number"
						min={10}
						max={100}
						isShiftStepEnabled={true}
						shiftStep={10}
					/>

					<RadioControl
						label="Radio Control"
						labelPosition="top"
						help="Radio Control Help Text."
						name="radio"
						options={['Author', 'Editor']}
					/>

					<ToggleControl
						label="ToggleC ontrol"
						labelPosition="inline"
						help="ToggleC ontrol Help Text."
						name="toggle"
					/>

					<RangeControl
						label="Range Control"
						labelPosition="top"
						help="Range Control Help Text."
						name="range"
						min={2}
						max={10}
					/>

					<DuoColorPicker
						label="Duo Color Picker"
						labelPosition="top"
						help="Duo Color Picker Help Text."
						name="duoColorPicker"
					/>

					<DatePicker
						label="Date Picker"
						labelPosition="top"
						help="Date Picker Help Text."
						name="datePicker"
						is12Hour={ true }
					/>

					<DateTimePicker
						label="Date Time Picker"
						labelPosition="top"
						help="Date Time Picker Help Text."
						name="dateTimePicker"
						is12Hour={ true }
					/>

					<TimePicker
						label="Time Picker"
						labelPosition="top"
						help="Time Picker Help Text."
						name="timePicker"
						is12Hour={ true }
					/>

					<FocalPointPicker
						label="Focal Point Picker"
						labelPosition="top"
						help="Focal Point Picker Help Text."
						name="focalPointPicker"
					/>

					<MediaUpload
						label="Media Upload"
						labelPosition="inline"
						help="Media Upload Help Text."
						name="mediaUpload"
					/>

					<SearchControl
						label="Search Control"
						labelPosition="top"
						help="Search Control Help Text."
						name="search"
					/>

					<SelectControl
						label="Select Control"
						labelPosition="top"
						help="Select Control Help Text."
						name="select"
						options={ [
							{ label: 'Big', value: '100%' },
							{ label: 'Medium', value: '50%' },
							{ label: 'Small', value: '25%' },
						] }
					/>

					<SelectTagsField
						label="Select Tags Field"
						labelPosition="top"
						help="Select Tags Field Help Text."
						name="selectTagsField"
						suggestions={[ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ]}
					/>

					<TextareaControl
						label="Textarea Control"
						labelPosition="top"
						help="Textarea Control Help Text."
						name="textarea"
					/>

					<TextControl
						label="Text Control"
						labelPosition="inline"
						help="Text Control Help Text."
						name="textControl"
					/>

					<ToggleGroupControl
						label="Toggle Group Control"
						labelPosition="top"
						help="Toggle Group Control Help Text."
						name="toggleGroup"
						options={[ 'Horizontal', 'Vertical' ]}
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

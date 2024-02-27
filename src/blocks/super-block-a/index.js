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
	ButtonGroup,
	BoxControl,
	Button,
	Card,
	CheckboxControl,
	ColorPalette,
	ColorPicker,
	ComboboxControl,
	DatePicker,
	Divider,
	ExternalLink,
	FontSizePicker,
	FormToggle,
	GradientPicker,
	NumberControl,
	RadioControl,
	RangeControl,
	Panel,
	TabPanel,
	TextControl,
	TestGroupControl,
} from '@gb-superset/controls/inspector';

const block = class extends blockType {
	metadata = metadata;

	InspectorControls = () => {
		return (
			<>
				<Panel title={__('My control')}>
					<TextControl
						label="Text Field"
						help="Additional help text"
						name="content"

						responsive={true}
						state={['hover', 'focus']}
					/>
					<TestGroupControl
						label="My Text Field"
						help="Additional help text"
						name="groupControl"
						responsive={true}
					/>
				</Panel>
				<TabPanel
					// initialTabName="advance"
					// orientation="horizontal"
				>
					<div content="Settings">For Settings</div>
      		<div content="Styles">For Styles</div>
      		<div content="Advance">For Advance</div>
				</TabPanel>
				<Panel title={__('My All Control')}>
					<AlignmentMatrixControl
						label="Background Position"
						name="alignmentMatrix"
					/>
					<AnglePickerControl
						label="Angle Picker"
						name="anglePicker"
					/>
					<BorderBoxControl
						label="Border Box"
						name="borderBox"
					/>
					<BorderControl
						label="Border"
						name="border"
					/>
					<BoxControl
						label="Box Control"
						name="box"
						allowReset={true}
						// splitOnAxis={true}
					/>
					<ButtonGroup>
						<Button isSecondary>33.3%</Button>
						<Button isPrimary>66.6%</Button>
						<Button isSecondary>100%</Button>
					</ButtonGroup>
					<CheckboxControl
            label="Is author"
            help="Is the user a author or not?"
            name="checkBox"
        	/>
					<ColorPalette
						name="colorPalette"
					/>
					<ColorPicker
            name="colorPicker"
            enableAlpha
        	/>
					<ComboboxControl
						label="Font Size"
						name="comboBox"
						controls={[ 'Small', 'Normal', 'Large' ]}
					/>
					<DatePicker
						name="datePicker"
						is12Hour={ true }
						startOfWeek={6} // 0 for Sunday, 1 for Monday, etc.
					/>
					<DatePicker
						container="time"
						name="timePicker"
						is12Hour={ true }
					/>
					<DatePicker
						container="datetime"
						name="dateTimePicker"
						is12Hour={ true }
						startOfWeek={6} // 0 for Sunday, 1 for Monday, etc.
					/>
					<Divider/>
					<ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
					<FontSizePicker
						name="fontSize"
						fontSizes={[
							{
								name: __( 'Small' ),
								slug: 'small',
								size: 12,
							},
							{
								name: __( 'Big' ),
								slug: 'big',
								size: 26,
							},
						]}
						withReset={true}
						withSlider={true}
						fallbackFontSize={ 16 }	// Only relevant if withSlider is true				
					/>
					<FormToggle
            name="toggle"
						// checked={ true }
						// onChange={ (v) => console.log(v) }
        	/>
					<GradientPicker
            name="gradient"
        	/>
					<NumberControl
						label="Number"
						name="number"
						min={10}
						max={100}
            isShiftStepEnabled={ true }
            shiftStep={ 10 }
        	/>
					<RadioControl
            name="radio"
            label="User type"
            help="The type of the current user"
						options={[ 'Author', 'Editor' ]}
        	/>
					<RangeControl
						name="range"
            label="Range Control"
            min={ 2 }
            max={ 10 }
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
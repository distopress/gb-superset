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
	CheckboxControl,
	ColorPalette,
	ColorPicker,
	ComboboxControl,
	Divider,
	ExternalLink,
	FontSizePicker,
	GradientPicker,
	NumberControl,
	RadioControl,
	RangeControl,
	Panel,
	Text,
	TabPanel,
	TextControl,
	TestGroupControl,
} from '@gb-superset/controls/inspector';
import IconPicker from '../../gb-superset/controls/inspector/icon-picker';

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
					<div content="Settings">For Settings 1</div>
					<div content="Styles">For Styles 1</div>
					<div content="Advance">For Advance 3</div>
				</TabPanel>
				<Panel title={__('My All Control')}>

					<Text as="h3">AlignmentMatrixControl:</Text>
					<AlignmentMatrixControl
						label="Background Position"
						name="alignmentMatrix"
					/>

					<Text as="h3">AnglePickerControl:</Text>
					<AnglePickerControl
						name="anglePicker"
					/>

					<Text as="h3">BorderBoxControl:</Text>
					<BorderBoxControl
						name="borderBox"
					/>

					<Text as="h3">BorderControl:</Text>
					<BorderControl
						name="border"
					/>

					<Text as="h3">BoxControl:</Text>
					<BoxControl
						name="box"
						allowReset={true}
					// splitOnAxis={true}
					/>

					<Text as="h3">ButtonGroup & Button:</Text>
					<ButtonGroup>
						<Button isSecondary>33.3%</Button>
						<Button isPrimary>66.6%</Button>
						<Button isSecondary>100%</Button>
					</ButtonGroup>

					<Text as="h3">CheckboxControl:</Text>
					<CheckboxControl
						label="Is author"
						help="Is the user a author or not?"
						name="checkBox"
					/>

					<Text as="h3">ColorPalette:</Text>
					<ColorPalette
						name="colorPalette"
					/>

					<Text as="h3">ColorPicker:</Text>
					<ColorPicker
						name="colorPicker"
						enableAlpha
					/>

					<Text as="h3">ComboboxControl:</Text>
					<ComboboxControl
						name="comboBox"
						controls={['Small', 'Normal', 'Large']}
					/>

					<Text as="h3">Divider:</Text>
					<Divider />

					<Text as="h3">ExternalLink:</Text>
					<ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>

					<Text as="h3">FontSizePicker:</Text>
					<FontSizePicker
						name="fontSize"
						fontSizes={[
							{
								name: __('Small'),
								slug: 'small',
								size: 12,
							},
							{
								name: __('Big'),
								slug: 'big',
								size: 26,
							},
						]}
						withReset={true}
						withSlider={true}
						fallbackFontSize={16}	// Only relevant if withSlider is true
					/>

					<Text as="h3">GradientPicker:</Text>
					<GradientPicker
						name="gradient"
					/>

					<Text as="h3">NumberControl:</Text>
					<NumberControl
						name="number"
						min={10}
						max={100}
						isShiftStepEnabled={true}
						shiftStep={10}
					/>

					<Text as="h3">RadioControl:</Text>
					<RadioControl
						name="radio"
						help="The type of the current user"
						options={['Author', 'Editor']}
					/>

					<Text as="h3">RangeControl:</Text>
					<RangeControl
						name="range"
						min={2}
						max={10}
					/>

				</Panel>
				<IconPicker label="Choose Icon" name="icons" />
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

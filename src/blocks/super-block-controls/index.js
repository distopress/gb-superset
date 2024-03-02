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
	Divider,
	DatePicker,
	DuoColorPicker,
	DateTimePicker,
	ExternalLink,
	FontSizePicker,
	SelectTagsField,
	FocalPointPicker,
	GradientPicker,
	NumberControl,
	RadioControl,
	RangeControl,
	ResizableBox,
	ResponsiveWrapper,
	SelectControl,
	Panel,
	Text,
	TabPanel,
	TimePicker,
	TextControl,
	TextareaControl,
	TestGroupControl,
	ToggleGroupControl,
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
						placeholder="Text Field"
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
					initialTabName="advance"
					orientation="horizontal"
				>
					<div content="Settings">For Settings 1</div>
      		<div content="Styles">For Styles 1</div>
      		<div content="Advance">For Advance 3</div>
				</TabPanel>
				
				<Panel title={__('My All Control')}>

					<Text as="h3">SelectControl:</Text>
					<SelectControl
						name="selectControl"
						options={ [
							{ label: 'Big', value: '100%' },
							{ label: 'Medium', value: '50%' },
							{ label: 'Small', value: '25%' },
						] }
					/>

					<Text as="h3">FocalPointPicker:</Text>
					<FocalPointPicker
						name="focalPoint"
					/>

					<Text as="h3">ToggleGroupControl:</Text>
					<ToggleGroupControl 
						label="my label" 
						name="toggleGroup"
						options={[ 'Horizontal', 'Vertical' ]}
						isBlock
					/>

					<Text as="h3">ResponsiveWrapper:</Text>
					<ResponsiveWrapper naturalWidth={ 2000 } naturalHeight={ 680 }>
						<img
							src="https://s.w.org/style/images/about/WordPress-logotype-standard.png"
							alt="WordPress"
						/>
					</ResponsiveWrapper>

					<Text as="h3">ResizableBox:</Text>
					<ResizableBox
						enable={{
							bottom: true,
							bottomLeft: false,
							bottomRight: true,
							left: false,
							right: true,
							top: false,
							topLeft: false,
							topRight: false
						}}
						size={{ height: 200, width: 200 }}
					>
						<div style={{ alignItems: 'center', background: '#eee', display: 'flex', height: '100%', justifyContent: 'center', width: '100%' }} >
							Resize
						</div>
					</ResizableBox>

					<Text as="h3">DuoColorPicker:</Text>
					<DuoColorPicker
						name="duotone"
					/>

					<Text as="h3">DatePicker:</Text>
					<DatePicker
						name="date"
						is12Hour={ true }
					/>

					<Text as="h3">TimePicker:</Text>
					<TimePicker
						name="time"
						is12Hour={ true }
					/>

					<Text as="h3">DateTimePicker:</Text>
					<DateTimePicker
						name="dateTime"
						is12Hour={ true }
					/>

					<Text as="h3">SelectTagsField:</Text>
					<SelectTagsField
						name="tokenField"
						suggestions={[ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ]}
					/>

					<Text as="h3">TextareaControl:</Text>
					<TextareaControl
						name="textarea"
						help="Enter some text"
					/>

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
					
					<Text as="h3">Divider:</Text>
					<Divider/>

					<Text as="h3">ExternalLink:</Text>
					<ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>
					
					<Text as="h3">FontSizePicker:</Text>
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

					<Text as="h3">GradientPicker:</Text>
					<GradientPicker
            name="gradient"
        	/>

					<Text as="h3">NumberControl:</Text>
					<NumberControl
						name="number"
						min={10}
						max={100}
            isShiftStepEnabled={ true }
            shiftStep={ 10 }
        	/>

					<Text as="h3">RadioControl:</Text>
					<RadioControl
            name="radio"
            help="The type of the current user"
						options={[ 'Author', 'Editor' ]}
        	/>

					<Text as="h3">RangeControl:</Text>
					<RangeControl
						name="range"
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
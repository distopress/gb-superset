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
	MediaUpload,
	NumberControl,
	RadioControl,
	RangeControl,
	ResizableBox,
	ResponsiveWrapper,
	SelectControl,
	SearchControl,
	TabPanel,
	TimePicker,
	TextControl,
	TextareaControl,
	TestGroupControl,
	MultiToggleControl,
	Panel,
	QueryControls,
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

					<h3>QueryControls:</h3>
					<QueryControls
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

					<h3>SearchControl:</h3>
					<SearchControl
						name="search"
					/>

					<h3>MediaUpload:</h3>
					<MediaUpload
						name="image"
					/>

					<h3>SelectControl:</h3>
					<SelectControl
						name="selectControl"
						options={ [
							{ label: 'Big', value: '100%' },
							{ label: 'Medium', value: '50%' },
							{ label: 'Small', value: '25%' },
						] }
					/>

					<h3>FocalPointPicker:</h3>
					<FocalPointPicker
						name="focalPoint"
					/>

					<h3>MultiToggleControl:</h3>
					<MultiToggleControl
						label="my label"
						name="toggleGroup"
						options={[ 
							{ label: 'Horizontal', value: 'horizontal' },
							{ label: 'Vertical', value: 'vertical' }, 
						]}
						isBlock
					/>

					<h3>ResponsiveWrapper:</h3>
					<ResponsiveWrapper naturalWidth={ 2000 } naturalHeight={ 680 }>
						<img
							src="https://s.w.org/style/images/about/WordPress-logotype-standard.png"
							alt="WordPress"
						/>
					</ResponsiveWrapper>

					<h3>ResizableBox:</h3>
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

					<h3>DuoColorPicker:</h3>
					<DuoColorPicker
						name="duotone"
					/>

					<h3>DatePicker:</h3>
					<DatePicker
						name="date"
						is12Hour={ true }
					/>

					<h3>TimePicker:</h3>
					<TimePicker
						name="time"
						is12Hour={ true }
					/>

					<h3>DateTimePicker:</h3>
					<DateTimePicker
						name="dateTime"
						is12Hour={ true }
					/>

					<h3>SelectTagsField:</h3>
					<SelectTagsField
						name="tokenField"
						suggestions={[ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ]}
					/>

					<h3>TextareaControl:</h3>
					<TextareaControl
						name="textarea"
						help="Enter some text"
					/>

					<h3>AlignmentMatrixControl:</h3>
					<AlignmentMatrixControl
						label="Background Position"
						name="alignmentMatrix"
					/>

					<h3>AnglePickerControl:</h3>
					<AnglePickerControl
						name="anglePicker"
					/>

					<h3>BorderBoxControl:</h3>
					<BorderBoxControl
						name="borderBox"
					/>

					<h3>BorderControl:</h3>
					<BorderControl
						name="border"
					/>

					<h3>BoxControl:</h3>
					<BoxControl
						name="box"
						allowReset={true}
					// splitOnAxis={true}
					/>

					<h3>ButtonGroup & Button:</h3>					
					<Button isSecondary>33.3%</Button>
					<Button isPrimary>66.6%</Button>
					<Button isSecondary>100%</Button>

					<h3>CheckboxControl:</h3>
					<CheckboxControl
						label="Is author"
						help="Is the user a author or not?"
						name="checkBox"
					/>

					<h3>ColorPalette:</h3>
					<ColorPalette
						name="colorPalette"
					/>

					<h3>ColorPicker:</h3>
					<ColorPicker
            name="colorPicker"
            enableAlpha
        	/>

					<h3>Divider:</h3>
					<Divider />

					<h3>ExternalLink:</h3>
					<ExternalLink href="https://wordpress.org">WordPress.org</ExternalLink>

					<h3>FontSizePicker:</h3>
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

					<h3>GradientPicker:</h3>
					<GradientPicker
						name="gradient"
					/>

					<h3>NumberControl:</h3>
					<NumberControl
						name="number"
						min={10}
						max={100}
						isShiftStepEnabled={true}
						shiftStep={10}
					/>

					<h3>RadioControl:</h3>
					<RadioControl
						name="radio"
						help="The type of the current user"
						options={['Author', 'Editor']}
					/>

					<h3>RangeControl:</h3>
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

import metadata from './block.json';
import SaveContent from './SaveContent';
import style from './style';
import './style.scss';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
  ToggleControl,
  SelectControl,
	RangeControl
} from '@gb-superset/controls/inspector';

const block = class extends blockType {
	metadata = metadata;

	InspectorControls = () => {

		const AnimateType = [
			{ label: 'Default', value: '' },
			{ label: 'Bounce', value: 'bounce' },
			{ label: 'Flash', value: 'flash' },
			{ label: 'Pulse', value: 'pulse' },
			{ label: 'Shake', value: 'shakeX' },
			{ label: 'Head Shake', value: 'headShake' },
			{ label: 'Swing', value: 'swing' },
			{ label: 'Tada', value: 'tada' },
			{ label: 'Wobble', value: 'wobble' },
			{ label: 'Jello', value: 'jello' },
			{ label: 'Fading', value: '', disabled: true },
			{ label: 'Fade In', value: 'fadeIn' },
			{ label: 'Fade In Down', value: 'fadeInDown' },
			{ label: 'Fade In Left', value: 'fadeInLeft' },
			{ label: 'Fade In Right', value: 'fadeInRight' },
			{ label: 'Fade In Up', value: 'fadeInUp' },
			{ label: 'Zooming', value: '', disabled: true },
			{ label: 'Zoom In', value: 'zoomIn' },
			{ label: 'Zoom In Down', value: 'zoomInDown' },
			{ label: 'Zoom In Left', value: 'zoomInLeft' },
			{ label: 'Zoom In Right', value: 'zoomInRight' },
			{ label: 'Zoom In Up', value: 'zoomInUp' },
			{ label: 'Bouncing', value: '', disabled: true },
			{ label: 'Bounce In', value: 'bounceIn' },
			{ label: 'Bounce In Down', value: 'bounceInDown' },
			{ label: 'Bounce In Left', value: 'bounceInLeft' },
			{ label: 'Bounce In Right', value: 'bounceInRight' },
			{ label: 'Bounce In Up', value: 'bounceInUp' },
			{ label: 'Sliding', value: '', disabled: true },
			{ label: 'Slide In Down', value: 'slideInDown' },
			{ label: 'Slide In Left', value: 'slideInLeft' },
			{ label: 'Slide In Right', value: 'slideInRight' },
			{ label: 'Slide In Up', value: 'slideInUp' },
			{ label: 'Rotating', value: '', disabled: true },
			{ label: 'Rotate In', value: 'rotateIn' },
			{ label: 'Rotate In Down Left', value: 'rotateInDownLeft' },
			{ label: 'Rotate In Down Right', value: 'rotateInDownRight' },
			{ label: 'Rotate In Up Left', value: 'rotateInUpLeft' },
			{ label: 'Rotate In Up Right', value: 'rotateInUpRight' },
		];

		return (
			<>
				<Panel title={__('CSS Animation')}>

          <ToggleControl
						label="Enable"
            labelPosition="inline"
						name="enableAnimation"
					/>

          { this.ctx.attributes?.enableAnimation?.desktop && <>
            
						<SelectControl
							label="Type"
							labelPosition="top"
							name="animateType"
							options={AnimateType}
						/>
          
						<SelectControl
							label="Delay"
							labelPosition="top"
							name="delayAnimate"
							options={[
								{ label: 'Select Delay', value: '' },
								{ label: '2 Seconds', value: '2s' },
								{ label: '3 Seconds', value: '3s' },
								{ label: '4 Seconds', value: '4s' },
								{ label: '5 Seconds', value: '5s' },
							]}
						/>

						<RangeControl
							min={ 0.0 }
							max={ 5.0 }
							step={ 0.1 }
							name="animateDuration"
							label="Duration"
							labelPosition="top"
						/>

						<SelectControl
							label="Repeat"
							labelPosition="top"
							name="repeatAnimate"
							options={[
								{ label: 'Once', value: '1' },
								{ label: 'Twice', value: '2' },
								{ label: 'Thrice', value: '3' },
								{ label: 'Infinite', value: 'infinite' },
							]}
						/>
          
          </> }

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

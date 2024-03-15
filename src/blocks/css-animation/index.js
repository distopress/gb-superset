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
							options={[
								{ label: 'Default', value: '' },
								{ label: 'Bounce', value: 'bounce' },
								{ label: 'Flash', value: 'flash' },
								{ label: 'Pulse', value: 'pulse' },
								{ label: 'Head Shake', value: 'headShake' },
								{ label: 'Rubber Band', value: 'rubberBand' },
							]}
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

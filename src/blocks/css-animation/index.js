import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
  ToggleControl,
  SelectControl
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
            
            {/* 
            add the class animate__animated to an element, along with any of the animation names (don't forget the animate__ prefix!): 
            Example: <h1 class="animate__animated animate__bounce">An animated element</h1>
          */}
          <SelectControl
						label="Type"
						labelPosition="top"
						name="animateType"
						options={[
							{ label: 'Bounce', value: 'bounce' },
							{ label: 'Flash', value: 'flash' },
							{ label: 'Pulse', value: 'pulse' },
							{ label: 'Head Shake', value: 'headShake' },
							{ label: 'Rubber Band', value: 'rubberBand' },
						]}
					/>

          {/* Example: <div class="animate__animated animate__bounce animate__delay-2s">Example</div> */}
          <SelectControl
						label="Delay"
						labelPosition="top"
						name="delayAnimate"
						options={[
							{ label: '2 Seconds', value: '2s' },
							{ label: '3 Seconds', value: '3s' },
							{ label: '4 Seconds', value: '4s' },
							{ label: '5 Seconds', value: '5s' },
						]}
					/>

          {/* Example: <div class="animate__animated animate__bounce animate__repeat-2">Example</div> */}
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
}

new block().register();

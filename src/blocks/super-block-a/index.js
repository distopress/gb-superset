import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import { AlignmentControl } from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
	TextControl,
	TestGroupControl,
	TabPanel
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
					// initialTabName="tab2"
					// orientation="horizontal"
					tabs={[ 'Settings', 'Styles' ]}
				>
					<div content="Settings">For Settings</div>
      		<div content="Styles">For Styles</div>
				</TabPanel>
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
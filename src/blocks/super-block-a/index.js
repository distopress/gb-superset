import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import { AlignmentControl} from '@wordpress/block-editor';

import blockType from '@gb-superset/blockType';
import {
	Panel,
	TextControl,
} from '@gb-superset/controls/inspector';

const block = class extends blockType {
	blockName = metadata.name;

	InspectorControls = () => {
        return (
            <>
				<Panel title={ __( 'My control' ) }>
					<TextControl 
						label="Text Field"
						help="Additional help text"
						name="content"

						responsive={true}
						state={['hover', 'focus']}
					/>
				</Panel>
			</>
        );
    }

	EditorControls = ({ attributes, changeHandler }) => {
		return (
            <>
				<AlignmentControl
					value={ attributes.align }
					onChange={ (v) => changeHandler('align', v) }
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
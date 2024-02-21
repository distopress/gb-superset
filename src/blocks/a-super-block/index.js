
import blockType from '@gb-superset/blockType';
import TextControl from '@gb-superset/TextControl';

import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	AlignmentControl, 
	BlockControls,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';

import metadata from './block.json';
import SaveContent from './SaveContent';

const block = class extends blockType {
	blockName = metadata.name;

	InspectorControls = () => {
        return (
            <>
				<TextControl 
					label="Text Field"
					help="Additional help text"
					name="content"

					responsive={true}
					state={['hover', 'focus']}
				/>
			</>
        );
    }

	BlockControls = ({ attributes, changeHandler }) => {
		return (
            <>
				<AlignmentControl
					value={ attributes.align }
					onChange={ (v) => changeHandler('align', v) }
				/>
			</>
		);
	}

	SaveContent = SaveContent;
}

new block().register();
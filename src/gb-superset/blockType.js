import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { 
	useBlockProps, 
	AlignmentControl, 
	BlockControls,
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';

import {
	CheckboxControl,
	RadioControl,
	ToggleControl,
	SelectControl,
	PanelBody,
} from '@wordpress/components';

import BlockContext from '@gb-superset/BlockContext';
import TextControl from '@gb-superset/TextControl';

export default class blockType {

    constructor() { }

    blockName = null;

    SaveContent = () => {
        throw new Error('You have to implement the method saveContent!');
    };
    
    InspectorControls = () => {
        throw new Error('You have to implement the method InspectorControls!');
    };
    
    BlockControls = () => ( <></> );

    edit = ( { attributes, setAttributes } ) => {
        const changeHandler = (name, value) => {
            setAttributes({[name]: value});
        }
        const blockProps = useBlockProps();
        const SaveContent = this.SaveContent;

        return (
            <>
                <InspectorControls>
                    <h2>foo bar</h2>
                    <BlockContext.Provider value={{attributes, setAttributes, changeHandler}}>
                        {this.InspectorControls({ attributes, changeHandler})}
                    </BlockContext.Provider>
                </InspectorControls>

                <BlockControls>
                    {this.BlockControls({ attributes, changeHandler})}
                </BlockControls>

                <SaveContent { ...{ attributes, blockProps } } />
            </>

        );

    };

    register = () => {
        if ( !this.blockName ) {
            throw new Error('You have to set the blockName property!');
        }

        const SaveContent = this.SaveContent;
        // const SaveContent = null;

        registerBlockType( this.blockName, {
            edit: this.edit, 
            save: function save( { attributes } ) {
                const blockProps = useBlockProps.save();
                return (
                    <>
                        <SaveContent { ...{ attributes, blockProps } } />
                    </>
                );
            },
        } );
    }
}
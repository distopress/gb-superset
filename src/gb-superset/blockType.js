import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { 
	useBlockProps, 
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

import BlockContext from '@gb-superset/supports/BlockContext';

export default class blockType {

    constructor() { }

    blockName = null;

    EditContent = null;
    
    SaveContent = () => {
        throw new Error('You have to implement the method saveContent!');
    };

    InspectorControls = () => {
        throw new Error('You have to implement the method InspectorControls!');
    };
    
    EditorControls = () => ( <></> );

    edit = ( { attributes, setAttributes } ) => {
        const changeHandler = (name, value) => {
            setAttributes({[name]: value});
        }
        const blockProps = useBlockProps();
        const SaveContent = this.EditContent ?? this.SaveContent;

        return (
            <>
                <InspectorControls>
                    <BlockContext.Provider value={{attributes, setAttributes, changeHandler}}>
                        {this.InspectorControls({ attributes, changeHandler})}
                    </BlockContext.Provider>
                </InspectorControls>

                <BlockControls>
                    {this.EditorControls({ attributes, changeHandler})}
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
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    BlockControls,
    InspectorControls,
} from '@wordpress/block-editor';

import cssx from '@gb-superset/asset-manager/cssx';

import { ControlContext, getObject, setObject } from '@gb-superset/supports/control';

// Defining the blockType class
export default class blockType {
    // Constructor
    constructor() {
        this.metadata = null;
        this.EditContent = null;
        this.SaveContent = this.throwError('You have to implement the method saveContent!');
        this.InspectorControls = this.throwError('You have to implement the method InspectorControls!');
        this.EditorControls = () => null;
        this.ctx = null;

    }

    // Method to throw an error
    throwError(message) {
        return () => { throw new Error(message); };
    }

    // Method to edit the block
    edit = ({ attributes, setAttributes, clientId }) => {
        // Set blockId
        if ('block-' + clientId != !attributes.blockId) {
            setAttributes({ blockId: 'block-' + clientId });
        }

        // Helper methods to set and get attributes
        const set = (name, value, scope) => setObject(name, value, scope, attributes, setAttributes);
        const get = (name, scope) => getObject(name, scope, attributes);

        // Context for the block
        this.ctx = { attributes, setAttributes, set, get, clientId };

        // Block properties
        const blockProps = useBlockProps();

        // Content to render
        const RenderContent = this.EditContent ?? this.SaveContent;
        var sheet = cssx();
        var a = 1;

        sheet.add({
            '.header': {
                margin: a + 'px',
                paddingTop: '7px',
            },
            '.header h1': {
                color: 'red',
            }
        });

        // console.log(sheet.getCSS());

        setAttributes({ blockStyle: sheet.getCSS() });

        // Returning the JSX for the block
        return (
            <>
                <InspectorControls>
                    <ControlContext.Provider value={this.ctx}>
                        {this.InspectorControls()}
                    </ControlContext.Provider>
                </InspectorControls>

                <BlockControls>
                    <ControlContext.Provider value={this.ctx}>
                        {this.EditorControls()}
                    </ControlContext.Provider>
                </BlockControls>

                <div {...blockProps}>
                    <RenderContent {...{ attributes, get, blockProps }} />
                </div>
            </>
        );
    };

    // Method to register the block
    register = () => {
        // If metadata is not set, throw an error
        if (!this.metadata) {
            throw new Error('You have to set the block metadata!');
        }

        // name, blockId, blockStyle are also required
        if (!this.metadata.name) {
            throw new Error('You have to set the block name attribute!');
        }

        if (!this.metadata.attributes.blockId) {
            throw new Error('You have to set the block blockId attribute!');
        }

        if (!this.metadata.attributes.blockStyle) {
            throw new Error('You have to set the block blockStyle attribute!');
        }

        // Content to render
        const RenderContent = this.SaveContent;

        // Registering the block
        registerBlockType(this.metadata.name, {
            edit: this.edit,
            save: ({ attributes }) => {
                // Block properties
                const blockProps = useBlockProps.save();

                // Helper method to get attributes
                const get = (name, scope) => getObject(name, scope, attributes);

                // Returning the JSX for the block
                return (
                    <div {...blockProps}>
                        <RenderContent {...{ attributes, get, blockProps }} />
                    </div>
                );
            },
        });
    }
}
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    BlockControls,
    InspectorControls,
} from '@wordpress/block-editor';

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
    }

    // Method to throw an error
    throwError(message) {
        return () => { throw new Error(message); };
    }

    // Method to edit the block
    edit = ({ attributes, setAttributes, clientId }) => {
        // Set blockId
        if (!attributes.blockId) {
            setAttributes({ blockId: 'block-' + clientId });
        }

        // Helper methods to set and get attributes
        const set = (name, value, scope) => setObject(name, value, scope, attributes, setAttributes);
        const get = (name, scope) => getObject(name, scope, attributes);

        // Context for the block
        this.ctx = { attributes, setAttributes, set, get };

        // Block properties
        const blockProps = useBlockProps();

        // Content to render
        const RenderContent = this.EditContent ?? this.SaveContent;

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

        if(!this.metadata.name) {
            throw new Error('You have to set the block name!');
        }

        // Add blockId and blockCss to the attributes
        this.metadata.attributes.blockId = {
            type: 'string',
        };

        this.metadata.attributes.blockCss = {
            type: 'string',
        };

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
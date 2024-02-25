import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    BlockControls,
    InspectorControls,
} from '@wordpress/block-editor';

import { ControlContext, getAttribute, setAttribute } from '@gb-superset/supports/control';

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
    edit = ({ attributes, setAttributes }) => {
        // Helper methods to set and get attributes
        const set = (name, scope, value) => setAttribute(attributes, setAttributes, name, scope, value);
        const get = (name, scope) => getAttribute(attributes, name, scope);

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
                    <ControlContext.Provider value={{ attributes, setAttributes, set, get }}>
                        {this.InspectorControls()}
                    </ControlContext.Provider>
                </InspectorControls>

                <BlockControls>
                    <ControlContext.Provider value={{ attributes, setAttributes, set, get }}>
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

        // Content to render
        const RenderContent = this.SaveContent;

        // Registering the block
        registerBlockType(this.metadata.name, {
            edit: this.edit,
            save: ({ attributes }) => {
                // Block properties
                const blockProps = useBlockProps.save();

                // Helper method to get attributes
                const get = (name, scope) => getAttribute(attributes, name, scope);

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
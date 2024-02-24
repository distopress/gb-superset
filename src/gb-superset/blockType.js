import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    BlockControls,
    InspectorControls,
} from '@wordpress/block-editor';

import {ControlContext, getAttribute, setAttribute} from '@gb-superset/supports/control';

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

    EditorControls = () => (<></>);


    edit = ({ attributes, setAttributes }) => {

        const set = (name, scope, value) => {
            setAttribute(attributes, setAttributes, name, scope, value);
        }

        const get = (name, scope) => {
            return getAttribute(attributes, name, scope);
        }

        this.ctx = {
            attributes,
            setAttributes,
            set,
            get
        }

        const blockProps = useBlockProps();
        const RenderContent = this.EditContent ?? this.SaveContent;

        return (
            <>
                <InspectorControls>
                    <ControlContext.Provider value={
                        {
                            attributes,
                            setAttributes,
                            set,
                            get
                        }
                    }>
                        {this.InspectorControls()}
                    </ControlContext.Provider>
                </InspectorControls>

                <BlockControls>
                    <ControlContext.Provider value={
                        {
                            attributes,
                            setAttributes,
                            set,
                            get
                        }
                    }>
                        {this.EditorControls()}
                    </ControlContext.Provider>
                </BlockControls>

                <div { ...blockProps }>
                    <RenderContent {...{ attributes, get, blockProps }} />
                </div>
            </>
        );
    };

    register = () => {
        if (!this.blockName) {
            throw new Error('You have to set the blockName property!');
        }

        const RenderContent = this.SaveContent;

        registerBlockType(this.blockName, {
            edit: this.edit,
            save: function save({ attributes }) {
                const blockProps = useBlockProps.save();
                const get = (name, scope) => {
                    return getAttribute(attributes, name, scope);
                }
                return (
                    <div { ...blockProps }>
                        <RenderContent {...{ attributes, get, blockProps }} />
                    </div>
                );
            },
        });
    }
}
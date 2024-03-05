import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import classNames from 'classnames'

import blockType from '@gb-superset/blockType';
import {
	Panel,
	TextControl,
	ToggleControl,
	TestGroupControl
} from '@gb-superset/controls/inspector';
import { Placeholder, Button } from '@wordpress/components';
import { column, arrowRight, close } from '@wordpress/icons';
import {
	__experimentalBlockVariationPicker as BlockVariationPicker,
	AlignmentControl,
	store as blockEditorStore,
	useInnerBlocksProps,
	InnerBlocks
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';

import { variations } from './variations';
import { useSelect, useDispatch } from '@wordpress/data';

const block = class extends blockType {
	metadata = metadata;

	InspectorControls = () => {
		return (
			<>
				<Panel title={__('My control')}>
					{/* <TextControl
						label="Text Field"
						help="Additional help text"
						name="content"

						responsive={true}
						state={['hover', 'focus']}
					/> */}
					<ToggleControl
						label="Text Field"
						help="Additional help text"
						name="toggle"

						responsive={false}
					/>
					{/* <TestGroupControl
						label="My Text Field"
						help="Additional help text"
						name="groupControl"
						responsive={true}
					/> */}
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

	EditContent = ({ attributes, blockProps }) => {
		const { setAttributes, clientId, set } = this.ctx;
		const { replaceInnerBlocks } = useDispatch('core/block-editor');
		const { hasChildBlocks, hasParent, isParent } = useSelect(
			(select) => {
				const { getBlockOrder, getBlockParentsByBlockName } = select(blockEditorStore);
				return {
					hasChildBlocks: getBlockOrder(clientId).length > 0,
					hasParent: getBlockParentsByBlockName(clientId, 'gutenkit/container').length > 0 ? true : false,
					isParent: getBlockParentsByBlockName(clientId, 'gutenkit/container').length === 0 ? true : false
				};
			},
			[clientId]
		);
		console.log("hasChildBlocks", hasChildBlocks);
		console.log("hasParent", hasParent);
		console.log("isParent", isParent);
		const createBlocksFromInnerBlocksTemplate = (innerBlocksTemplate) => {
			console.log("innerBlocksTemplate", innerBlocksTemplate);
			return innerBlocksTemplate.map(
				([name, attributes, innerBlocks = []]) =>
					createBlock(
						name,
						attributes,
						createBlocksFromInnerBlocksTemplate(innerBlocks)
					)
			);
		};
		const handleColumn = (variation) => {
			console.log("nextVariation", variation);
			// if (variation.attributes) {
			// 	setAttributes(variation.attributes);
			// }

			if (variation.innerBlocks && '100' !== variation.name) {
				replaceInnerBlocks(
					clientId,
					createBlocksFromInnerBlocksTemplate(variation.innerBlocks)
				);
			} else {
				replaceInnerBlocks(
					clientId,
					createBlocksFromInnerBlocksTemplate([])
				);
			}
			setAttributes({ variationSelected: true })
		}
		const innerBlocksProps = useInnerBlocksProps(
			{
				className: classNames(
					{ 'gkit-container-parent gkit-block__inner': isParent },
					{ 'gkit-container-child gkit-block__inner': !isParent },
					{ 'gkit-has-children': hasChildBlocks }
				)
			},
			{
				renderAppender: hasChildBlocks
					? undefined
					: InnerBlocks.ButtonBlockAppender,
			}
		);
		return (
			<div {...blockProps}>
				{
					!attributes?.variationSelected && isParent && <div className="gkit-placeholder">
						<Button
							icon={close}
							className="gkit-placeholder-close"
							onClick={() => handleColumn({
								name: '100',
								title: 'Skip',
								innerBlocks: [
									['gb-superset/container', { containerWidth: 'alignfull', variationSeleted: true }]
								],
								scope: ['block'],
							})}
						/>
						<BlockVariationPicker
							icon={column}
							label="Container"
							instructions="Select a layout to start with."
							onSelect={(variation) => {
								handleColumn(variation);
							}}
							variations={variations}
						/>
					</div>
				}
				{
					attributes?.variationSelected && <div {...innerBlocksProps}></div>
				}
				{/* {
					attributes?.containerWidth == "gkit-block-custom-wide" && (
						<>
							{
								attributes?.variationSelected ? (
									<>
										<ContainerResizeHandler showHandle={isSelected} className={'gkit-container-resize-handler gkit-container-resize-handler-right'} currentWidth={set(attributes, "customWidth", device)} responsiveHelper={responsiveHelper} device={device} setAttributes={setAttributes} isParent={isParent} />
										<ContainerResizeHandler showHandle={isSelected} className='gkit-container-resize-handler gkit-container-resize-handler-left' currentWidth={set(attributes, "customWidth", device)} responsiveHelper={responsiveHelper} device={device} setAttributes={setAttributes} isParent={isParent} />
									</>
								) : null
							}
						</>
					)
				} */}
			</div>
		);
	}

	SaveContent = SaveContent;
}

new block().register();
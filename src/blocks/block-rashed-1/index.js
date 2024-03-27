import metadata from './block.json';
import SaveContent from './SaveContent';

import { __ } from '@wordpress/i18n';
import classNames from 'classnames'
import style from './style';
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
import './style.scss'

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
					{/* <ToggleControl
						label="Text Field"
						help="Additional help text"
						name="toggle"

						responsive={false}
					/> */}
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

	// EditorControls = () => {
	// 	return (
	// 		<>
	// 			<AlignmentControl
	// 				value={this.ctx.attributes.align}
	// 				onChange={(v) => this.ctx.setAttributes({ align: v })}
	// 			/>
	// 		</>
	// 	);
	// }

	EditContent = () => {
		const { attributes, setAttributes, clientId } = this.ctx;
		const { replaceInnerBlocks } = useDispatch('core/block-editor');

		const createBlocksFromInnerBlocksTemplate = (innerBlocksTemplate) => {
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
			if (variation.attributes) {
				setAttributes(variation.attributes);
			}
			setAttributes({ isContainerSelected: true })
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
		}


		const { hasChildblock, hasParent, isParent } = useSelect(
			(select) => {
				const { getBlockOrder, getBlockParentsByBlockName } = select(blockEditorStore);
				return {
					hasChildblock: getBlockOrder(clientId).length > 0,
					hasParent: getBlockParentsByBlockName(clientId, 'gb-superset/block-rashed-1').length > 0 ? true : false,
					isParent: getBlockParentsByBlockName(clientId, 'gb-superset/block-rashed-1').length === 0 ? true : false
				};
			},
			[clientId]
		);

		const innerBlocksProps = useInnerBlocksProps(
			{
				className: classNames(
					{ 'dblock-container-parent dblock-block__inner': isParent },
					{ 'dblock-container-child dblock-block__inner': !isParent },
					{ 'dblock-has-children': hasChildblock }
				)
			},
			{
				renderAppender: hasChildblock
					? undefined
					: InnerBlocks.ButtonBlockAppender,
			}
		);
		// console.log("innerBlocks", InnerBlocks)
		// console.log("hasChildblock", hasChildblock);
		// console.log("hasParent", hasParent);
		// console.log("isParent", isParent);

		return (
			<>
				{
					!attributes.isContainerSelected && isParent && <div className="dblock-placeholder">
						<Button
							icon={close}
							className="dblock-placeholder-close"
							onClick={() => handleColumn({
								name: '100',
								title: 'Skip',
								innerBlocks: [
									['gb-superset/block-rashed-1', { isContainerSelected: true }]
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
					attributes?.isContainerSelected && <div {...innerBlocksProps} />
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
			</>
		);
	}

	SaveContent = SaveContent;
	StyleSheet = style
}

new block().register();
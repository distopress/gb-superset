export default ({ get, sheet, breakpoints }) => {
    // let tablet = {
    //     'blockId h1.test': {
    //         color: 'blue',
    //         'background-color': get('backgroundColor', 'md'),
    //     }
    // }
    // let mobile = {
    //     'blockId h1.test': {
    //         color: 'green',
    //         'background-color': get('backgroundColor', 'xs'),
    //     }
    // }


    // sheet.add({
    //     'blockId h1.test': {
    //         color: 'red',
    //     }
    // });

    // sheet.add({ // will add to desktop
    //     'blockId h1.test': {
    //         'background-color': get('backgroundColor'),
    //         'font-size': '30px',
    //     },
    //     'blockId p': {
    //         color: 'blue',
    //     }
    // });

    // sheet.addToMd(tablet);
    // sheet.addToXs(mobile);
    const customWidth = get('customWidth', null)
    sheet.add({
        'blockId': {
            'max-width': 'none',
        },
        '.wp-block-gb-superset-block-rashed-1 > .dblock-block__inner > blockId': {
            'flex-basis': `${customWidth.size}${customWidth.unit}`,
        },
        'blockId .dblock-block__inner': {
            display: 'flex',
            'justify-content': 'center',
        }
    });

    // {
    //     selector: `.wp-block-gutenkit-container > .gkit-block__inner > .${WRAPPER}.gkit-block-custom-wide`,
    //     'flex-basis': getSliderValue(attributes.customWidthDesktop),
    //     'flex-shrink': `${attributes.containerFlexShrink}`,
    // },
};
export default ({ get, sheet, breakpoints}) => {
    let tablet = {
        'blockId h1.test': {
            color: 'blue',
            'background-color': get('backgroundColor', 'md'),
        }
    }
    let mobile = {
        'blockId h1.test': {
            color: 'green',
            'background-color': get('backgroundColor', 'xs'),
        }
    }

    
    // sheet.add({
    //     'blockId h1.test': {
    //         color: get('color'),
    //     }
    // });

    // sheet.add({
    //     'blockId .hola': {
    //         "border-color": '#f00',
    //     }
    // });

    // sheet.add({ // will add to desktop
    //     'blockId p': {
    //         color: 'blue',
    //     },
    //     'blockId h1.test': {
    //         'background-color': get('backgroundColor'),
    //         'font-size': '30px',
    //     },

    // });

    // sheet.addToMd(tablet);
    // sheet.addToXs(mobile);

    // console.log(sheet.extractCSS('blockId'));
};
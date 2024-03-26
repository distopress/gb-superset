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

    
    sheet.add({
        'blockId h1.test': {
            color: 'red',
        }
    });

    sheet.add({ // will add to desktop
        'blockId h1.test': {
            'background-color': get('backgroundColor'),
            'font-size': '30px',
        },
        'blockId p': {
            color: 'blue',
        }
    });

    sheet.addToMd(tablet);
    sheet.addToXs(mobile);

    // console.log(sheet.extractCSS());
};
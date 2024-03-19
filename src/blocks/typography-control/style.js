export default ({ get, sheet, breakpoints}) => {
  let tablet = {}
  let mobile = {}

  
  sheet.add({ // will add to desktop
    'blockId .gb-suerset-typography-control': {
      'font-size'       : `${get('fontSize') || 0}px`,
      'font-style'      : `${get('fontStyle') || 'normal'}`,
      'font-weight'     : `${get('fontWeight') || 400}`,
      'text-decoration' : `${get('textDecoration') || 'none'}`,
      'text-transform'  : `${get('textTransform') || 'none'}`,
      'line-height'     : `${get('lineHeight') || 24}px`,
      'letter-spacing'  : `${get('letterSpacing') || 0.8}px`,
      'word-spacing'    : `${get('wordSpacing') || 2}px`,
    }      
  });

  sheet.addToMd(tablet);
  sheet.addToXs(mobile);

  // console.log(sheet.extractCSS());
};
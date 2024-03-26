export default ({ get, sheet, breakpoints}) => {
  let tablet = {}
  let mobile = {}

  
  sheet.add({ // will add to desktop
    'blockId': {
      '--animate-duration': `${get('animateDuration') || 1}s`,
    },
  });

  sheet.addToMd(tablet);
  sheet.addToXs(mobile);

  // console.log(sheet.extractCSS());
};
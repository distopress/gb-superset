export default ({ get, sheet, breakpoints}) => {
  let tablet = {}
  let mobile = {}

  
  sheet.add({ // will add to desktop
    'blockId .gb-suerset-css-transfromation': {
      transform: `translate(${get('offsetx') || 0}px, ${get('offsety') || 0}px) skew(${get('skewx') || 0}deg, ${get('skewy') || 0}deg) rotate(${get('rotate') || 0}deg) scale(${get('scale')})`,
    }      
  });

  sheet.addToMd(tablet);
  sheet.addToXs(mobile);

  // console.log(sheet.extractCSS());
};
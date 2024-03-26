export default ({ get, sheet, breakpoints}) => {
  let tablet = {}
  let mobile = {}

  
  sheet.add({ // will add to desktop
    'blockId .gb-suerset-css-transfromation': {
      transform: `translate(${get('translatex') || 0}px, ${get('translatey') || 0}px) skew(${get('skewx') || 0}deg, ${get('skewy') || 0}deg) rotateX(${get('rotatex') || 0}deg) rotateY(${get('rotatey') || 0}deg) rotateZ(${get('rotatez') || 0}deg) scale(${get('scalex') || 1}, ${get('scaley') || 1})`,
    }      
  });

  sheet.addToMd(tablet);
  sheet.addToXs(mobile);

  // console.log(sheet.extractCSS());
};
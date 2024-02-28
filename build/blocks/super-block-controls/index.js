(()=>{var e={84:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=l(e,o(r)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=l(t,r));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gb-superset/super-block-a","version":"0.1.0","title":"Super Block #A","category":"widgets","icon":"smiley","description":"Example block scaffolded with Gutenberg Superset.","textdomain":"gb-superset","editorScript":"file:./index.js","attributes":{"content":{"type":"object"},"groupControl":{"type":"object"},"align":{"type":"string"},"alignmentMatrix":{"type":"object"},"anglePicker":{"type":"object"},"borderBox":{"type":"object"},"border":{"type":"object"},"box":{"type":"object"},"checkBox":{"type":"object"},"colorPalette":{"type":"object"},"colorPicker":{"type":"object"},"comboBox":{"type":"object"},"datePicker":{"type":"object"},"timePicker":{"type":"object"},"dateTimePicker":{"type":"object"},"fontSize":{"type":"object"},"toggle":{"type":"object"},"gradient":{"type":"object"},"number":{"type":"object"},"radio":{"type":"object"},"range":{"type":"object"}}}'),n=window.wp.i18n;function a({get:t,attributes:r,blockProps:a}){return(0,e.createElement)(e.Fragment,null,(0,n.__)("I am super Block #A!","gb-superset"),(0,e.createElement)("p",null,"content: ",t("content")),(0,e.createElement)("pre",null,JSON.stringify({attributes:r},null,2)))}const o=window.wp.blockEditor,l=window.wp.blocks,c=(0,e.createContext)(null),s=(e,t="desktop",r)=>{var n;return null===t?r[e]:null!==(n=r[e]?.[t])&&void 0!==n?n:r[e]?.desktop},i=(e,t,r,n,a)=>{const o="object"==typeof n[e]?n[e]:{};a(null===r?{[e]:{...o,...t}}:{[e]:{...o,[r]:t}})};var m=r(84),u=r.n(m);const p=t=>{let{get:r,set:n}=(0,e.useContext)(c);t.attributes&&t.setAttributes&&(r=(e,r)=>s(e,r,t.attributes),n=(e,r,n)=>i(e,r,n,t.attributes,t.setAttributes));const[a,o]=(0,e.useState)("desktop"),l=(e,t)=>{t.preventDefault(),o(e)};return(0,e.useEffect)((()=>{console.log("scope has changed",a)}),[a]),(0,e.createElement)("div",{...t,className:u()(t.extraClassName,t.className,"gb-superset-control-container")},t.responsive&&(0,e.createElement)("p",null,(0,e.createElement)("a",{onClick:e=>l("desktop",e)},"Desktop"),(0,e.createElement)("a",{onClick:e=>l("tablet",e)},"Tablet"),(0,e.createElement)("a",{onClick:e=>l("mobile",e)},"Mobile")),React.Children.map(t.children,(e=>React.cloneElement(e,{...e.props,[t.valueProp]:r(t.name,a),[t.changeProp]:e=>n(t.name,e,a)}))))},g=t=>{var r;const{get:n,set:a}=(0,e.useContext)(c),[o,l]=(0,e.useState)(null!==(r=n(t.name,null))&&void 0!==r?r:{}),s=e=>{l((t=>({...t,...e})))};return(0,e.useEffect)((()=>{"object"==typeof o&&a(t.name,o,null)}),[o]),(0,e.createElement)("div",{...t,className:u()(t.extraClassName,t.className,"gb-superset-group-control-container")},React.Children.map(t.children,(e=>React.cloneElement(e,{...e.props,attributes:o,setAttributes:s}))))};class b{constructor(){this.metadata=null,this.EditContent=null,this.SaveContent=this.throwError("You have to implement the method saveContent!"),this.InspectorControls=this.throwError("You have to implement the method InspectorControls!"),this.EditorControls=()=>null}throwError(e){return()=>{throw new Error(e)}}edit=({attributes:t,setAttributes:r})=>{var n;const a=(e,r)=>s(e,r,t);this.ctx={attributes:t,setAttributes:r,set:(e,n,a)=>i(e,n,a,t,r),get:a};const l=(0,o.useBlockProps)(),m=null!==(n=this.EditContent)&&void 0!==n?n:this.SaveContent;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(c.Provider,{value:this.ctx},this.InspectorControls())),(0,e.createElement)(o.BlockControls,null,(0,e.createElement)(c.Provider,{value:this.ctx},this.EditorControls())),(0,e.createElement)("div",{...l},(0,e.createElement)(m,{attributes:t,get:a,blockProps:l})))};register=()=>{if(!this.metadata)throw new Error("You have to set the block metadata!");const t=this.SaveContent;(0,l.registerBlockType)(this.metadata.name,{edit:this.edit,save:({attributes:r})=>{const n=o.useBlockProps.save();return(0,e.createElement)("div",{...n},(0,e.createElement)(t,{attributes:r,get:(e,t)=>s(e,t,r),blockProps:n}))}})}}const E=window.wp.components,d=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-angle-picker-control"},(0,e.createElement)(E.AnglePickerControl,{...t})),h=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-alignment-matrix-control"},(0,e.createElement)(E.__experimentalAlignmentMatrixControl,{...t})),v=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-border-box-control"},(0,e.createElement)(E.__experimentalBorderBoxControl,{...t,colors:[{name:"White",color:"#ffffff"},{name:"Black",color:"#000000"},{name:"Gray",color:"#808080"}]})),C=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-border-control"},(0,e.createElement)(E.__experimentalBorderControl,{...t,colors:[{name:"White",color:"#ffffff"},{name:"Black",color:"#000000"},{name:"Gray",color:"#808080"}]})),P=t=>(0,e.createElement)(p,{className:"gb-superset-button-group"},(0,e.createElement)(E.ButtonGroup,null,t.children)),f=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-box-control"},(0,e.createElement)(E.__experimentalBoxControl,{...t})),k=({children:t,...r})=>(0,e.createElement)(p,{...r,className:"gb-superset-button"},(0,e.createElement)(E.Button,{...r},t)),x=t=>(0,e.createElement)(p,{...t,valueProp:"checked",changeProp:"onChange",className:"gb-superset-checkbox"},(0,e.createElement)(E.CheckboxControl,{...t})),y=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-color-palette"},(0,e.createElement)(E.ColorPalette,{...t,colors:[{name:"White",color:"#ffffff"},{name:"Black",color:"#000000"},{name:"Gray",color:"#808080"}]})),S=t=>(0,e.createElement)(p,{...t,valueProp:"color",changeProp:"onChange",className:"gb-superset-color-picker"},(0,e.createElement)(E.ColorPicker,{...t})),w=({controls:t,...r})=>{const[n,a]=(0,e.useState)([]);return(0,e.useEffect)((()=>{a(t?.map((e=>({label:e,value:e.toLowerCase()}))))}),[]),(0,e.createElement)(p,{...r,valueProp:"value",changeProp:"onChange",className:"gb-superset-combobox-control"},(0,e.createElement)(E.ComboboxControl,{...r,options:n,onInputChange:e=>a(options.filter((t=>t.value===e)))}))},N=({container:t,...r})=>(0,e.createElement)(p,{...r,valueProp:"currentDate",changeProp:"onChange",className:"gb-superset-date-time-picker"},t?(0,e.createElement)(e.Fragment,null,"time"===t&&(0,e.createElement)(E.TimePicker,{...r}),"datetime"===t&&(0,e.createElement)(E.DateTimePicker,{...r})):(0,e.createElement)(E.DatePicker,{...r})),j=()=>(0,e.createElement)(p,{className:"gb-superset-divider"},(0,e.createElement)(E.__experimentalDivider,null)),B=({children:t,...r})=>(0,e.createElement)(p,{...r,className:"gb-superset-externalLink"},(0,e.createElement)(E.ExternalLink,{...r},t)),_=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-font-size-picker"},(0,e.createElement)(E.FontSizePicker,{...t})),A=t=>(0,e.createElement)(p,{...t,valueProp:"checked",changeProp:"onChange",className:"gb-superset-toggle"},(0,e.createElement)(E.FormToggle,{...t})),F=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-gradient-picker"},(0,e.createElement)(E.GradientPicker,{...t,gradients:[{name:"JShine",gradient:"linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",slug:"jshine"},{name:"Moonlit Asteroid",gradient:"linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",slug:"moonlit-asteroid"},{name:"Rastafarie",gradient:"linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",slug:"rastafari"}]})),T=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-number-control"},(0,e.createElement)(E.__experimentalNumberControl,{...t})),M=({options:t,...r})=>{const n=t.map((e=>{const t=e.replace(/\s+/g,"-").toLowerCase();return{label:e,value:t}}));return(0,e.createElement)(p,{...r,valueProp:"selected",changeProp:"onChange",className:"gb-superset-number-control"},(0,e.createElement)(E.RadioControl,{...r,options:n}))},R=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-range-control"},(0,e.createElement)(E.RangeControl,{...t})),z=({children:t,...r})=>{const n=t?.map((e=>{const t=e?.props?.content.toLowerCase();return{name:t||"",title:e?.props?.content||"",className:`tab-${t}`}}));return(0,e.createElement)(p,{...r,className:"gb-superset-tab-panel"},(0,e.createElement)(E.TabPanel,{...r,tabs:n,activeClass:"active"},(e=>t?.map((t=>t?.props?.content.toLowerCase()===e?.name?t:null)))))},I=t=>(0,e.createElement)(p,{...t,valueProp:"value",changeProp:"onChange",className:"gb-superset-text-control"},(0,e.createElement)(E.TextControl,{...t})),O=t=>(0,e.createElement)(g,{...t,className:"my-awesome-test-group-control"},(0,e.createElement)(I,{...t,name:"control1",label:"My Text Field 1"}),(0,e.createElement)(I,{...t,name:"control2",label:"My Text Field 2"})),L=t=>(0,e.createElement)(E.PanelBody,{...t,className:"gb-superset-panel"},t.children);(new class extends b{metadata=t;InspectorControls=()=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(L,{title:(0,n.__)("My control")},(0,e.createElement)(I,{label:"Text Field",help:"Additional help text",name:"content",responsive:!0,state:["hover","focus"]}),(0,e.createElement)(O,{label:"My Text Field",help:"Additional help text",name:"groupControl",responsive:!0})),(0,e.createElement)(z,null,(0,e.createElement)("div",{content:"Settings"},"For Settings"),(0,e.createElement)("div",{content:"Styles"},"For Styles"),(0,e.createElement)("div",{content:"Advance"},"For Advance")),(0,e.createElement)(L,{title:(0,n.__)("My All Control")},(0,e.createElement)(h,{label:"Background Position",name:"alignmentMatrix"}),(0,e.createElement)(d,{label:"Angle Picker",name:"anglePicker"}),(0,e.createElement)("h3",null,"BorderBoxControl:"),(0,e.createElement)(v,{name:"borderBox"}),(0,e.createElement)("h3",null,"BorderControl:"),(0,e.createElement)(C,{name:"border"}),(0,e.createElement)(f,{label:"Box Control",name:"box",allowReset:!0}),(0,e.createElement)(P,null,(0,e.createElement)(k,{isSecondary:!0},"33.3%"),(0,e.createElement)(k,{isPrimary:!0},"66.6%"),(0,e.createElement)(k,{isSecondary:!0},"100%")),(0,e.createElement)(x,{label:"Is author",help:"Is the user a author or not?",name:"checkBox"}),(0,e.createElement)(y,{name:"colorPalette"}),(0,e.createElement)(S,{name:"colorPicker",enableAlpha:!0}),(0,e.createElement)(w,{label:"Font Size",name:"comboBox",controls:["Small","Normal","Large"]}),(0,e.createElement)(N,{name:"datePicker",is12Hour:!0,startOfWeek:6}),(0,e.createElement)(N,{container:"time",name:"timePicker",is12Hour:!0}),(0,e.createElement)(N,{container:"datetime",name:"dateTimePicker",is12Hour:!0,startOfWeek:6}),(0,e.createElement)(j,null),(0,e.createElement)(B,{href:"https://wordpress.org"},"WordPress.org"),(0,e.createElement)("h3",null,"FontSizePicker"),(0,e.createElement)(_,{name:"fontSize",fontSizes:[{name:(0,n.__)("Small"),slug:"small",size:12},{name:(0,n.__)("Big"),slug:"big",size:26}],withReset:!0,withSlider:!0,fallbackFontSize:16}),(0,e.createElement)(A,{name:"toggle"}),(0,e.createElement)(F,{name:"gradient"}),(0,e.createElement)(T,{label:"Number",name:"number",min:10,max:100,isShiftStepEnabled:!0,shiftStep:10}),(0,e.createElement)(M,{name:"radio",label:"User type",help:"The type of the current user",options:["Author","Editor"]}),(0,e.createElement)(R,{name:"range",label:"Range Control",min:2,max:10})));EditorControls=()=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(o.AlignmentControl,{value:this.ctx.attributes.align,onChange:e=>this.ctx.setAttributes({align:e})}));SaveContent=a}).register()})()})();
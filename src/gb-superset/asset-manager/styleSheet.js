import cssx from 'cssx';

// left ones are gutenberg's breakpoints. right ones are tailwind's breakpoints, we will lated add them into gutenberg.
const breakpoints = {
    desktop: 'no_media_query',
    '2xl': '1440px', // 1536px
    xl: '1280px', // 1280px
    lg: '960px', // 1024px
    md: '782px', // 768px, in gutenberg, also known as 'tablet'
    sm: '600px', // 640px
    xs: '360px' // 320px, in gutenberg, also known as 'mobile'
}

class styleSheet {
    constructor() {
        this.styles = {};
        this.cssx = cssx();

        this.breakpoints = breakpoints;
    }

    // Method to add styles
    addStyles(name, styles) {
        if (this.styles[name]) {
            // Merge the existing styles with the new styles recursively
            this.styles[name] = this.mergeDeep(this.styles[name], styles);
        } else {
            this.styles[name] = styles;
        }
    }

    // Function to merge two objects deeply
    mergeDeep(target, source) {
        if (typeof target === 'object' && typeof source === 'object') {
            for (const key in source) {
                if (source[key] instanceof Object) {
                    target[key] = this.mergeDeep(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }
        return target;
    }

    // Method to add styles to the desktop
    add(styles) {
        this.addStyles('desktop', styles);
    }

    // Method to extract the styles
    extractCSS(blockID) {
        // loop the breakpoints
        // get the styles with breakpoint name & add them to the cssx
        for (let name in this.styles) {
            // if it's desktop just add the styles
            if (name === 'desktop') {
                this.cssx.add(this.styles[name]);
                continue;
            }

            // add the styles to the cssx with media query
            this.cssx.add(
                { 
                    ['@media screen and (max-width:'+this.breakpoints[name]+' )']: this.styles[name] 
                }
            );
        }

        // replace the blockId with the actual blockId
        return this.cssx.getCSS().replace(/blockId/g, '#' + blockID);
    }
}

const handler = {
    get: function(target, prop, receiver) {
        if (prop.startsWith('addTo')) {
            return function(styles) {
                const breakpoint = prop.replace('addTo', '').toLowerCase();
                if (!target.breakpoints[breakpoint]) {
                    throw new Error('Invalid breakpoint name ' + breakpoint);
                }
                target.addStyles(breakpoint, styles);
                return receiver;
            };
        }
        return Reflect.get(...arguments);
    }
};

function createStyleSheet() {
    return new Proxy(new styleSheet(), handler);
}

export { createStyleSheet, breakpoints };
import cssx from 'cssx';

export default () => {
    var sheet = cssx();

    var originalAdd = sheet.add; // Save a reference to the original add method

    sheet.add = function(rules) {
        console.log('my custom add method');
        originalAdd.call(this, rules); // Call the original add method

        return this; // Return the object itself to support chaining
    };

    sheet.myCustomMethod = function() {
        // You can access all of sheet's methods here
        console.log(this.getCSS());

        return this; // Return the object itself to support chaining
    };

    return sheet;
}

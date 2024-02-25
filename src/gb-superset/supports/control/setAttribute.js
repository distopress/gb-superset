export default (attributes, setAttributes, name, scope, value) => {
    // get the attributeObject from the attributes
    let attributeObject = attributes[name];

    // check if the attributeObject is actually an object
    if (attributeObject === undefined || typeof attributeObject !== 'object') {
        attributeObject = {};
    }

    // set the attributeObject to the attributes
    setAttributes({ [name]: { ...attributeObject, [scope]: value } });
}
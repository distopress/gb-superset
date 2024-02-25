export default (name, value, scope, object, setHandler) => {
    // Get the attributeObject from the object, defaulting to an empty object if it's not an object
    const objectValue = typeof object[name] === 'object' ? object[name] : {};

    // Check if scope is null
    if (scope === null) {
        // Merge value with objectValue and set it by handler
        setHandler({ [name]: { ...objectValue, ...value } });
    } else {
        // Set the new value if scope is not null
        setHandler({ [name]: { ...objectValue, [scope]: value } });
    }
}
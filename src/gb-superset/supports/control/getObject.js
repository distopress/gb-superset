export default (name, scope = 'desktop', object) => {
    // If scope is null, return the value of the name key from the object
    if(scope === null) return object[name];

    // Try to get the value from the scope key of the name object, default to the desktop key if it's undefined
    return object[name]?.[scope] ?? object[name]?.['desktop'];
}
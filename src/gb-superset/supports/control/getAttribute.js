export default (attributes, name, scope) => {
    scope = scope ?? 'desktop';
    let value = attributes[name]?.[scope];
    if (value === undefined) {
        value = attributes[name]?.['desktop'];
    }

    return value;
}
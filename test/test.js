// 
// js object with setter and getter
//

var test = {
    _name: 'test',
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    }
};

// usage
// console.log(test.name); // test
// test.name = 'new test';
// console.log(test.name); // new test


class MyClass { 
    constructor() {
      this._data = {
        desktop: 'desktop',
        tablet: 'tablet',
        mobile: 'mobile',
      };
      return new Proxy(this, {
        get(target, prop) {
          if (prop in target._data) {
            console.log('getter', prop, target);
            return target._data[prop];
          }
          return target[prop];
        }
      });
    }
  }
  
  const attributes = (new MyClass()).attributes;
  console.log(attributes.desktop); // Outputs: 'value1'
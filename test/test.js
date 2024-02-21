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
        property1: 'value1',
        property2: 'value2',
        property3: 'value3',
      };
      return new Proxy(this, {
        get(target, prop) {
          if (prop in target._data) {
            return target._data[prop];
          }
          return target[prop];
        }
      });
    }
  }
  
  const myObject = new MyClass();
  console.log(myObject.property1); // Outputs: 'value1'
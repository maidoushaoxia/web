# 《深入理解ES6》读书笔记 #


## 第9章  JavaScript中的类 #
1. 类的声明
  - 基本的类声明语法：class关键字，后面紧跟类的名字，通过特殊的constructor方法名来定义构造函数。
    ```javascript
    class PersonClass {
      constructor(name) {
        this.name = name
      }

      sayName() {
        console.log(this.name)
      }
    }
    ```

  - 为何使用类语法
    - 函数声明可以提升，但是类声明不能；

    - 类中的方法都不可枚举；

    - 只能使用new关键字调用类的构造函数；

    - 类中不能修改类名，外部可以修改。

2. 类表达式
  - 表达式类
    ```javascript
    let PersonClass = class {
      // 省略
    }
    ```

  - 命名类表达式
    ```javascript
    let PersonClass = class PersonClass2 {
      // 省略
    }

    console.log(typeOf PersonClass2) // undefined

3. 作为一等公民的类
  - 将类作为参数传入函数中：
    ```javascript
    function createObject(classDef) {
      return new classDef()
    }

    let obj = createObject(class {
      sayHi() {
        console.log('Hi')
      }
    })

    obj.sayHi() // Hi
    ```

  - 通过立即调用类构造函数创建单例
    ```javascript
    let person = new class {
      constructor(name) {
        this.name = name
      }
      
      sayName() {
        console.log(this.name)
      }
    }('Shaoyun')

    person.sayName() // shaoyun
    ```
  
4. 访问器属性getter和setter
  
    ```javascript
    class CustomHTMLElement {
      constructor(element) {
        this.element = element
      }
      get html() {
        return this.element.innerHTML
      }
      set html(value) {
        this.element.innerHTML = value
      }
    }

    // 在原型上创建访问器属性，通过getter和setter方法将元素的innerHTML方法委托给html属性，该属性不可枚举
    var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype,'html')
    console.log(get in descriptor) // true
    console.log(set in descriptor) // true
    console.log(descriptor.enumerable) // false   
    ```

  5. 可计算成员名称：用方括号包裹一个表达式即可使用可计算名称。
      ```javascript
      let methodName = 'sayName'
      class PersonClass {
        constructor (name) {
          this.name = name
        }
        [methodName]() {
          console.log(this.name)
        }
      }
      let me = new PersonClass('shaoyun')
      me.sayName() // shaoyun
      ```

6. 生成器方法：通过Symbol.iterator定义生成器方法即可为类定义默认迭代器。（**有点不明白**）
    ```javascript
    class Collection {
      constructor() {
        this.items = []
      }

      *[Symbol.iterator]() {
        yield *this.items.values()
      }
    }

    var collection = new Collection()
    collection.items.push(1)
    collection.items.push(2)
    collection.items.push(3)

    for(let x of collection) {
      console.log(x)
    }

7. 静态成员：添加的方法和访问器属性只出现在类中，而不在对象的实例中出现。就是由构造函数直接访问到的属性和方法。
    ```javascript
    class PersonClass {
      constructor(name) {
        this.name = name
      }

      sayName() {
        console.log(this.name)
      }

      // 加上了static关键字
      static create(name) {
        return new PersonClass(name)
      }
    }

    // 这里create方法就是静态方法
    let person = PersonClass.create('shaoyun')
    person.sayName() // shaoyun
    ```
    不可以在实例中访问静态成员，必须要在类中访问。

8. 继承与派生类: 使用extends关键字可以指定类继承的函数，通过调用super()方法即可访问基类的构造函数。

    ```javascript
    class Rectangle {
      constructor(length,width) {
        this.length = length
        this.width = width
      }

      getArea() {
        return this.length * this.width
      }
    }

    class Square extends Rectangle {
      constructor(length) {
        //等价于Rectangle.call(this,length,length)
        super(length,length)
      }
    }

    var square = new Square(3)
    
    console.log(square.getArea()) // 9
    console.log(square instanceof Square) // true
    console.log(square instanceof Rectangle) // true 
    ```
    - 如果在派生类（继承自其他类的类）中指定了构造函数则必须调用super()，且只能在派生类的构造函数中使用super();

    - 在构造函数中访问this前一定要调用super()，它负责初始化this;

    - 如果不选择不使用构造函数，则会自动调用super()并传入所有参数，有时可能不需要全部参数，所以最好手动定义构造函数。

- 类方法屏蔽：派生类会覆盖基类中的同名方法，就不能再调用了，但是可以使用super()调用基类中的方法。

- 静态成员继承：基类中的静态成员在派生类中也可以用。

- 派生自表达式的类：只要表达式可以被解析为一个函数并具有[[Construct]]属性和原型，就可以用extends进行派生。

- 内建对象的继承：先由基类创建this的值，然后由派生类的构造函数修改这个值。
  ```javascript
  class MyArray extends Array {

  }

  var colors = new MyArray()
  colors[0] = 'red'
  console.log(colors.length) // 1

  colors.length = 0
  console.log(colors[0]) // undefined
  ```

- Symbol.species属性：（**不太明白**）
  - 原本在内建对象中返回实例自身的方法将自动返回派生类的实例，如Array的slice()方法，会返回一个新数组，如果在派生类中调用这个方法，那返回的新数组是派生类的实例。

  - Symbol.species用于定义返回函数的静态访问器属性，被返回的函数是一个构造函数，要在实例的方法中创建类的实例时必须使用这个构造函数。

  - 想在类方法中调用this.constructor，就应该使用Symbol.species属性，从而让派生类重写返回类型。

9. 在类的构造函数中使用new.target
  - 类构造函数必须通过new关键字调用，所以总是在类的构造函数中定义new.target属性。

  - 如果一个类作为基类派生其他类，那么调用该类的构造函数时，new.target是等于派生类。

  - 由于类必须通过new关键字才能调用，所以在类的构造函数中，new.target属性永远不会是undefined。

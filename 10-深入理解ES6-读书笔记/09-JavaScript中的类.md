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

7. 静态成员：添加的方法和访问器属性只出现在类中，而不在对象的实例中出现。

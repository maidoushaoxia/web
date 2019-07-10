# 《深入理解ES6》读书笔记 #


## 第6章  Symbol ##
----------
1. 创建Symbol
    ```javascript
    let firstName = Symbol("first name") // "first name"是描述
    let person = {}
    person[firstName] = 'Nicholas'

    console.log("first name" in person) // false
    console.log(person[firstName]) // 'Nicholas'
    console.log(firstName) // Symbol("first name")
    ```

    描述是存储在内部的[[Description]]属性中的，只有调用Symbol的toString()方法才可以读取。

2. Symbol的使用方法
    
      可以用Object.defineProperties()方法创建Symbol属性。

3. Symbol共享体系:

    用Symbol.for()方法可以创建可共享的Symbol
    ```javascript
    let uid = Symbol.for('uid')
    let object = {}

    object[uid] = '12345'

    console.log(uid) // 'Symbol(uid)'

    let uid2 = Symbol.for('uid')
    console.log(uid2 === uid) // true
    ```
  
    Symbol.for()方法首先在全局注册表中搜素键为'uid'的Symbol是否存在，如果存在，直接返回已有的Symbol；否则，创建一个新的Symbol。并使用这个键在Symbol全局注册表中注册，并返回新创建的Symbol。

    下一次如果再传入同样的键调用Symbol.for()，会返回相同的Symbol。

4. Symbol与类型强制转换

  - 其他类型没有与Symbol逻辑等价的值，不能将Symbol强制转换为字符串和数字类型。
  
  - String(uid)可以返回字符串类型的Symbol描述的内容。 // Symbol('uid')

  - 但是如果将Symbol与字符串拼接，会报错。

  - Symbol等价布尔值为true。

5. Symbol属性检索

  - 用Symbol.getOwnProperty-Symbols()方法来检索对象中的Symbol属性，其返回值是一个包含所有Symbol自有属性的数组。

6. 通过well-known Symbol暴露内部操作

  - Symbol.hasInstance方法：用于确定对象是否为函数的实例。

  - Symbol.isConcatSpreadable属性：是一个布尔值。如果值为true，则表示对象有length属性和数字键，将数值型属性值（如对象中属性为数字的值）独立添加到concat()调用的结果中。

  - 。。。

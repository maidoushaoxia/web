# 《深入理解ES6》读书笔记 #


## 第7章  Set与Map集合 ##
----------
Set集合：是一种无重复元素的列表，一般检测给定的值在某个集合中是否存在。

Map集合：含多组键值对，被用于缓存频繁取用的数据。

1. ES5中Set与Map集合
  - 可以用原型为null的对象模拟。

  - 但是由于对象会被转换为默认的字符串表达式，因此很难用作对象属性的键名。

2. ES6中的Set集合

  - 创建Set集合并添加元素
    ```javascript
    let set = new Set()
    set.add(5)
    set.add('5')
    set.add(5)
    
    console.log(set.size) // 2，注意！

    let key1 = {}
    let key2 = {}
    set.add(key1)
    set.add(key2)

    console.log(set.size) // 4

    let set1 = new Set([1,2,3,4,5,5,5,5,5])
    console.log(set1.size) // 5

    console.log(set.has(5)) // true

    ```
    - 在Set集合中，不会进行强制类型转换，数字5和字符串'5'是两个独立元素。但+0和-0相等。
    
    - 添加多个对象也保持独立。

    - 多次调用add方法并传入相同的值作为参数，则后续的调用会忽略。

    - 如果用数组初始化Set集合，Set构造函数也会过滤重复值，保证集合中的元素各自唯一。

    - has()方法可以检测Set集合中是否存在某个值。

  - 移除元素
    - delete(value)可以移除某一个元素；

    - clear()方法可以移除集合中所有元素。

  - forEach()方法
    - 回调函数接受三个参数:下一次索引的位置，与第一个参数一样的值，被遍历的Set集合本身。
      ```javascript
      let set = new Set([1,2])

      set.forEach(function(value,key,ownerSet){
        console.log(key + ' ' + value)
        console.log(ownerSet === set)
      })

      输出：1 1
           true
           2 2
           true
      ```

    - 如果需要在回调函数中使用this引用，可以将其作为第二个参数传入forEach()函数。
      ```javascript
      let set = new Set([1,2])

      let processor = {
        output(value) {
          console.log(value)
        },
        process(dataSet) {
          dataSet.forEach(function(value){
            this.output(value)
          },this)
        }
      };

      processor.process(set)

      输出： 1
            2
      ```
    
  - 将Set集合转换为数组：运用展开运算符(...)。
    ```javascript
    let set = new Set([1,2,3,4,5]),
    array = [...set]

    console.log(array)
    ```

    可以用其创建一个无重复元素的数组。

  - Weak Set集合：只存储对象的弱引用，且不可以存储原始值；如果是对象唯一的引用，则会被回收并释放内存。

    - 创建Weak Set集合
      ```javascript
      let set = new WeakSet(),
        key = {}

      set.add(key)

      console.log(set.has(key)) // true

      set.delete(key)
      console.log(set.has(key)) // false
      ```

      注意：WeakSet构造函数不接受任何原始值，只接收对象(或由对象构成的数组)！

3. ES6中的Map集合
  - 添加与获取元素：
    - 添加元素：调用set()方法并传入键名和对应值作为两个参数，键名可以是对象。

    - 获取元素：调用get()方法并传入键名，若不存在则返回undefined。

  - Map集合支持的方法
    - has(key)：检测指定的键名在Map集合中是否已经存在；

    - delete(key)：移除指定键名及其对应的值；

    - clear():清空Map集合。

  - 初始化Map集合：传入一个数组，数组中每个元素都是一个子数组，子数组包含键和值。
    ```javascript
    let map = new Map([['name','shaoyun'],['age',18]])
    ```
  
    为了确保数据在添加到集合前不会被强制类型转换，将其放在数组中是唯一一种方法。

  - forEach()方法
    - 回调函数接受三个参数，Map集合中下一次索引的位置，值对应的键名以及Map集合本身。

  - Weak Map集合
    - 也没有size属性。

    - 初始化时，子数组的第一个元素是一个键名，传入的值必须是非null的对象，第二个元素可以是任意值。

    - 可以用WeakMap来存储对象实例的私有数据。
      ```javascript
      let Person = (function() {
        let privateData = new WeakMap()

        function Person(name) {
          privateData.set(this, {name:name}) // this是Person对象的实例，作为键使用；值是私有信息,值可以是任意值，因此只写name也可以
          // privateData.set(this, name)
        }

        Person.prototype.getName = function() {
          return privateData.get(this).name // get(this)用来获取值，他如果前面只传name而不是对象形式，这里不用.name就可以访问了。
          // return privateData.get(this)
        }

        return Person
      }())

      let person = new Person('shao')
      person.getName() // shao 两种方法结果一样
      ```
      分析：每次都传入this作为键，由于每次实例化的对象都不一样，这样键不一样，保证了数据的私有性。

### 05-TypeScript接口与类

#### 5.1 接口

1. 对对象的形状进行描述

   ```typescript
   interface Preson {
     name: string;
     age: number;
   }
   
   let Shao: Person = {
     name: 'Shao',
     age: 18,
   }
   ```

2. 只读 | 可选属性

   ```typescript
   interface Person {
     readonly name: string;
     age?: number;
   }
   ```

#### 5.2 类

1. 类的属性和方法

   ```typescript
   class Greeter {
     // 静态属性
     static name: string = "Greeter"
     // 成员属性
     greeting: string
     
     // 构造函数-执行初始化操作
     constructor(message: string) {
       this.greeting = message
     }
     
     //静态方法
     static getClassName() {
       return "Greeter"
     }
     // 成员方法
     greet() {
       return 'hello,' + this.greeting
     }
   }
   
   let greeter = new Greeter('world')
   ```

   - 静态方法与成员方法的区别： 
     - 静态方法是构造函数的方法，只能通过构造函数调用；
     - 成员方法是原型的方法，所有的实例都能调用

2. 类的继承：使用extends关键字来实现继承

   ```typescript
   class Animal {
     name: string
     
     constructor(theName: string) {
       this.name = theName
     }
     
     move(distance: number = 0) {
       console.log(`${this.name} moved ${distance}m`)
     }
   }
   
   class Snake extends Animal {
     constructor(name: string) {
       super(name)
     }
     move(distance = 5) {
       super.move(distance)
     }
   }
   
   let sam = new Snake('snake')
   sam.move()
   ```

3. 私有字段：以 # 字符开头，只能在其包含的类中使用
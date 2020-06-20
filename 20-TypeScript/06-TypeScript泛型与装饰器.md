### 06-TypeScript泛型与装饰器

#### 6.1 泛型

- 泛型是允许同一个函数接收不同类型参数的一种模板

1. 泛型接口

   ```typescript
   interface GdenericIdentifyFn<T> {
     (arg: T): T
   }
   ```

2. 泛型类

   ```typescript
   class GenericNumber<T> {
     zeroValue: T;
     add: (x: T, y: T) => T
   }
   
   let myGenericNumber = new GrnericNumber<number>()
   myGenericNumber.zeroValue = 0
   myGenericNumber.add = (x, y) => {x + y}
   ```

3. 泛型变量
   - T：表示一个TypeScript类型
   - K：表示对象中的键类型
   - V：表示对象中的值类型
   - E：表示元素类型

#### 6.2 装饰器

- 装饰器是一个表达式，返回一个函数

1. 类装饰器

   ```typescript
   function Greeter(greeting: string) {
     return function (target: Function) {
       target.prototype.greet = function (): void {
         console.log(greeting)
       }
     }
   }
   
   @Greeter('Hello TS')
   class Greeting {
     constructor() {
       // 内部实现
     }
   }
   
   let myGreeting = new Greeting();
   myGreeting.greet(); // console output: 'Hello TS!';
   ```

2. 属性装饰器
3. 方法装饰器
4. 参数装饰器
### 01-TypeScript基础类型

1. Boolean类型

2. Number类型

3. String类型

4. Array类型

5. Enum枚举类型：数字枚举比字符串枚举多了反向映射

   ```typescript
   enum Enum {  
     A,  
     B, 
     C = "C", 
     D = "D",  
     E = 8, 
     F,
   }
   ```

   ```javascript
    // 编译后
    var Enum;
    (function (Enum) {
      Enum[Enum["A"] = 0] = "A";
      Enum[Enum["B"] = 1] = "B";
      Enum["C"] = "C";
      Enum["D"] = "D";
      Enum[Enum["E"] = 8] = "E";
      Enum[Enum["F"] = 9] = "F";
    })(Enum || (Enum = {}))

    console.log(Enum.A) //输出：0
    console.log(Enum[0]) // 输出：A
   ```
   
6. Any类型：任何类型都可以被归为any类型

7. UnKnown类型：所有类型都可以赋值给unknown，但unknown类型只能被赋值给 any 类型和 unknown 类型本身。与any不同的是，unknown类型禁止任何更改。

8. Tuple类型：用于定义具有有限数量的未命名属性的类型，每个属性都有一个关联的类型。使用元组时，必须提供每个属性的值。

9. Void类型，表示没有任何类型，函数没有返回值时，返回值类型为void

10. Null和Undefined类型：是所有类型的子类型

11. Never类型：是总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
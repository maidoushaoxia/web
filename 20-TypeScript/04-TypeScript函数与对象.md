### 																													04-TypeScript函数

### 4.1 参数类型

```typescript
function createUserId(name: string, id: number): string {
  return name + id
}
```

#### 4.2 函数类型

```typescript
let IdGenerator: (chars: string, nums: number) => string

function createUSerID(name: string, id: number): string {
  return name + id
}

IdGenerator = createUserId
```

#### 4.3 可选参数及默认参数

- 可选参数要放在默认参数后面

```typescript
// 可选参数
function  createUserId(name: string, id: number, age?: number): string {
  return name + id
}

// 默认参数
function caeateUserId(
	name: string = "Shao",
  id: number,
   age?: number
): string {
    return name + id
  }
```

#### 4.4 剩余参数

```typescript
function push(array, ...items) {
  items.forEach(item => {
    array.push(item)
  })
}
```

#### 4.5 函数重载

- 函数重载：是使用相同名称和不同参数数量或类型创建多个方法

- 方法重载：是指在用一个类中方法同名，参数不同，调用时根据实参的形式，选择与其匹配的方法
- 在定义重载时，一定要把最精确的定义放在最前面
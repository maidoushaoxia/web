## tree shaking

- 用于描述移除JavaScript上下文未引用的代码。

### 将文件标记为无副作用

- 副作用：在导入时会执行特殊行为的代码，而不是仅仅暴露一个export，如polyfill。

- 通过package.json的"sideEffects"属性将文件标记为无副作用，如果所有代码都不包含副作用，可以将该属性标记为fasle，告知webpack可安全地删除未使用到的export导出。

- 如果代码确实有副作用，可以将"sideEffects"的值定为数组，数组的每一项就是有副作用的文件路径。

  ```javas
  "sideEffects": [
  	"./src/xxx.js",
  	"*.css"
  ]
  ```

- 【注意】：必须使用ES6导入导出模块，使用CommonJS无效。
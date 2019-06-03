# 《Vue.js》读书笔记 #


## 第9章  Render函数##
----------
### 9.1 Virtual Dom ###
- Virtual Dom是一个JavaScript对象，在状态发生变化时，Virtual Dom进行Diff运算，只更新需要被替换的DOM，而不是全部重绘。

- 运行过程：
  - render函数生成虚拟节点；
  - 基于虚拟节点创建dom节点；
  - 状态更新后，进行对比，生成补丁对象；
  - 遍历补丁对象，更新dom节点。

  ```JavaScript
    var vNode = {
      tag:'div',
      attributes:{
        id:'main'
      },
      childern:[
        //p节点
      ]
    }
  ```

### 9.2 Render函数 ###
- render函数通过createElement参数来创建Virtual Dom。

### 9.3 createElement ###
1. 基本参数：第一个参数必选，是HTML标签，组件或函数；第二个参数可选，是一个数据对象（将template里的一些指令写在数据对象中）；第三个参数可选，是一个子节点。

2. 约束
- 如果vNode是组件或含有组件的slot，则vNode必须唯一。

- 可以通过循环和工厂函数渲染多个子组件。

- 对于含有组件的slot，需要将slot的每个子节点都克隆一份。可以在render函数里创建一个工厂函数。通过递归将slot的所有子节点都克隆一份，并对vNode的关键属性也进行复制。

3. 使用JavaScript代替模板功能
- 在render函数里，可以使用原生JavaScript进行逻辑判断。

### 9.4 函数化组件 ###
- 一个functional的布尔值选项，设置为true可以使组件无状态和无实例，即没有data和this上下文。

### 9.5 JSX ###
- JSX仍然是JavaScript，需要插件支持。


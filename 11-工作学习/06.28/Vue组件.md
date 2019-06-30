## Vue组件 ##
1. 学习了v-if和v-show的区别。

2. v-if:会直接把不符合条件（值为false）的元素删除，如果改变条件使其值为true，则会重新渲染，消耗较大内存。

3. v-show:是隐藏，添加了disply:none这个属性，适用于频繁切换的情况。一般用来切换CSS样式。

4. 事件冒泡：是指触发上级元素的**相同的**事件。

  - 遇到的问题：用v-show切换显示输入框与编辑后的结果，切换成输入框时可以成功，但是再切回去就不行了，检查了v-show的条件值，已经修改成功了。

  - 原因：我把点击显示输入框这个点击事件（event1）绑定在父元素上面了，而点击显示编辑后的结果这个事件（event2）是绑定在子元素上的，当我点击第二个子元素的时候，先触发event2，再冒泡到父元素，这时父元素的点击响应事件event1也被触发了，而且是在第一个点击事件之后被触发，因此无法切换样式。

  - 错误代码
    ```html
    <div @click = "event1">
      <div class = "class1"></div>
      <div class = "class2" @click = "event2"></div>
    </div>
    ```
  
  - 正确代码
    ```html
    <div>
      <div class = "class1" @click = "event1"></div>
      <div class = "class2" @click = "event2"></div>
    </div>
    ```

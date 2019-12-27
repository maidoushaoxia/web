## float属性

### clear属性

1. 只对块级元素生效，因此用伪元素清除浮动时需要设置display属性值；
2. 设置了clear: both属性的元素只是让自身不能和前面的浮动元素在一行显示，并不会改变浮动元素，因此不是真正意义上的清除浮动；
3. 如果clear: both元素前面的元素就是float元素，则margin-top设为负值无效果；
4. clear: both后面的元素仍然可能会文字环绕，并不能完全消除浮动的影响。

### BFC

1. 触发BFC的情况
   - `<html>`根元素
   - float值不为none
   - overflow的值为auto、scroll或hidden
   - display的值为table-cell、table-caption或inline-block
   - position的值不为relative和static
2. 普通流体元素设置了overflow: hidden后，会自动填满容器中除非浮动元素以外的剩余空间，形成自适应布局。一般通过设置在浮动元素上设置margin来控制间距。
3. 适用于自适应布局的BFC
   - overflow: auto.hidden，但是容器盒子外的元素会被隐藏；
   - display: table-cell; width: 999px; 
     - 由于单元格宽度设置得再大，实际宽度也不会超过表格容器的宽度，因此设置宽度为9999px相当于让元素自适应；
     - 但是此方法无法让连续英文字符换行，可以用word-break: break-all解决。

### overflow

1. overflow的剪裁边界是border box的内边缘（右边和下边）。

2. Chrome下，如果容器可滚动，则padding-bottom也算在滚动尺寸中。因此，要避免滚动容器设置padding-bottom，会导致scrollHeight值不一样。

3. 除非overlow-x和overflow-y的属性值是visible，否则visible会当成auto解析。

4. 关于浏览器的滚动条

   - 默认浏览器滚动条来自`<html>`
   - 滚动条会占用容器的可用宽度或高度，所有浏览器固定宽度均是17px。

5. 实现表格头固定，表格主体滚动的效果

   - 使用双`<table>`
   - `<table>`元素使用固定的宽度值，但是距离右侧有17px的间隙

6. 如何让页面滚动条不发生晃动

   ```css
   // :root是伪类选择器，选择的是根元素html
   :root {
     overflow-x: hidden;
     overflow-y: auto;
   }
   :root body {
     position: absolute;
   }
   body {
     with: 100vm;
     overflow: hidden;
   }
   ```

   
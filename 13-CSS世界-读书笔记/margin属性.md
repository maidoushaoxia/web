## margin合并

1. 3种情景：
   - 相邻元素
   - 父元素和第一个/最后一个子元素
   - 空块级元素

2. 计算规则
   - 正正取大值
   - 正负值相加
   - 负负最负值

3. margin合并的意义
   - 对于兄弟元素，如果没有margin合并，则连续段落或列表的首尾项间距会和其他兄弟标签间距不一致，U影响排版。
   - 对于父子元素，可以在页面中任何地方嵌套裸`<div>`。
   - 对于元素自身，可以避免空标签影响排版。

## margin: auto

1. 填充规则
   - 一侧定值，一侧auto，则auto为剩余空间大小；
   - 两侧均是auto，平分剩余空间。

2. 使用技巧

   - 居中对齐：

     ```css
     margin-left: auto;
     marfin-right: auto;
     ```

   - 左对齐：

     ```css
     margin-right: auto;
     margin-left: 0; // margin的默认值就是0，所以可以不写
     ```

3. 注意问题

   - 只有width或height为auto时，才会触发margin: auto的计算规则，此时元素在对应方向具有自动填充特性。因此无法实现垂直居中。

     - 解决办法：绝对定位元素可以设置格式化宽度和高度。

     ```css
     .father {
       width: 300px;
       height: 150px;
     }
     .son {
     	position: absolute;
     	top: 0;
     	bootom: 0;
     	left: 0;
     	right: 0;
     	width: 200px;
     	height: 100px;
     	margin: auto;
     }
     ```

   - 定高容器的子元素的margin-bottom或者定宽元素的margin-right失效。这是因为margin属性改变自身的位置，必须和元素定位一样的margin属性才生效。默认定位方向是左侧和上方，因此margin-left和margin-top会影响定位。
     - 解决方法：使用float: right或绝对定位right等改变定位方向。
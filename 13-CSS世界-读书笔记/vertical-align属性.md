## vertical-align

1. 作用前提：只能应用于内联元素以及display值为table-cell的元素，即display为inline、inline-block、inline-table或table-cell的元素。
2. vertical-align与line-height的关系：vertical-align的百分比值是相对于line-height计算的。
3. 常见问题：
   - 容器高度不等于行高：可以设为顶部对齐，就不会有位移产生了。
   - 图片底部留白：“幽灵空白节点”、line-height和vertical-align共同作用。
     - 图片块状化；
     - 容器的line-height足够小，可以设为0；
     - 若容器的line-height与font-size有关，则可以设置容器的font-size足够小，可以设为0；
     - 设置vertical-align的属性值为top、middle或bottom。
4. inline-block元素的基线规则：如果里面没有内联元素，或者overflow不是visible，则该元素的基线就是其margin底边缘。
5. 图标对齐的处理技巧

   - 图标高度和当前行高都是20px（经验取值）；
- 图标标签里有字符可以借助伪元素生成一个空格字符；
   - 不使用overflow: hidden保证基线为里面字符的基线，但是同时要让字符不可见。
6. 线性类属性值：
   - top/bottom：对齐看行框盒子边缘
   - baseline/middle：与字符x有关
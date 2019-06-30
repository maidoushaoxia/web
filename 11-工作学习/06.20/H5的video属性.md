## H5的video属性 ##
1. 支持的视频格式：有3个。

2. autoplay不能自动播放：加了静音muted属性就可以了。

3. 添加属性的方法：
  - 属性 = '属性'，如autoplay = "autoplay",都是在video标签内添加属性；
  - 直接加属性也可。

4. poster属性：相当于封面，也就是视频播发前显示的图像。

5. 检测图片的加载不能再window.onload()里面检测，因为此时已经加载完成了，要在外面检测。

6. currentTime是当前播放位置。

7. volume:音量，值的范围为0~1，不在这个范围内会报错。

8. ended：是否结束，设置loop（循环播放）后，值永远不会变为true。

9. jQuery获取的是jQuery对象，需要[0]来获取元素，就像getElementsByClassName()一样，获取的是一个数组。

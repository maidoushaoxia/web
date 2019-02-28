//尝试创建一个可以执行简单动画的函数
    /*
      参数:
        obj:要执行obj动画的对象
        attr:要执行动画的样式,比如:left top width heght
        target:执行动画的目标位置
        speed:移动的速度(正数向右移动,负数向左移动)
        callback:回调函数,这个函数在动画执行完毕后执行
    */
   function move(obj,attr,target,speed,callback){
    //关闭上一个定时器
    clearInterval(obj.timer);

    //获取元素目前的位置
    var current = parseInt(getStyle(obj,attr));
    
    //判断speed的正负值
    //从0向800移动,speed为正
    //从800向0移动,speed为负
    if(current > target){
      //此时速度应为负值
      speed = - speed;
    }

    //开启定时器,实现动画效果
    //向执行动画的对象中添加一个timer属性,用来保存他自己的定时器的标识
    obj.timer = setInterval(function(){

      //获取box1原来的left值
      var oldValue = parseInt(getStyle(obj,attr));

      //在旧值的基础上减小
      var newValue = oldValue + speed;

      //从800向0移动
      //向左移动,需要判断newValue是否小于target
      //向右移动,需要判断newValue是否大于target
      if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
        newValue = target;
      }

      //将新值设置给box1
      obj.style[attr] = newValue + "px";

      //当元素移动到800px时,使其停止执行动画
      if(newValue == target){
        //达到目标,关闭定时器
        clearInterval(obj.timer);
        //动画执行完毕,调用回调函数
        callback && callback();
      }

    },30);
  };


  function getStyle(obj,name){
    return getComputedStyle(obj,null)[name];
  };

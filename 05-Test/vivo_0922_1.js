/*
 * @Author: shaoyun
 * @Date: 2019-09-22 16:44:55
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-22 16:47:08
 * @Description: 跳盒子
 */
function solution(boxes) {

  // TODO write your code here
  if (boxes.length === 0) return -1
  if (boxes.length === 1) return 0
  
  let steps = 0
  let start = 0
  let position = 0

  while(position < boxes.length - 1 ){
    let farest = 0
    for(let i = start;i <= position;++i)
      farest = Math.max(farest, i + boxes[i])
      start = position + 1
      position = farest
      steps ++
  }
  return steps
}

while (line = readline()) {
  var boxes = line.split(" ");
  print(solution(boxes));
}

/*
 * @Author: shaoyun
 * @Date: 2019-09-08 19:08:52
 * @LastEditors: shaoyun
 * @LastEditTime: 2019-09-08 20:59:12
 * @Description: 编码问题
 */
while(line=readline()){
    var str = line;
    var obj = {
      'A': '1',
      'B': '2',
      'C': '3',
      'D': '4',
      'E': '5',
      'F': '6',
      'G': '7',
      'H': '8',
      'I': '9',
      'J': '10',
      'K': '11',
      'L': '12',
      'M': '13',
      'N': '14',
      'O': '15',
      'P': '16',
      'Q': '17',
      'R': '18',
      'S': '19',
      'T': '20',
      'U': '21',
      'V': '22',
      'W': '23',
      'X': '24',
      'Y': '25',
      'Z': '26'
    }

    var res = []
    for (let item in obj) {
      for (let i = 0;i < str.length;i++) {
        if (str[i] === obj[item]) {
          res.push(item)
        }
      }
    }
    
    res.sort(function (a,b){
      return a - b
    })
    print(res);
}

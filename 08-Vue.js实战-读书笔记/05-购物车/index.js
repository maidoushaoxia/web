var app = new Vue({
  el:'#app',
  data:{
    list:[
      {
        class:"电子产品",
        productList:[
          {
            id:1,
            name:'iPhone7',
            price:6188,
            count:1,
            status:true
          },
          {
            id:2,
            name:'iPad Pro',
            price:5888,
            count:1,
            status:true
          },
          {
            id:1,
            name:'MacBook Pro',
            price:21488,
            count:1,
            status:true 
          }
        ]
      },
      {
        class:"生活用品",
        productList:[
          {
            id:1,
            name:'面纸',
            price:18,
            count:10,
            status:true
          },
          {
            id:2,
            name:'洗衣液',
            price:40,
            count:2,
            status:true
          },
          {
            id:1,
            name:'牙膏',
            price:8,
            count:3,
            status:true 
          }
        ]
      },
      {
        class:"果蔬",
        productList:[
          {
            id:1,
            name:'苹果',
            price:5,
            count:6,
            status:true
          },
          {
            id:2,
            name:'香蕉',
            price:3,
            count:10,
            status:true
          },
          {
            id:1,
            name:'西瓜',
            price:30,
            count:1,
            status:true 
          }
        ]
      }
    ]
  },
  computed: {
    totalPrice:function(){
      var total = 0;
      for(var i=0;i<this.list.length;i++){
        for(var j=0;j<this.list[i].productList.length;j++){
          var item = this.list[i].productList[j];
          if(item.status == true){
            total += item.price * item.count;
          }
        }
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g,",");
    }
  },
  methods: {
    handleReduce:function(item){
      if(item.count==1){
        return;
      }
      item.count--;
    },
    handleAdd:function(item){
      item.count++;
    },
    handleRemove:function(index,tableIndex){
      this.list[tableIndex].productList.splice(index,1);
    },
    handleChecked:function(item){
      item.status = !item.status;
    },
    isChecked:function(item){
      return item.status;
    },
    isCheckedTable:function(tableItem){
      var tableStatus = true;
      for(var i=0;i<tableItem.productList.length;i++){
        if(tableItem.productList[i].status == false){
          tableStatus = false;
        }
      }
      return tableStatus;
    },
    handleTable:function(tableItem){
      var tableStatus = this.isCheckedTable(tableItem);
      tableStatus = tableStatus ? false : true;
      for(var i=0;i<tableItem.productList.length;i++){
        tableItem.productList[i].status = tableStatus;
      }
    },
    isCheckedAll:function(){
      var checkAllStatus = true;
      for(var i=0;i<this.list.length;i++){
        for(var j=0;j<this.list[i].productList.length;j++){
          if(this.list[i].productList[j].status == false){
            checkAllStatus = false;
          }
        }
      }
      return checkAllStatus;
    },
    checkAll:function(){
      var checkAllStatus = this.isCheckedAll();
      checkAllStatus = checkAllStatus ? false : true;
      for(var i=0;i<this.list.length;i++){
        for(var j=0;j<this.list[i].productList.length;j++)
        this.list[i].productList[j].status = checkAllStatus;
      }
    },
  },
})

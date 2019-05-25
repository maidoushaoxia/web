Vue.component('input-number', {
  template:`
    <div class="input-number">
      <input type="text" :value="currentValue" @change="handleChange">
      <button @click="handleReduce" :disabled="currentValue <= min">-</button>
      <button @click="handleIncrease" :disabled="currentValue >= max">+</button>
    </div>
  `,
  props:{
    max:{
      type:Number,
      default:Infinity
    },
    min:{
      type:Number,
      default:-Infinity
    },
    value:{
      type:Number,
      default:0
    }
  },
  data:function() {
    return {
      currentValue:this.value
    }
  },
  watch:{
    currentValue:function(val){
      this.$emit('input',val),
      this.$emit('on-change',val)
    },
    value:function(val){
      this.updateValue(val)
    }
  },
  methods: {
    updateValue:function(val){
      if(val>max){
        val = max;
      }
      if(val<min){
        val = min;
      }
      this.currentValue = val;
    },
    handleReduce:function(){
      if(this.currentValue<=this.min){
        return this.min;
      }
      this.currentValue--;
    },
    handleIncrease:function(){
      if(this.currentValue>=this.max){
        return this.max;
      }
      this.currentValue++;
    },
    handleChange:function(event){
      var val = event.target.value.trim();
      var max = this.max;
      var min = this.min;

      if(isValueVumber(val)){
        val = Number(val);
        this.currentValue = val;

        if(val>max){
          this.currentValue = max;
        }else if(val<min){
          this.currentValue = min;
        }
      }else{
        event.target.value = this.currentValue;
      }
    }
  },
  mounted:function(){
    this.updateValue(this.value);
  }
})

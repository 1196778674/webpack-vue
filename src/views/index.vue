<template>

<div class="index-container">
  <div class="cpx-row index-row">
    <h3>{{title[0]}}</h3>
    <div class="index-datepacker">
      <span>时间:</span>
      <date-picker></date-picker>
      <span>至</span>
      <date-picker></date-picker>
    </div>
    <div class="index-basedata">
      <ul v-for="base in basedata">
        <li class="number">{{base.number}}</li>
        <li class="basedata-type">{{base.type}}</li>
      </ul>
    </div>
  </div>
  <div class="cpx-row index-row">
    <h3>{{title[1]}}</h3>
  </div>
  <div class="cpx-row index-row">
    <h3>{{title[2]}}</h3>
  </div>
</div>


<button type="button" class="btn btn-default" @click="getTime">button</button>

<take-qrcode></take-qrcode>
</template>

<script>

export default {

  name: 'index',

  methods: {
    getTime () {
      console.log($('.nowdate').first().text(),$('.nowdate').last().text());
    }
  },
  data () {
    return {
    	index : 'index!!!!',
      title: ["基础数据","今日统计","活跃用户"],
      basedata: [{"number":"2343","type":"注册门店数"},{"number":"4234","type":"注册用户数"},{"number":"3462","type":"付费门店数"},{"number":"3643","type":"库房系统使用数"},{"number":"2343","type":"签约门店"}]
    };
  },
  components: {
  	datePicker: require('../components/datepicker.vue'),
    takeQrcode: require('../components/qrcode.vue')
  }

};
</script>
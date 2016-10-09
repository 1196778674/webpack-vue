<template>
{{index}}

<date-picker></date-picker>
<span>至</span>
<date-picker></date-picker>
<div id="qrcodeDefault"></div>
<button type="button" class="btn btn-default" @click="getTime">button</button>
</template>

<script>
var qrcode = require('../../node_modules/qrcode/src/index.js')
export default {

  name: 'index',

  methods: {
    getTime () {
      console.log($('.nowdate').first().text(),$('.nowdate').last().text());
    },
    show () {
      var qrnode = new qrcode({
        text: 'http://www.baidu.com/'
      });
      $(document).ready(function() {
        $('#qrcodeDefault').html(qrnode);
      });
    }
  },
  data () {
    this.show()
    return {
    	index : 'index!!!!'
    };
  },
  components: {
  	replace: false,
  	datePicker: require('../components/datepicker.vue')
  }

};
</script>
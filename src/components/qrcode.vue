<template>
<div id="qrcode"></div>
</template>

<script>
var qrcode = require('../../node_modules/qrcode/src/index.js')
export default {

  name: 'qrcode',
  methods: {
    qrcode () {
    	var qrnode = new qrcode({
	        text: 'http://www.baidu.com/'
	    });
	    $(document).ready(function() {
	        $('#qrcode').html(qrnode);
	    });
    }
  },
  data () {
  	this.qrcode()
    return {
    	qrcode: 'qrcode'
    };
  }
};
</script>
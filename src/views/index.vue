<template>
{{index}}
<date-picker></date-picker>
</template>

<script>
export default {

  name: 'index',

  data () {
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
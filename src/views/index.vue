<template>
{{index}}

<date-picker></date-picker>
<span>至</span>
<date-picker></date-picker>
<button type="button" class="btn btn-default" @click="getTime">button</button>
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
    	index : 'index!!!!'
    };
  },
  components: {
  	replace: false,
  	datePicker: require('../components/datepicker.vue')
  }

};
</script>
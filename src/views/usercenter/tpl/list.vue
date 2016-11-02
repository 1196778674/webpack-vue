<template>
	<ul>
      <li v-for='todo in list'>
        <label v-bind:class="{ done : todo.done }" >
          <input type="checkbox" v-model="todo.done"/>
          {{todo.title}}
        </label>
      </li>
    </ul>
</template>

<script>
export default {

  name: 'list',
  props: {
    initList: {
      type: Array
    }
  },
  events: {
  	add: function(input) {
      if(!input) return false;
      this.list.unshift({
        title: input,
        done: false
      });
    }
  },
  data () {
    return {
    	list: []
    };
  }
};
</script>
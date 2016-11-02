<template>
	<ul>
      <li v-for='todo in list'>
        <label v-bind:class="{ done : todo.done }" >
          <input type="checkbox" v-model="todo.done"/>
          {{todo.title}}
        </label>
  		<button type="button" @click="delete($index)">delete</button>
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
  	addlist: function(input) {
      if(!input) return false;
      this.list.unshift({
        title: input,
        done: false
      });
    }
  },
  methods: {
  	delete: function(i){
  		this.list.splice(i,1);
  	}
  },
  data () {
    return {
    	list: []
    };
  }
};
</script>
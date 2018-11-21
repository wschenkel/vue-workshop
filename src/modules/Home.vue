<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">
          <xHeader 
            :title="todoTitle"
            v-on:addItem="addItem"
          />

          <xMain
            :listItem="todoList"
            v-on:removeItem="updateList"
          />

          <footer class="both" role="footer">
            <div class="row">
              <div class="col s12">
                <p>{{ todoList.length }} Item(s) pendentes</p>
              </div>
            </div>
          </footer>
        </div>

        <div class="col s6 offset-s3">
          <router-link to="/api">
            <a>API</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xHeader from '@/components/xHeader'
import xMain from '@/components/xMain'
export default {
  name: "app",
  components: {
    xHeader,
    xMain
  },
  data() {
    return {
      todoTitle: 'TODO APP RCA',
      todoList: [
        {
          id: 1,
          title: 'Lavar a roupa',
          completed: false
        },
        {
          id: 2,
          title: 'Criar workshop',
          completed: false
        },
        {
          id: 3,
          title: 'Comprar energético',
          completed: false
        }, 
      ]
    };
  },
  methods: {
    updateList(value) {
      this.todoList = this.todoList.filter((item) => {
        if (item.id != value) return item;
      })
    },
    addItem(task) {
      this.todoList.push({
        id: this.todoList.length + 1,
        title: task,
        completed: false
      })
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

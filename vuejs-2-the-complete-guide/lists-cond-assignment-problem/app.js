const app = Vue.createApp({
    data() {
      return { 
        currentTask: '',
        tasks: [],
        hideList: false
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.currentTask);
      },
      removeGoal(idx) {
        this.tasks.splice(idx, 1);
      },
      toggleList(){
        this.hideList = !this.hideList;
      }
    },
  });
  
  app.mount("#assignment");
  
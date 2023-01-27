const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
    };
  },
  computed: {
    fullName(){
      if(!this.name) return ""
      return this.name + " " + this.lastname
    }
  },
  watch: {
    name(value) {
      console.log("name has been changed to " + value)
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');

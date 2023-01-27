const app = Vue.createApp({
    data() {
      return {
        result: 0,
      };
    },
    computed: {
        resultText() {
            return this.result <= 37 ? "Not there yet" : "Too much!"
        }
    },
    watch: {
    result(value) {
        console.log("result has been changed to " + value)
        setTimeout(() => {
            this.result = 0
        }, 5000)
      }
    },
    methods: {
      add(num) {
        this.result = this.result + num;
      },
      reduce(num) {
        this.result = this.result - num;
      }
    }
  });
  
  app.mount('#assignment');
  
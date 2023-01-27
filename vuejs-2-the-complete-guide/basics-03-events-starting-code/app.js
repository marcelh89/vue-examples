const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name
    },
    submitForm(){
      //event.preventDefault()
      alert('Submitted!')
    },
    setName(event){
      this.name = event.target.value;
    },
    increment(amount){
      this.counter += amount
    },
    decrement(amount){
      this.counter -= amount
    }
  }
});

app.mount('#events');

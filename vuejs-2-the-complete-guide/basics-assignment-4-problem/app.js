const app = Vue.createApp({
  data() {
    return {
      hidden: false,
      userInput: "",
    };
  },
  computed: {
    paragraphClass() {
      return {
        [this.userInput]: this.userInput,
        hidden: this.hidden,
        visible: !this.hidden,
      };
    },
  },
  methods: {
    toggle() {
      console.log("toggle");
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#assignment");

const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Get good at Vue",
      courseGoalB: "<h2>Get good at Vue</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal: function() {
        const randomNumber = Math.random();
        return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB
    }
  },
});
app.mount("#user-goal");

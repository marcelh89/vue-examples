const app = Vue.createApp({
  data() {
    return {
      name: "RandomName",
      age: Math.round(Math.random() * 50),
      imgSrc: "https://via.placeholder.com/150"
    };
  },
  methods: {
    getFavoriteNumber: function () {
      return  Math.round(Math.random());
    },
  },
});
app.mount("#assignment");

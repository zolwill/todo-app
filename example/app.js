// 1) Create App
const app = Vue.createApp({
  data() {
    return {
      message: `"To-Do List" en utilisant le framework Vue.js. Cette application permettra à l'utilisateur de gérer une liste de tâches en ajoutant, marquant et supprimant des tâches`,
      link: 'https://vuejs.org/',
      teacher: '<strong>by John Doe </strong>',
    };
  },
  methods: {
    outputLink() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return 'Learn Vue !';
      } else {
        return 'Master Vue 👨🏿‍🏫';
      }
    },
    setTeacher() {
      setTimeout(() => {
        this.teacher = '<strong>by Mamadou</strong>';
      }, 2000);
    },
  },
});

// 2) Linking App to HTML
app.mount('#app');

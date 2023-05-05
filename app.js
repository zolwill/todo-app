// 1) Create App
const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      valueInput: '',
      name: '',
    };
  },
  computed: {
    // This method is not useful because we use `v-model`
    setValueInput(event) {
      this.valueInput = event.target.value;
    },
    setName: function () {
      console.log('Running');
      return this.name.toUpperCase();
    },
  },
  watch: {
    valueInput: function (value) {
      const excludesWord = ['gun', 'knife', 'kill'];

      for (const badWord of excludesWord) {
        if (value.toLowerCase().includes(badWord)) {
          alert(`${badWord} is not allow`);
        }
      }
    },
  },
  methods: {
    addTask(event) {
      // event.preventDefault();
      const newTask = {
        text: this.valueInput,
        status: 'On hold',
      };

      this.tasks = [...this.tasks, newTask];
      this.valueInput = '';
    },
    taskCompleted(index) {
      //alert('Clicked');
      const copy = this.tasks;

      copy[index] = { ...copy[index], status: 'Completed' };

      this.tasks = copy;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    handleOpacity(index) {
      return {
        'opacity-25':
          this.tasks[index].status.toLowerCase() ===
          'completed',
      };
    },
  },
});

// 2) Linking App to HTML
app.mount('#app');

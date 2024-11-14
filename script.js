Vue.createApp({
  data() {
    return {
      tasks: ['Закупиться картошкой на зиму', 'Вскопать огород', 'Выполить ДЗ по курсу Синергии'],
      selected: '',
      prefix: '',
      taskName: '',
      taskType: ''
    }
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((n) =>
        n.toLowerCase().startsWith(this.prefix.toLowerCase())
      )
    }
  },
  watch: {
    selected(name) {
      ;[this.taskType, this.taskName] = name.split(', ')
    }
  },
  methods: {
    create() {
      if (this.hasValidInput()) {
        let ttype = (this.taskType == 'personal') ? 'Личное': 'Деловое';
        const fullName = `${this.taskName} (${ttype})`
        if (!this.tasks.includes(fullName)) {
          this.tasks.push(fullName)
          this.taskName = this.taskType = ''
        }
      }
    },
    // update() {
    //   if (this.hasValidInput() && this.selected) {
    //     const i = this.tasks.indexOf(this.selected)
    //     this.tasks[i] = this.selected = `${this.taskType}, ${this.taskName}`
    //   }
    // },
    del() {
      if (this.selected) {
        const i = this.tasks.indexOf(this.selected)
        this.tasks.splice(i, 1)
        this.selected = this.taskName = this.taskType = ''
      }
    },
    hasValidInput() {
      return this.taskName.trim() && this.taskType.trim()
    }
  }
}).mount('#app')

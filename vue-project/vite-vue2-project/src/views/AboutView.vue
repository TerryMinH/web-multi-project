<template>
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer | capitalize("name1", question) }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
    };
  },
  filters: {
    capitalize: function (value, arg1, arg2) {
      console.log("capitalize filter==>", value, arg1, arg2);
      if (!value) return "";
      value = value.toString();
      return `${value}!!+++`;
    },
  },
  computed: {
    name() {
      return this.question.split("").reverse().join("");
    },
    otherName({ name }) {
      console.log("otherName computed==>", name);
      return name + "!";
    },
  },
  watch: {
    // whenever question changes, this function will run
    // question(newQuestion, oldQuestion) {
    //   console.log("newQuestion:", newQuestion);
    //   this.answer = "Waiting for you to stop typing...";
    //   this.getAnswer();
    // },
    question: {
      handler(newQuestion, oldQuestion) {
        console.log("newQuestion:", newQuestion);
        this.answer = "Waiting for you to stop typing...";
        this.getAnswer();
      },
      immediate: true,
    },
  },
  created: function () {
    console.log("watch-example created");
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.getAnswer();
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      // axios
      //   .get("https://yesno.wtf/api")
      //   .then(function (response) {
      //     vm.answer = _.capitalize(response.data.answer);
      //   })
      //   .catch(function (error) {
      //     vm.answer = "Error! Could not reach the API. " + error;
      //   });
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>

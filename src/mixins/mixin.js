import fetcher from "./fetcher";

let fm = fetcher.methods

export default {
  methods: {
    printMixinData() {
      console.log(this.mixinData);
    },
    printDataFromVueFile() {
      console.log(this.vueData);
    },
    printAnotherHelloworld(another_text) {
      fm.helloworld(another_text);
    },
    printHelloWorld(hello_text) {
      this.printAnotherHelloworld(hello_text);
    },
    get_ele(sel_in) {
      return document.querySelector(sel_in);
    },
    get_eles(sel_in) {
      return document.querySelectorAll(sel_in);
    },
    print_pre(text_in) {
      return `<pre>${text_in}</pre>`;
    }
  }
};

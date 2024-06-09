const demo = {
  name: "",
  get bar() {
    return this.name;
  },
};

const proxy = new Proxy(demo, {
  get: function (target, proName) {
    return target[proName];
  },

  set: function (target, proName) {
    target[proName] = val;
  },
});

demo.name = "yivi";
console.log(proxy.bar);
console.log(demo.name); // 'yivi'

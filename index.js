class Calculator {
  constructor() {
    this.rule = new Map();
  }
  registerRule(name, fn) {
    this.rule.set(name, fn);
  }
  revoke(name, ...args) {
    return this.rule.get(name)(args);
  }
}

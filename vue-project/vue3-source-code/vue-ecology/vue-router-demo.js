/*
 * @Author: TerryMin
 * @Date: 2021-11-17 18:04:48
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-28 15:48:39
 * @Description: file not
 */
let Vue;

class VueRouter {
    constructor(options) {
        this.$options = options;
        this.current = window.location.hash.slice(1) || "/";

        Vue.util.defineReactive(this, "matched", []);

        this.match(this.$options);

        window.addEventListener("hashchange", this.currentHash.bind(this));

        window.addEventListener("load", this.currentHash.bind(this));
    }

    currentHash() {
        this.current = window.location.hash.slice(1);
        this.matched = [];
        this.matchs(this.$options);
    }

    matchs(routers) {
        // 递归处理路由
        // 输出结果一般是['parent', 'child1', 'child1-child1']
        routers.forEach((router) => {
            // 一般来说/路径下不会存放嵌套路由
            if (this.current === "/" && router.path === "/") {
                this.matched.push(router);
            } else if (this.current.includes(router.path) && router.path !== "/") {
                this.matched.push(router);
                if (router.children) {
                    this.matchs(router.children);
                }
            }
        });
    }
}

VueRouter.install = function(_Vue) {
    Vue = _Vue;
    //使用mixin和生命周期beforeCreate做全局混入, 拿到实例后的相关属性并挂载到prototype上
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                // 这里可以看出我们为何可以使用this.$router拿到router实例
                // 也可以看出为何要在main.js中的根实例中将router实例作为options配置进去
                Vue.prototype.$router = this.$options.router;
            }
        },
    });

    // 挂载router-view组件
    Vue.component("RouterView", {
        render(h) {
            // 上面提到的深度标记，父组件深度为0
            let deep = 0;

            // 将组件标记
            this.routerView = true;

            // 循环找出所有RouterView的父元素 并标记深度
            // 利用父子通信的中的$parent
            let parent = this.$parent;

            // 循环查找父组件，以此标记当前组件的深度，当parent不存在时候，说明已经到了顶层组件，退出循环
            while (parent) {
                //  父组件存在且是routerView
                if (parent && parent.routerView) {
                    deep += 1;
                }
                parent = parent.$parent;
            }

            // 找到匹配深度层级，找出component
            let matched = this.$router.matched;
            let _component = null;
            // 如果能在matched中找出，为_component赋值
            if (matched[deep]) {
                _component = matched[deep].components;
            }

            // 渲染_component
            return h(_component);
        },
    });

    // 挂载router-link组件
    Vue.component("RouterLink", {
        // 声明props，to并设置为必填
        props: {
            to: {
                type: String,
                required: true,
            },
        },
        render(h) {
            "a",
            {
                attrs: {
                    href: `#${this.to}`,
                },
            },
            // 利用匿名插槽将组件中文本写入
            [this.$slots.default];
        },
    });
};
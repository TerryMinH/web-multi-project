/*
 * @Author: TerryMin
 * @Date: 2023-03-07 15:51:08
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-05-04 15:33:57
 * @Description: file not
 */
import { reactive, toRefs, computed } from "vue";

const store = reactive({
  state: {
    name: "Eduardo",
    isAdmin: true,
  },
  number: 2,
});

const logout = async () => {
  store.state.isAdmin = false;
  store.state.name = "";
  store.number = 3;
  console.log(store.state);
};

const login = async (user) => {
  store.state.isAdmin = true;
  store.state.name = user;
  console.log(store.state);
};

export const useAdd = (obj = {}) => {
 
  // const paramsObj = reactive(obj);
  const changeNumber = () => {
    console.log(obj);
    // paramsObj.testNumber = 6;
  };

  const testComputed = computed(() => {
    return "www";
  });

  return {
    store,
    testComputed,
    // paramsObj,
    logout,
    login,
    changeNumber,
  };
};

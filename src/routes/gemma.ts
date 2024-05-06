import { defineStore } from "pinia";
const initialState = {
  count: 0,
  alpha: "aaa",
};
export const useGemmaStore = defineStore("gemma", {
  state: () => initialState,
  getters: {
    getCountTF(state) {
      return state.count > 0 && state.alpha === "abc";
    },
  },
  actions: {
    change(val: string) {
      this.alpha = val;
    },
    add() {
      this.count = this.count + 4;
    },
    remove() {
      this.count = this.count - 2;
    },
    resetCount() {
      this.count = 0;
    },
  },
});

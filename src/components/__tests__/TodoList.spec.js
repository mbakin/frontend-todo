import TodoList from "@/components/TodoList";
import {mount, shallowMount} from "@vue/test-utils";

describe("TodoList.vue", () => {
  it("renders a todo item element", () => {
    const wrapper = shallowMount(TodoList);
    expect(wrapper.find("#todo-item").exists()).toBe(true);
  });
  
})
import TodoInput from "@/components/TodoInput";
import { shallowMount } from "@vue/test-utils";

describe("TodoInput.vue", () => {
  it("should render TodoInput.vue elements correctly", () => {
    const wrapper = shallowMount(TodoInput);
    expect(wrapper.exists()).toBe(true);
    
    const addButton = wrapper.find("#add-todo-button");
    expect(addButton.exists()).toBe(true);
    
    const todoInput = wrapper.find("#add-todo-input");
    expect(todoInput.exists()).toBe(true);
  });
})
import {shallowMount} from "@vue/test-utils";
import Layout from "@/views/Layout.vue";
import TodoList from "@/components/TodoList";
import TodoInput from "@/components/TodoInput";
import API from "@/api";

jest.mock('@/api')

describe("Layout.vue", () => {
  it("renders a Layout component", () => {
    const wrapper = shallowMount(Layout);
    expect(wrapper.exists()).toBeTruthy();
  });
  
  it("renders a TodoInput component", () => {
    const wrapper = shallowMount(Layout);
    const todoInput = wrapper.findComponent(TodoInput);
    expect(todoInput.exists()).toBeTruthy();
  });
  it('should exists ul element ', function () {
    const wrapper = shallowMount(Layout);
    const list = wrapper.find(".todos");
    expect(list.exists()).toBe(true);
  });
});
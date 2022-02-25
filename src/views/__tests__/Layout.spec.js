import {shallowMount} from "@vue/test-utils";
import Layout from "@/views/Layout.vue";
import TodoList from "@/components/TodoList";
import TodoInput from "@/components/TodoInput";
import flushPromises from "flush-promises";
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
  it('should TodoList component exists', async () => {
    API.getTodos.mockResolvedValue([])
    const wrapper = shallowMount(Layout);
    expect(wrapper.exists()).toBeTruthy()
  });
  
  it('should render TodoList item component correctly', async () => {
    const mockResponse = [
      {
        id: 1,
        title: 'mock test item1',
      },
      {
        id: 2,
        title: 'mock test item2',
      }, {
        id: 1,
        title: 'mock test item3',
      }
    ]
    
    API.getTodos.mockResolvedValue(mockResponse)
    const wrapper = shallowMount(Layout);
    
    await flushPromises();
    const todoListComponent = wrapper.findComponent(TodoList);
    expect(todoListComponent.exists()).toBeTruthy();
    
  });
});
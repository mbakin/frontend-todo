import TodoList from "@/components/TodoList";
import {mount, shallowMount} from "@vue/test-utils";

describe("TodoList.vue", () => {
  
  const myTodoItem = (text) => {
    return shallowMount(TodoList, {
      propsData: {
        ...text
      }
    });
  }
  
  let wrapper = myTodoItem({todo : {}});
  
  it("renders a todo item element", () => {
    expect(wrapper.find("#todo-item").exists()).toBe(true);
  });
  
  it("renders a todo item with text", () => {
    const mockTodo ={
      id: 1,
      title: "mock test todo",
    }
    
    wrapper = myTodoItem({todo : mockTodo});
    expect(wrapper.exists()).toBe(true);
    
  });
})
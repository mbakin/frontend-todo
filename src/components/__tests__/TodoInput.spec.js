import TodoInput from "@/components/TodoInput";
import { shallowMount } from "@vue/test-utils";
import API from "@/api";

jest.mock("@/api");

describe("TodoInput.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TodoInput);
  });
  
  it("should render TodoInput.vue elements correctly", () => {
    expect(wrapper.exists()).toBe(true);
    
    const addButton = wrapper.find("#add-todo-button");
    expect(addButton.exists()).toBe(true);
  
    const buttonText = addButton.text();
    expect(buttonText).toBe("Add Todo Item");
    
    const todoInput = wrapper.find("#add-todo-input");
    expect(todoInput.exists()).toBe(true);
  
    const inputInitialValue = todoInput.text();
    expect(inputInitialValue).toBe("");
  });
})

describe("TodoInput.vue methods",  () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TodoInput, {
      propsData() {
        return {
          todo: "",
          todos: ""
        }
      },
    });
  });
  
  it("should not working methods when empty input field", async () => {
    
    const todoEmptyValue = ""
    const todoInput = wrapper.find("#add-todo-input");
    await todoInput.setValue(todoEmptyValue);
    
    const addButton = wrapper.find("#add-todo-button");
    await addButton.trigger("click");
    
    expect(wrapper.vm.$data.todo).toEqual(todoEmptyValue);
    expect(wrapper.vm.$data.todos).toEqual("");
    expect(todoInput.element.value).toEqual(todoEmptyValue);
  });
  
  it("should working methods when input field is not empty", async () => {
    const mockResponse = [
      {
        id: 1,
        title: 'mock test item',
      },
      {
        id: 2,
        title: 'mock test item2',
      }
    ]
    
    API.createTodo.mockResolvedValue(mockResponse);
    
    const todoValue = "mock test item"
    
    const todoInput = wrapper.find("#add-todo-input");
    await todoInput.setValue(todoValue);
    
    const addButton = wrapper.find("#add-todo-button");
    await addButton.trigger("click");
    
    expect(API.createTodo).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.$data.todo).toEqual(todoValue);
    expect(todoInput.element.value).toEqual(todoValue);
    
    await wrapper.vm.$nextTick();
    
    expect(wrapper.emitted()).toHaveProperty("todo")
    expect(wrapper.vm.$data.todos).toEqual([{id: 1, title: 'mock test item'}, {id: 2, title: 'mock test item2'}]);
    expect(todoInput.element.value).toEqual("");
    
  });
});
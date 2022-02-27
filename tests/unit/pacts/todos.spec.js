import {pactWith} from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
const { eachLike, like, number } = Matchers
import {API} from "@/api";

pactWith( {
  consumer: 'frontend',
  provider: 'backend',
}, provider => {
  describe("todos", () => {
    let api;
    beforeAll(() => {
      api = new API(provider.mockService.baseUrl, false);
    });
    test("get todo list", async () => {
      
      await provider.addInteraction({
        state: "todo list succesfully retrieved",
        uponReceiving: "a request for todo list properly",
        withRequest: {
          method: "GET",
          path: "/api/v1/todos",
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: []
        }
      })
      const res = await api.getTodos();
      expect(res).toBeTruthy();
    })
    
    test( "create a todo item", async () => {
      const expectedTodo = {
        id: like(1),
        todo: like("dummy todo"),
      }
      
      await provider.addInteraction({
        state: "todo item succesfully created",
        uponReceiving: "a request for create todo item properly",
        withRequest: {
          method: "POST",
          path: "/api/v1/todos",
          body: {"todo": "dummy todo 2"}
        },
        willRespondWith : {
          status: 201,
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: expectedTodo
        }
      })
      const res = await api.createTodo("dummy todo 2");
      expect(res).toBeTruthy();
    })
  })
})
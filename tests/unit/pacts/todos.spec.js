import {pactWith} from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
const { eachLike, like } = Matchers
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
            "Content-Type": "application/json"
          },
          body:{
            data: eachLike({
              id: like(1),
              todo: like("dummy todo"),
            }, 0)
          }
        }
      })
      const res = await api.getTodos();
      expect(res).toBeTruthy();
      expect(res.data.length).toBeGreaterThan(0);
    })
  })
})
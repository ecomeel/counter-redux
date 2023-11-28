import { Response, createServer } from "miragejs";

const initialCounter = 20;

createServer({
  routes() {
    this.namespace = "api"

    this.get("/counter", () => {
        return new Response(400)
        return {
            counter: initialCounter
        }
    });
  },
})
import { createServer } from "miragejs";

const initialCounter = 20;

createServer({
  routes() {
    this.namespace = "api"

    this.get("/counter", () => {
        return {
            counter: initialCounter
        }
    });
  },
})
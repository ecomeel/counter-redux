import { createServer } from "miragejs";

const initialCounter = 10;

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
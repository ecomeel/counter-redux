import { Response, createServer } from "miragejs";

const initialCounter = 20;

createServer({
    routes() {
        this.namespace = "api";

        this.get("/counter", () => {
            return {
                counter: initialCounter,
            };
        });

        this.post("/counter/save", (schema, request) => {
            let counter = JSON.parse(request.requestBody).counter;
            return {
              status: 'ok'
            };
        });
    },
});

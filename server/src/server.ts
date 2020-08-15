import { App } from "./app";

const main = () => {
    const app = new App();
    const port = parseInt(process.env.PORT) || 8080;
    app.listen(port);
};

main();

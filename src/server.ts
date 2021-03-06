import Hapi from "@hapi/hapi";
import routes from "./routes";
import plugins from "./plugins";
import config from "./config";
import { connect } from "./middlewares/mongodb";

const init = async () => {
    const server = new Hapi.Server({
        port: config.port,
        host: config.host
    });
    server.route(routes);
    await server.register(plugins as any);
    await server.start();
    console.info("INFO: Server running on %s/documentation", server.info.uri);
    connect();
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

(async () => {
    await init();
})();

//@ts-check
const {generateTodos} = require("../../middleware");
const {Todo} = require("../../models");

/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/todo",
        generateTodos,
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                title: "Todos",
                todos: req.session.todos,
            };
            req.vueOptions.head.title = "Todo";
            req.vueOptions.head.styles.push({
                src: "https://unpkg.com/todomvc-app-css@2.0.6/index.css",
            });
            req.vueOptions.head.scripts.push({
                src: "https://unpkg.com/axios/dist/axios.min.js",
            });

            if (req.query.filter) {
                switch (req.query.filter.toUpperCase()) {
                    case "COMPLETED":
                        data.todos = data.todos.filter(
                            /** @param {Todo} todo */
                            function(todo) {
                                return todo.completed;
                            },
                        );
                        break;
                    case "ACTIVE":
                        data.todos = data.todos.filter(
                            /** @param {Todo} todo */
                            function(todo) {
                                return !todo.completed;
                            },
                        );
                        break;
                }
            }

            res.renderVue("todo/todo.vue", data, req.vueOptions);
        },
    );

    router.post("/todo/update",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            req.session.todos = req.body;
            res.json({ok: true});
        },
    );
};

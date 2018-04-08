//@ts-check

/**
 * Main Route Contoller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                title: "Oh hi world!",
            };
            const vueOptions = {
                head: {
                    title: "Express-Vue MVC Starter Kit",
                },
            };
            res.renderVue("main/main.vue", data, vueOptions);
        },
    );
};

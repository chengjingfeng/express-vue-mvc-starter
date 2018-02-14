// 

module.exports.default = (router) => {
    router.get("/", (req, res) => {
        const data = {
            title: "Oh hi world!"
        };
        const vueOptions = {
            head: {
                title: "Express-Vue MVC Starter Kit"
            }
        };
        res.renderVue("main/main.vue", data, vueOptions);
    });
};
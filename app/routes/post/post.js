module.exports.default = (router) => {
    router.get("/post", (req, res) => {
        const data = {
            message: "POST",
            csrfToken: req.csrfToken()
        };
        req.vueOptions = {
            head: {
                title: "Post example",
                scripts: [
                    {src: "https://unpkg.com/axios/dist/axios.min.js"}
                ]
            }
        };
        res.renderVue("post/post.vue", data, req.vueOptions);
    });

    router.post("/post", (req, res) => {
        const data = {
            message: "POST",
            body: req.body
        };
        res.json(data);
    });
};
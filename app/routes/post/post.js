module.exports.default = (router) => {
    router.get('/post', (req, res) => {
        const data = {
            message: 'POST',
            csrfToken: req.csrfToken()
        };
        const vueOptions = {
            head: {
                title: 'Post example'
            }
        };
        res.renderVue('post/post.vue', data, vueOptions);
    });

    router.post('/post', (req, res) => {
        const data = {
            message: 'POST',
            body: req.body
        };
        res.json(data);
    });
};
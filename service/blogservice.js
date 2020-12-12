const blog = require('./model/blog');

(async () => {
    var blogs = await blog.findAll({
        where: {
            name: 'Geelong'
        }
    });
    console.log(`find ${blogs.length} blogs:`);
    for (let b of blogs) {
        console.log(JSON.stringify(b));
    }
})();

module.exports = blogservice;
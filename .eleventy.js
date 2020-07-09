module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/**/*.ts")
    eleventyConfig.addPassthroughCopy("src/**/*.scss")

    // You can return your Config object (optional).
    return {
        dir: {
            input: 'src',
            output: "_site"
        },
        templateFormats: [
            'html',
            'md',
            'njk'
        ],
        passthroughFileCopy: true
    }
}


/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions}) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const id = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `id`,
            value: id,
        })
    }
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/,
            use: loaders.null(),
          },
        ],
      },
    });
   }
 };
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',

  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],

  markdown: {
    anchor: {
      permalink: "/:year/:month/:day/:slug"
    },
    toc: {
      includeLevel: [1, 2, 3]
    },
    lineNumbers: true,
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    extendMarkdown: md => {
      md.set({breaks: true});
      md.use(require('markdown-it-plantuml'), {
        imageFormat: 'png'
      });
    }
  },

  plugins: ['flowchart', {
    '@vuepress/medium-zoom': {
      selector: '.content__default img',
      options: {
        margin: 16
      }
    },
  }]
}

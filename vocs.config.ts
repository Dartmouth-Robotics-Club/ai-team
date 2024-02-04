import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'DSRT AI',

  rootDir: ".",
  // theme: {
  //   accentColor: {
  //     light: '#ff0000',
  //     dark: '#ff0000',
  //   }
  // },
  sidebar: [
    {
      text: 'Learning Resources',
      link: '/learning-resources',
    },
    {
      text: "Projects",
      collapsed: true,
      items: [
        {
          text: "Object Detection",
          link: "/projects/24w"
        },
        {
          text: "SLAM",
          link: "/projects/23s"
        }
      ]
    }
    // {
    //   text: 'Guides',
    //   collapsed: false,
    //   items: [
    //     {
    //       text: 'Blog',
    //       link: '/docs/guides/blog',
    //     },
    //     {
    //       text: 'Code Snippets',
    //       link: '/docs/guides/code-snippets',
    //     },
    //     {
    //       text: 'CSS & Styling',
    //       link: '/docs/guides/styling',
    //     },
    //     {
    //       text: 'Dynamic OG Images',
    //       link: '/docs/guides/og-images',
    //     },
    //     {
    //       text: 'Layouts',
    //       link: '/docs/guides/layouts',
    //     },
    //     {
    //       text: 'Markdown Snippets',
    //       link: '/docs/guides/markdown-snippets',
    //     },
    //     {
    //       text: 'Sidebar & Top Navigation',
    //       link: '/docs/guides/navigation',
    //     },
    //     {
    //       text: 'Theming',
    //       link: '/docs/guides/theming',
    //     },
    //     {
    //       text: 'Twoslash',
    //       link: '/docs/guides/twoslash',
    //     },
    //   ],
    // },
  ],
})

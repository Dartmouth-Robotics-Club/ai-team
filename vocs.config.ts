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
          text: "Projects Archive",
          link: "/projects"
        },
        {
          text: "Object Detection",
          link: "/projects/2024-object-detection"
        },
        {
          text: "SLAM",
          link: "/projects/2023-slam"
        }
      ]
    },
    {
      text: "Members",
      collapsed: true,
      items: [
        {
          text: "Members Archive",
          link: "/members"
        },
        {
          text: "Current Members",
          link: "/members/current"
        },
        {
          text: "Previous Members",
          link: "/members/previous"
        }
      ]
    },
    {
      text: "How to Join",
      link: "/join"
    }
  ],
})

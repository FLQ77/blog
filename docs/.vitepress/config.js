import { defineConfig } from "vitepress";

export default defineConfig({
  title: "七七酱是只猫",
  description: "hello world",
  base: "/blog/",

  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "学习笔记", link: "/note/" },
      { text: "问题总结", link: "/issues/" },
      { text: "生活感悟", link: "/life/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/FLQ77" }],

    sidebar: {
      "/note/": [
        {
          text: "学习笔记",
          items: [{ text: "2023-02", link: "/note/2023-02" }],
        },
      ],
      "/issues/": [
        {
          text: "常见问题",
          items: [{ text: "scss", link: "/issues/scss" }],
        },
      ],
      "/life/": [
        {
          text: "生活感悟",
          items: [{ text: "阅读写作小册有感", link: "/life/2023-02" }],
        },
      ],
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-02-09～present FLQ",
    },
  },
});

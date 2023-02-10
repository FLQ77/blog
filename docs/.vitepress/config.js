import { defineConfig } from "vitepress";

export default defineConfig({
    title: 'home',
    description: 'a personal blog',
    base: '/blog/',

    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: '首页', link: '/'},
            { text: '学习笔记', link: '/note/'},
            { text: '问题总结', link: '/issues/'},
            { text: '生活感悟', link: '/life/'}
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/FLQ77" }],
        footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2023-02-09～present FLQ",
        },
    }
})
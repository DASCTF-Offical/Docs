import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@glzjin/documate_vue'
import '@glzjin/documate_vue/dist/style.css'

export default {
    ...DefaultTheme,
    Layout: h(DefaultTheme.Layout, null, {
        'nav-bar-content-before': () => h(Documate, {
            endpoint: 'https://love-wiki.dasctf.com/ai/ask',
        }),
    }),
}
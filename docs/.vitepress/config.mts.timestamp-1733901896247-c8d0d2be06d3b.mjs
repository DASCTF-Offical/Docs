// docs/.vitepress/config.mts
import { defineConfig } from "file:///E:/WebstormProjects/love-wiki/node_modules/vitepress/dist/node/index.js";
import AutoSidebar from "file:///E:/WebstormProjects/love-wiki/node_modules/vite-plugin-vitepress-auto-sidebar/dist/index.mjs";
var config_default = defineConfig({
  title: "DASCTF\u8D5B\u9898\u5F81\u96C6\u5E73\u53F0\u4F7F\u7528\u8BF4\u660E",
  description: "DASCTF\u8D5B\u9898\u5F81\u96C6\u5E73\u53F0\u4F7F\u7528\u8BF4\u660E",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav,
    // sidebar,
    socialLinks: [
      { icon: "qq", link: "https://qm.qq.com/q/2TQahEworK" },
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],
    search: {
      provider: "local"
    }
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        // You can also set options to adjust sidebar data
        // see option document below
      })
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxXZWJzdG9ybVByb2plY3RzXFxcXGxvdmUtd2lraVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFdlYnN0b3JtUHJvamVjdHNcXFxcbG92ZS13aWtpXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9XZWJzdG9ybVByb2plY3RzL2xvdmUtd2lraS9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCBBdXRvU2lkZWJhciBmcm9tICd2aXRlLXBsdWdpbi12aXRlcHJlc3MtYXV0by1zaWRlYmFyJ1xuXG4vLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJEQVNDVEZcdThENUJcdTk4OThcdTVGODFcdTk2QzZcdTVFNzNcdTUzRjBcdTRGN0ZcdTc1MjhcdThCRjRcdTY2MEVcIixcbiAgZGVzY3JpcHRpb246IFwiREFTQ1RGXHU4RDVCXHU5ODk4XHU1RjgxXHU5NkM2XHU1RTczXHU1M0YwXHU0RjdGXHU3NTI4XHU4QkY0XHU2NjBFXCIsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIC8vIG5hdixcbiAgICAvLyBzaWRlYmFyLFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ3FxJywgbGluazogJ2h0dHBzOi8vcW0ucXEuY29tL3EvMlRRYWhFd29ySycgfSxcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzJyB9XG4gICAgXSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcbiAgICB9XG4gIH0sXG4gIHZpdGU6IHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAvLyBhZGQgcGx1Z2luXG4gICAgICBBdXRvU2lkZWJhcih7XG4gICAgICAgIC8vIFlvdSBjYW4gYWxzbyBzZXQgb3B0aW9ucyB0byBhZGp1c3Qgc2lkZWJhciBkYXRhXG4gICAgICAgIC8vIHNlZSBvcHRpb24gZG9jdW1lbnQgYmVsb3dcbiAgICAgIH0pXG4gICAgXVxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlQsU0FBUyxvQkFBb0I7QUFDeFYsT0FBTyxpQkFBaUI7QUFHeEIsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS1gsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLE1BQU0sTUFBTSxpQ0FBaUM7QUFBQSxNQUNyRCxFQUFFLE1BQU0sVUFBVSxNQUFNLHFDQUFxQztBQUFBLElBQy9EO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQTtBQUFBLE1BRVAsWUFBWTtBQUFBO0FBQUE7QUFBQSxNQUdaLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

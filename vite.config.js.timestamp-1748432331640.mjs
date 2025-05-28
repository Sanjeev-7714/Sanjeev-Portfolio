// vite.config.js
import { defineConfig } from "file:///C:/Users/Sanjeev/Desktop/FSWD/Cursor%20Portfolio%20-%20React/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Sanjeev/Desktop/FSWD/Cursor%20Portfolio%20-%20React/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  build: {
    chunkSizeWarningLimit: 1e3,
    // Increase size limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"]
          // Add other third-party dependencies here if needed
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTYW5qZWV2XFxcXERlc2t0b3BcXFxcRlNXRFxcXFxDdXJzb3IgUG9ydGZvbGlvIC0gUmVhY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFNhbmplZXZcXFxcRGVza3RvcFxcXFxGU1dEXFxcXEN1cnNvciBQb3J0Zm9saW8gLSBSZWFjdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvU2FuamVldi9EZXNrdG9wL0ZTV0QvQ3Vyc29yJTIwUG9ydGZvbGlvJTIwLSUyMFJlYWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLkpQRyddLFxuICBidWlsZDoge1xuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCwgLy8gSW5jcmVhc2Ugc2l6ZSBsaW1pdCB0byAxMDAwa2JcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgLy8gQWRkIG90aGVyIHRoaXJkLXBhcnR5IGRlcGVuZGVuY2llcyBoZXJlIGlmIG5lZWRlZFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1csU0FBUyxvQkFBb0I7QUFDblksT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixlQUFlLENBQUMsVUFBVTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLHVCQUF1QjtBQUFBO0FBQUEsSUFDdkIsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osUUFBUSxDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQTtBQUFBLFFBRW5EO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

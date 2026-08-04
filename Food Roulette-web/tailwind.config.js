import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "on-secondary-fixed-variant": "#6f3800",
              "on-secondary-container": "#783d01",
              "inverse-surface": "#343026",
              "surface-bright": "#fff8ef",
              "primary-fixed-dim": "#ffb3b0",
              "on-tertiary-fixed": "#002112",
              "surface-tint": "#b52330",
              "primary": "#b52330",
              "subtle-gray": "#E5E7EB",
              "on-tertiary-fixed-variant": "#005233",
              "surface": "#fff8ef",
              "tertiary-container": "#55a37a",
              "surface-dim": "#e1d9cb",
              "surface-container-high": "#efe7d9",
              "secondary": "#8e4e14",
              "on-secondary-fixed": "#2f1400",
              "error": "#ba1a1a",
              "tertiary-fixed-dim": "#88d7aa",
              "on-primary": "#ffffff",
              "primary-container": "#ff5a5f",
              "on-primary-fixed": "#410007",
              "surface-container-low": "#fbf3e4",
              "surface-white": "#FFFFFF",
              "secondary-fixed-dim": "#ffb780",
              "secondary-container": "#ffab69",
              "secondary-fixed": "#ffdcc4",
              "surface-container-lowest": "#ffffff",
              "error-container": "#ffdad6",
              "inverse-primary": "#ffb3b0",
              "outline-variant": "#e2bebc",
              "status-closed": "#DC2626",
              "primary-fixed": "#ffdad8",
              "tertiary": "#166b47",
              "inverse-on-surface": "#f8f0e1",
              "on-secondary": "#ffffff",
              "streak-gold": "#FFC107",
              "on-surface": "#1e1b13",
              "on-tertiary": "#ffffff",
              "surface-container": "#f5edde",
              "on-error": "#ffffff",
              "on-background": "#1e1b13",
              "on-tertiary-container": "#00341f",
              "background": "#fff8ef",
              "on-primary-container": "#61000e",
              "on-primary-fixed-variant": "#92001b",
              "surface-variant": "#e9e2d3",
              "surface-container-highest": "#e9e2d3",
              "on-surface-variant": "#5a403f",
              "outline": "#8e706f",
              "tertiary-fixed": "#a3f4c5",
              "status-open": "#16A34A",
              "on-error-container": "#93000a"
          },
          "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
          "spacing": {
              "stack-lg": "24px",
              "margin-desktop": "32px",
              "margin-mobile": "16px",
              "stack-md": "12px",
              "gutter": "16px",
              "base": "8px",
              "stack-sm": "4px"
          },
          "fontFamily": {
              "caption": ["Inter", "sans-serif"],
              "headline-md": ["Plus Jakarta Sans", "sans-serif"],
              "body-md": ["Inter", "sans-serif"],
              "body-lg": ["Inter", "sans-serif"],
              "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
              "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
              "label-strong": ["Inter", "sans-serif"],
              "display-hero": ["Plus Jakarta Sans", "sans-serif"]
          },
          "fontSize": {
              "caption": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
              "headline-md": ["20px", { "lineHeight": "28px", "fontWeight": "700" }],
              "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
              "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
              "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
              "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
              "label-strong": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600" }],
              "display-hero": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "800" }]
          }
      }
  },
  plugins: [forms, containerQueries],
};

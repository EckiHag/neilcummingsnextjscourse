import { nextui } from "@nextui-org/react"
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradient": "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "green-eck": {
          extend: "light", // dark= vererbt Standardwerte vom dunklen Thema
          colors: {
            background: "#0D001A",
            foreground: "#000000",
            primary: {
              50: "#F5EFE6",
              100: "#EED9B7",
              200: "#E6C48C",
              300: "#D8A557",
              400: "#C08F3A",
              500: "#A47820",
              600: "#846013",
              700: "#63480B",
              800: "#423106",
              900: "#211803",
              DEFAULT: "#A47820",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#E6F4E9",
              100: "#C1E1C8",
              200: "#99D1A5",
              300: "#68BB79",
              400: "#45A358",
              500: "#278C3A",
              600: "#1D6E2E",
              700: "#155122",
              800: "#0D3415",
              900: "#041808",
              DEFAULT: "#278C3A",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
}
export default config

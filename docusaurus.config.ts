import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Linh's Awesome Docusaurus",
  tagline: "Technical documentation",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  future: {
    v4: true,
  },
  url: "https://dpplinh28.github.io",
  baseUrl: "/awesome-docs/",
  organizationName: "dpplinh28",
  projectName: "awesome-docs",
  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themes: [
    "@docusaurus/theme-mermaid",

    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownImages: "warn",
    },
  },
  themeConfig: {
    image: "img/social-card.jpg",

    navbar: {
      title: "Linh's Awesome Docs",

      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },

        {
          href: "https://github.com/dpplinh28/awesome-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",

      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Linh's Awesome Docs`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

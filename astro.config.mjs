import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightHeadingBadges from 'starlight-heading-badges'

const site = "https://wiki.hysky.de";
const socialLinks = [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/SkyblockerMod' },
  { icon: 'discord', label: 'Discord', href: 'https://discord.com/invite/aNNJHQykck' },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/' }
];

// https://astro.build/config
export default defineConfig({
  site: site,
  integrations: [
    starlight({
      title: "Skyblocker",
      logo: {
        src: '/public/images/uploads/skyblocker.svg',
      },
      favicon: "/src/assets/Skyblocker-Assets/other/skyblocker.png",
      social: socialLinks,
      components: {
        Header: "./src/components/overrides/Header.astro",
        LanguageSelect: "./src/components/overrides/LanguageSelect.astro",
        EditLink: "./src/components/overrides/EditLink.astro",
        Footer: "./src/components/overrides/Footer.astro",
      },
      editLink: {
        baseUrl: "https://github.com/SkyblockerMod/wiki.hysky.de/edit/main/",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        // German docs in `src/content/docs/de/`
        de: {
          label: "Deutsch",
        },
        // France docs in `src/content/docs/fr/`
        fr: {
          label: "France",
        },
        // add more lang https://starlight.astro.build/reference/configuration/#locales
      },
      sidebar: [
        {
          label: "🛠️ Mod",
          items: [
            { label: "🏠 Home", 
              link: "mod/" 
            },
            {
              label: "📖 Getting Started",
              autogenerate: {
                directory: "mod/guides",
              },
            },
            {
              label: "⚡ Features",
              autogenerate: {
                directory: "mod/features",
              },
            },
            {
              label: "❓ FAQ & Help",
              link: "mod/faq" 
              
            },
            {
              label: "📜 Changelog",
              link: "mod/changelog" 
            },
          ],
        },
        {
          label: "📦️ Modpack",
          autogenerate: {
            directory: "modpack",
          },
        },
        {
          label: "👨‍💻 Contribute",
          autogenerate: {
            directory: "contribute",
          },
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: "hidden",
          },
        }),
        starlightHeadingBadges({}),
      ],
    }),
  ],
});

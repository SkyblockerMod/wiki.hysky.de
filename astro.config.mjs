import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

const site = "https://wiki.hysky.de"
const github = "https://github.com/SkyblockerMod"
const discord = "https://discord.com/invite/aNNJHQykck"
const youtube = "https://www.youtube.com/@wohlhabend_"

// https://astro.build/config
export default defineConfig({
    site,
    integrations: [
        starlight({
            title: 'Skyblocker Docs',
            favicon: '/src/assets/Skyblocker-Assets/other/skyblocker.png',
            customCss: [
                // Path to your Tailwind base styles:
                './src/tailwind.css',
            ],
            social: { github, discord, youtube },
            editLink: {
                baseUrl: 'https://github.com/SkyblockerMod/wiki.hysky.de/edit/main/'
            },
            sidebar: [
                {
                    label: '👨‍💻 Contribute',
                    autogenerate: {
                        directory: 'contribute'
                    }
                },
                {
                    label: '🛠️ Mod',
                    autogenerate: {
                        directory: 'mod'
                    }
                },
                {
                    label: '📦️ Modpack',
                    autogenerate: {
                        directory: 'modpack'
                    }
                }
            ],
            defaultLocale: 'root',
            // optional
            locales: {
                root: {
                    label: 'English',
                    lang: 'en' // lang is required for root locales,
                },

                // German docs in `src/content/docs/de/`
                de: {
                    label: 'Deutsch'
                },
                // France docs in `src/content/docs/fr/`
                fr: {
                    label: 'France'
                }
            }
        }),
        tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
        }),
    ],
});

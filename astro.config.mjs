import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://wiki.hysky.de',
    base: '/main',
    integrations: [starlight({
            title: 'SkyBlocker Docs',
            customCss: [
                // Path to your Tailwind base styles:
                './src/tailwind.css',
            ],
            defaultLocale: 'en',
            social: {
                github: 'https://github.com/skyblockermod/skyblocker',
                discord: 'https://discord.com/invite/aNNJHQykck',
                youtube: 'https://www.youtube.com/@wohlhabend_'
            },
            editLink: {
                baseUrl: 'https://github.com/SkyblockerMod/wiki.hysky.de/edit/main/docs/'
            },
            sidebar: [{
                label: 'Contribute',
                autogenerate: {
                    directory: 'contributor'
                }
            }, {
                label: 'Mod',
                autogenerate: {
                    directory: 'reference'
                }
            }],
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

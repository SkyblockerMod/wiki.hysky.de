import { defineCollection, z } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { blogSchema } from "starlight-blog/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
  i18n: defineCollection({ 
    loader: i18nLoader(), 
    schema: i18nSchema({
      extend: z.object({
        'menu.mod.title': z.string().optional(),
        'menu.modpack.title': z.string().optional(),
        'menu.contributor.title': z.string().optional(),
        'menu.blog.title': z.string().optional(),
        'menu.docs.title': z.string().optional(),
        'lang.addmore': z.string().optional(),
      }),
    }) 
  }),
};

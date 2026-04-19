import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    // Singleton: only one document of this type should ever exist.
    fields: [
        defineField({
            name: 'title',
            title: 'Internal Title',
            type: 'string',
            initialValue: 'Site Settings',
            readOnly: true,
        }),
        defineField({
            name: 'impactStats',
            title: 'Impact Dashboard Stats',
            type: 'array',
            description: 'Exactly 4 stats displayed on the home page Impact Dashboard.',
            of: [
                {
                    type: 'object',
                    name: 'stat',
                    fields: [
                        defineField({ name: 'number',   title: 'Number (e.g. "500+")',  type: 'string', validation: (Rule) => Rule.required() }),
                        defineField({ name: 'label_en', title: 'Label (English)',        type: 'string', validation: (Rule) => Rule.required() }),
                        defineField({ name: 'label_zh', title: 'Label (Chinese)',        type: 'string', validation: (Rule) => Rule.required() }),
                    ],
                    preview: {
                        select: { title: 'number', subtitle: 'label_en' },
                    },
                },
            ],
            validation: (Rule) => Rule.max(4),
        }),
        defineField({
            name: 'heroVideoUrl',
            title: 'Hero Background Video URL',
            type: 'url',
            description: 'Optional: URL to an MP4 video for the home page hero background (e.g. from your CDN or Sanity asset URL).',
        }),
        defineField({
            name: 'heroImageUrl',
            title: 'Hero Background Image URL',
            type: 'url',
            description: 'Fallback image shown if no video URL is set. Place the file in /public and enter "/filename.jpg".',
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Site Settings' };
        },
    },
})

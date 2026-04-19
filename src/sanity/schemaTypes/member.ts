import { defineField, defineType } from 'sanity'

export const member = defineType({
    name: 'member',
    title: 'Team Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role / Title',
            type: 'string',
        }),
        defineField({
            name: 'department',
            title: 'Department / Group',
            type: 'string',
            options: {
                list: [
                    { title: 'Main Leadership', value: 'leadership' },
                    { title: 'IT & Tech', value: 'it' },
                    { title: 'Video & Media Production', value: 'video' },
                    { title: 'Marketing & Social Media', value: 'marketing' },
                    { title: 'Research & Policy', value: 'research' },
                    { title: 'Events & Outreach', value: 'events' },
                    { title: 'Design & Creative', value: 'design' },
                    { title: 'Finance & Admin', value: 'finance' },
                ],
            },
        }),
        defineField({
            name: 'order',
            title: 'Display Order (within group)',
            type: 'number',
            description: 'Lower numbers appear first. Leave blank for automatic ordering.',
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram URL',
            type: 'url',
        }),
    ],
})

import { defineField, defineType } from 'sanity'

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Environment', value: 'Environment' },
                    { title: 'Elderly Care', value: 'Elderly Care' },
                    { title: 'Arts & Culture', value: 'Arts & Culture' },
                    { title: 'Education', value: 'Education' },
                ],
            },
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Project Album',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                layout: 'grid',
            },
        }),
    ],
})

import { defineField, defineType } from 'sanity'

export const focusYear = defineType({
    name: 'focusYear',
    title: 'Annual Focus Year',
    type: 'document',
    fields: [
        defineField({
            name: 'year',
            title: 'Year',
            type: 'number',
            validation: (Rule) => Rule.required().min(2000).max(2100),
        }),
        defineField({
            name: 'isCurrent',
            title: 'Is Current Year?',
            type: 'boolean',
            description: 'Mark only one focus year as current.',
            initialValue: false,
        }),
        defineField({
            name: 'issue_en',
            title: 'Issue Title (English)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'issue_zh',
            title: 'Issue Title (Chinese)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'colorScheme',
            title: 'Color Scheme',
            type: 'string',
            description: 'Used for the color badge on the focus page.',
            options: {
                list: [
                    { title: 'Violet',  value: 'violet'  },
                    { title: 'Emerald', value: 'emerald' },
                    { title: 'Amber',   value: 'amber'   },
                    { title: 'Blue',    value: 'blue'    },
                    { title: 'Rose',    value: 'rose'    },
                    { title: 'Cyan',    value: 'cyan'    },
                ],
                layout: 'radio',
            },
            initialValue: 'emerald',
        }),
        defineField({
            name: 'iconName',
            title: 'Icon',
            type: 'string',
            description: 'Icon identifier for the focus issue.',
            options: {
                list: [
                    { title: 'HeartHandshake (Mental Health)', value: 'hearthandshake' },
                    { title: 'Leaf (Environment)',             value: 'leaf'           },
                    { title: 'Globe (Community)',              value: 'globe'          },
                    { title: 'GraduationCap (Education)',      value: 'graduationcap'  },
                    { title: 'Users (Community)',              value: 'users'          },
                    { title: 'Building (Urban)',               value: 'building'       },
                ],
                layout: 'dropdown',
            },
            initialValue: 'leaf',
        }),
        defineField({
            name: 'whyContext_en',
            title: 'Why This Issue? (English)',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'whyContext_zh',
            title: 'Why This Issue? (Chinese)',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'ourResponse_en',
            title: 'Our Response (English)',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'ourResponse_zh',
            title: 'Our Response (Chinese)',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'projectCount',
            title: 'Number of Projects This Year',
            type: 'number',
            initialValue: 0,
        }),
    ],
    orderings: [
        {
            title: 'Year (newest first)',
            name: 'yearDesc',
            by: [{ field: 'year', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'issue_en',
            subtitle: 'year',
            isCurrent: 'isCurrent',
        },
        prepare({ title, subtitle, isCurrent }) {
            return {
                title: `${subtitle} — ${title}`,
                subtitle: isCurrent ? '★ Current Focus' : 'Archive',
            };
        },
    },
})

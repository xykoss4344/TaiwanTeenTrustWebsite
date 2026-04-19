import { type SchemaTypeDefinition } from 'sanity'
import { member }       from './member'
import { project }      from './project'
import { post }         from './post'
import { focusYear }    from './focusYear'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [member, project, post, focusYear, siteSettings],
}

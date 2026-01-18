import { type SchemaTypeDefinition } from 'sanity'
import { member } from './member'
import { project } from './project'
import { post } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [member, project, post],
}

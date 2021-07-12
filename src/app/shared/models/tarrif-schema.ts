import { schema } from 'normalizr';

export const TarrifSchema = new schema.Entity('tarrifs');
export const sub = new schema.Array(TarrifSchema);

TarrifSchema.define({ sub: sub });

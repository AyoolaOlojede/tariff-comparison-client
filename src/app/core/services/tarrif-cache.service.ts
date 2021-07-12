import { Injectable } from '@angular/core';
import { normalize, denormalize } from 'normalizr';
import { TarrifDto } from '../../shared/models/tarrif.model';
import { TarrifSchema} from '../../shared/models/tarrif-schema';

export interface INormalizedTarrif {
  tarrif: TarrifDto;
}
export interface INormalizedTarrifs {
  entities: { tarrifs: INormalizedTarrif };
}

@Injectable()
export class CategoryCacheService {
public static normalizeCategory(tarrif: TarrifDto): INormalizedTarrifs {
    return normalize(tarrif, TarrifSchema);
  }

public static denormalizeCategory(cache: any, entities: any): TarrifDto {
    return denormalize(cache, TarrifSchema, entities) as TarrifDto;
 }
}

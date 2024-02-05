import { ResolveFn } from '@angular/router';
import { paintings } from './paintings';

export const paintingResolver: ResolveFn<number> = (route, _state) => {
  const param = route.paramMap.get('slug');

  if (param === null)
    throw Error('No slug parameter found');

  const painting = paintings.get(param);

  if (painting) return painting.index;
  throw Error(`Painting with slug "${param}" not found`);
};

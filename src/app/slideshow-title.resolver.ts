import { ResolveFn } from '@angular/router';
import { paintings } from './paintings';

export const slideshowTitleResolver: ResolveFn<string> = (route, _state) => {
  const slug = route.paramMap.get('slug');
  if (!slug) throw Error('Slug parameter is empty or null');

  const painting = paintings.get(slug);
  if (!painting) throw Error('Painting not found');

  return `galleria. | ${painting.title}`;
};

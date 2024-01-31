import { ImageLoaderConfig } from "@angular/common";

export const customImageKitLoader = (config: ImageLoaderConfig) => {
  const params: TransformParams = config.loaderParams ? config.loaderParams : {};

  if (config.width)
    params['w'] = config.width.toString();

  const transformation = serialize(params);
  const queryString = transformation ? `?tr=${transformation}` : '';

  return `${IMAGEKIT_ENDPOINT}/${config.src}${queryString}`;
};

type TransformParams = { [param: string]: string };
const IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/jgerard/fem-galleria-slideshow-site';

const serialize = (params: TransformParams): string =>
  Object.entries(params)
    .map(([key, value]) => `${key}-${value}`)
    .join(',');

import { ImageLoaderConfig } from "@angular/common";

export const customImageKitLoader = (config: ImageLoaderConfig) => {
  const params: TransformParams = config.loaderParams ? config.loaderParams : {};
  let queryString;

  if (config.width) {
    params['w'] = config.width.toString();
    queryString = `?tr=${serialize(params)}`;
  }
  else queryString = '';

  return `${IMAGEKIT_ENDPOINT}/${config.src}${queryString}`;
};

type TransformParams = { [param: string]: string };
const IMAGEKIT_ENDPOINT = 'https://ik.imagekit.io/jgerard/fem-galleria-slideshow-site';

const serialize = (params: TransformParams): string =>
  Object.entries(params)
    .map(([key, value]) => `${key}-${value}`)
    .join(',');

import { IMAGEKIT_ENDPOINT } from "../app/imagekit.config";

export class Painting {
  readonly IMG_EXT = '.png';
  previous?: Painting;
  next?: Painting;
  artistImgName: string;
  imgName: string;
  link: string;
  slug: string;
  wikiSource: string;

  constructor(
    public artist: string,
    public description: string,
    public resolution: [number, number],
    public title: string,
    public wikipedia: string,
    public year: number,
    public index = 0,
  ) {
    this.artistImgName = `${IMAGEKIT_ENDPOINT}/artist/${this.#toSlug(artist)}${this.IMG_EXT}`;
    this.slug = this.#toSlug(title);
    this.imgName = this.slug + this.IMG_EXT;
    this.link = '/slideshow/' + this.slug;
    this.wikiSource = 'https://en.wikipedia.org/wiki/' + wikipedia;
  }

  computeHeight(targetWidth: number): number {
    const [width, height] = this.resolution;

    return Math.round(height / width * targetWidth);
  }

  #toSlug(value: string): string {
    return value.toLowerCase().replaceAll(' ', '-');
  }
}

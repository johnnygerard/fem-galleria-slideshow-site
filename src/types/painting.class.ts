export class Painting {
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
  ) {
    this.slug = title.toLowerCase().replaceAll(' ', '-');
    this.imgName = this.slug + '.png';
    this.link = '/slideshow/' + this.slug;
    this.wikiSource = 'https://en.wikipedia.org/wiki/' + wikipedia;
  }

  computeHeight(targetWidth: number): number {
    const [width, height] = this.resolution;

    return Math.round(height / width * targetWidth);
  }
}

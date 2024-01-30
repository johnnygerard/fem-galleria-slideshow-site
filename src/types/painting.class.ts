export class Painting {
  public imgName: string;
  public link: string;
  public wikiSource: string;

  constructor(
    public artist: string,
    public description: string,
    public resolution: [number, number],
    public title: string,
    public wikipedia: string,
    public year: number,
  ) {
    const slug = title.toLowerCase().replaceAll(' ', '-');

    this.imgName = slug + '.png';
    this.link = '/slideshow/' + slug;
    this.wikiSource = 'https://en.wikipedia.org/wiki/' + wikipedia;
  }

  computeHeight(targetWidth: number): number {
    const [width, height] = this.resolution;

    return Math.round(height / width * targetWidth);
  }
}

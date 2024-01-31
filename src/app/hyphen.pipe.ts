import { Pipe, PipeTransform } from '@angular/core';

const HYPHEN = '-';
const NON_BREAKING_HYPHEN = '\u2011';

@Pipe({
  name: 'hyphen',
  standalone: true
})
export class HyphenPipe implements PipeTransform {
  /**
   * Convert regular hyphens to non-breaking hyphens
   */
  transform(value: string): string {
    return value.replaceAll(HYPHEN, NON_BREAKING_HYPHEN);
  }
}

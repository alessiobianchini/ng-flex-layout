import { describe, it, expect, beforeEach } from 'vitest';
import { BreakPoint } from './break-point';
import { validateSuffixes, mergeByAlias } from './breakpoint-tools';
import { DEFAULT_BREAKPOINTS } from './data/break-points';
import { ORIENTATION_BREAKPOINTS } from './data/orientation-break-points';

describe('breakpoint-tools', () => {
  let allBreakPoints: BreakPoint[] = [];

  const findByAlias = (alias: string): BreakPoint | undefined =>
    allBreakPoints.find(bp => bp.alias === alias);

  beforeEach(() => {
    allBreakPoints = validateSuffixes([...DEFAULT_BREAKPOINTS, ...ORIENTATION_BREAKPOINTS]);
  });

  describe('validation', () => {
    it('should not replace an existing suffix', () => {
      const validated = validateSuffixes([
        { alias: 'handset-portrait', suffix: 'Handset', mediaQuery: 'screen' },
      ]);
      expect(validated[0].suffix).toBe('Handset');
    });

    it('should add valid suffixes to breakpoints', () => {
      const validated = validateSuffixes([
        { alias: 'xs', mediaQuery: 'screen and (max-width: 599px)' },
        { alias: 'gt-lg', mediaQuery: 'screen and (max-width: 599px)' },
        { alias: 'gt_md', mediaQuery: 'screen and (max-width: 599px)' },
        { alias: 'gt.xs', mediaQuery: 'screen and (max-width: 599px)' },
        { alias: 'handset-portrait', mediaQuery: 'screen and (max-width: 599px)' },
      ]);

      expect(validated[0].suffix).toBe('Xs');
      expect(validated[1].suffix).toBe('GtLg');
      expect(validated[2].suffix).toBe('GtMd');
      expect(validated[3].suffix).toBe('GtXs');
      expect(validated[4].suffix).toBe('HandsetPortrait');
    });

    it('should auto-validate the DEFAULT_BREAKPOINTS', () => {
      const xs = findByAlias('xs');
      expect(xs).toBeDefined();
      expect(xs!.suffix).toBe('Xs');

      const gtLg = findByAlias('gt-lg');
      expect(gtLg).toBeDefined();
      expect(gtLg!.suffix).toBe('GtLg');

      const xl = findByAlias('xl');
      expect(xl).toBeDefined();
      expect(xl!.suffix).toBe('Xl');
    });
  });

  describe('merges', () => {
    it('should add custom breakpoints with empty defaults', () => {
      const defaults: BreakPoint[] = [];
      const custom = [
        { alias: 'sm', mediaQuery: 'screen' },
        { alias: 'md', mediaQuery: 'screen' },
      ];

      allBreakPoints = mergeByAlias(defaults, custom);

      expect(allBreakPoints.length).toBe(2);
      expect(findByAlias('sm')!.suffix).toBe('Sm');
      expect(findByAlias('md')!.suffix).toBe('Md');
    });

    it('should add custom breakpoints with unique aliases', () => {
      const defaults = [{ alias: 'xs', mediaQuery: 'screen and (max-width: 599px)' }];
      const custom = [
        { alias: 'sm', mediaQuery: 'screen' },
        { alias: 'md', mediaQuery: 'screen' },
      ];

      allBreakPoints = mergeByAlias(defaults, custom);

      expect(allBreakPoints.length).toBe(3);
      expect(findByAlias('xs')!.suffix).toBe('Xs');
      expect(findByAlias('sm')!.suffix).toBe('Sm');
      expect(findByAlias('md')!.suffix).toBe('Md');
    });

    it('should overwrite existing breakpoints with matching aliases', () => {
      const defaults = [{ alias: 'xs', mediaQuery: 'screen and (max-width: 599px)' }];
      const custom = [{ alias: 'xs', mediaQuery: 'screen and none' }];

      allBreakPoints = mergeByAlias(defaults, custom);

      expect(allBreakPoints.length).toBe(1);
      const xs = findByAlias('xs')!;
      expect(xs.suffix).toBe('Xs');
      expect(xs.mediaQuery).toBe('screen and none');
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { InjectionToken } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

interface BreakPoint {
  alias: string;
  suffix?: string;
  mediaQuery: string;
  priority?: number;
}

export const BREAKPOINTS = new InjectionToken<BreakPoint[]>('BREAKPOINTS');

const DEFAULT_BREAKPOINTS: BreakPoint[] = [
  { alias: 'xs', suffix: 'Xs', mediaQuery: '(max-width: 599px)' },
  { alias: 'sm', suffix: 'Sm', mediaQuery: '(min-width: 600px) and (max-width: 959px)' },
  { alias: 'md', suffix: 'Md', mediaQuery: '(min-width: 960px) and (max-width: 1279px)' },
];

const ORIENTATION_BREAKPOINTS: BreakPoint[] = [
  { alias: 'portrait', suffix: 'Portrait', mediaQuery: '(orientation: portrait)' },
  { alias: 'landscape', suffix: 'Landscape', mediaQuery: '(orientation: landscape)' },
];

describe('break-point-provider (mocked)', () => {
  let breakPoints: BreakPoint[];

  const findByAlias = (alias: string): BreakPoint | null =>
    breakPoints.find(bp => bp.alias === alias) ?? null;

  describe('with default breakpoints only', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: BREAKPOINTS,
            useValue: DEFAULT_BREAKPOINTS,
          },
        ],
      });

      breakPoints = TestBed.inject(BREAKPOINTS);
    });

    it('has the only standard default breakpoints without internal custom breakpoints', () => {
      expect(breakPoints.length).toBe(DEFAULT_BREAKPOINTS.length);
      expect(findByAlias('xs')).toBeDefined();
      expect(findByAlias('web.portrait')).toBeNull();
    });
  });

  describe('with merged custom breakpoints', () => {
    const EXTRAS: BreakPoint[] = [
      { alias: 'lt-ab', suffix: 'LtAb', mediaQuery: '(max-width: 297px)' },
      { alias: 'cd', suffix: 'Cd', mediaQuery: '(min-width: 298px) and (max-width:414px)' },
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: BREAKPOINTS,
            useValue: [...DEFAULT_BREAKPOINTS, ...EXTRAS],
          },
        ],
      });

      breakPoints = TestBed.inject(BREAKPOINTS);
    });

    it('has the custom breakpoints', () => {
      expect(breakPoints.length).toBe(DEFAULT_BREAKPOINTS.length + EXTRAS.length);
      expect(breakPoints.at(-2)?.alias).toBe('lt-ab');
      expect(breakPoints.at(-2)?.suffix).toBe('LtAb');
      expect(breakPoints.at(-1)?.alias).toBe('cd');
      expect(breakPoints.at(-1)?.suffix).toBe('Cd');
    });
  });

  describe('with custom breakpoint overrides', () => {
    const EXTRAS: BreakPoint[] = [
      { alias: 'xxl', suffix: 'Xxl', priority: 2000, mediaQuery: '(min-width:10000px)' },
      { alias: 'gt-xsl', suffix: 'GtXsl', priority: 2000, mediaQuery: 'screen and (max-width:20px) and (orientations: landscape)' },
      { alias: 'lt-ab', suffix: 'LtAb', priority: 2000, mediaQuery: '(max-width: 297px)' },
      { alias: 'cd', suffix: 'Cd', priority: 2000, mediaQuery: '(min-width: 298px) and (max-width:414px)' },
    ];

    const byAlias = (alias: string): BreakPoint | null =>
      breakPoints.find(bp => bp.alias === alias) ?? null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: BREAKPOINTS,
            useValue: [...DEFAULT_BREAKPOINTS, ...ORIENTATION_BREAKPOINTS, ...EXTRAS],
          },
        ],
      });

      breakPoints = TestBed.inject(BREAKPOINTS);
    });

    it('has merged the custom breakpoints as overrides to existing defaults', () => {
      const total = DEFAULT_BREAKPOINTS.length + ORIENTATION_BREAKPOINTS.length + EXTRAS.length;
      expect(breakPoints.length).toBe(total);
      expect(byAlias('gt-xsl')).toBeDefined();
      expect(byAlias('gt-xsl')!.mediaQuery).toBe(EXTRAS[1].mediaQuery);
      expect(byAlias('xxl')).toBeDefined();
    });

    it('can extend existing default breakpoints with custom settings', () => {
      const total = DEFAULT_BREAKPOINTS.length + ORIENTATION_BREAKPOINTS.length + EXTRAS.length;
      expect(breakPoints.length).toBe(total);
      expect(breakPoints.at(-2)?.alias).toBe('lt-ab');
      expect(breakPoints.at(-2)?.suffix).toBe('LtAb');
      expect(breakPoints.at(-1)?.alias).toBe('cd');
      expect(breakPoints.at(-1)?.suffix).toBe('Cd');
    });
  });

  describe('with exclusive custom breakpoints', () => {
    const EXTRAS: BreakPoint[] = [
      { alias: 'lt-ab', suffix: 'LtAb', mediaQuery: '(max-width: 297px)' },
      { alias: 'cd', suffix: 'Cd', mediaQuery: '(min-width: 298px) and (max-width: 414px)' },
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: BREAKPOINTS,
            useValue: EXTRAS,
          },
        ],
      });

      breakPoints = TestBed.inject(BREAKPOINTS);
    });

    it('has only the registered custom breakpoints; defaults are excluded.', () => {
      expect(breakPoints.length).toBe(EXTRAS.length);
      expect(breakPoints[0].alias).toBe('lt-ab');
      expect(breakPoints[0].suffix).toBe('LtAb');
      expect(breakPoints[1].alias).toBe('cd');
      expect(breakPoints[1].suffix).toBe('Cd');
    });
  });
});

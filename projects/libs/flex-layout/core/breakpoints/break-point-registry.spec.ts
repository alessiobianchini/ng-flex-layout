import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { BreakPoint } from './break-point';
import { BreakPointRegistry } from './break-point-registry';
import { BREAKPOINTS } from './break-points-token';
import { DEFAULT_BREAKPOINTS } from './data/break-points';

describe('break-points', () => {
  let breakPoints: BreakPointRegistry;

  beforeEach(() => {
    breakPoints = new BreakPointRegistry(DEFAULT_BREAKPOINTS);
  });

  it('registry has all aliases defined', () => {
    expect(breakPoints.items.length).toBeGreaterThan(0);

    expect(breakPoints.findByAlias('xs')).toBeDefined();
    expect(breakPoints.findByAlias('gt-xs')).toBeDefined(); // Overlapping
    expect(breakPoints.findByAlias('sm')).toBeDefined();
    expect(breakPoints.findByAlias('gt-sm')).toBeDefined();
    expect(breakPoints.findByAlias('md')).toBeDefined();
    expect(breakPoints.findByAlias('gt-md')).toBeDefined();
    expect(breakPoints.findByAlias('lg')).toBeDefined();
    expect(breakPoints.findByAlias('gt-lg')).toBeDefined();
    expect(breakPoints.findByAlias('xl')).toBeDefined();

    expect(breakPoints.overlappings.length).toBe(8);
  });

  describe('overridden with custom provider', () => {
    const CUSTOM_BPS: BreakPoint[] = [
      {
        alias: 'ab',
        suffix: 'Ab',
        mediaQuery: '(max-width: 297px)',
        overlapping: false,
      },
      {
        alias: 'cd',
        suffix: 'Cd',
        mediaQuery: '(min-width: 298px) and (max-width:414px)',
        overlapping: false,
      },
    ];

    let injectedBreakpoints: BreakPoint[];

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: BREAKPOINTS, useValue: CUSTOM_BPS }
        ]
      });

      injectedBreakpoints = TestBed.inject(BREAKPOINTS);
    });

    it('has the custom breakpoints', () => {
      expect(injectedBreakpoints.length).toBe(CUSTOM_BPS.length);
      expect(injectedBreakpoints[0].alias).toBe('ab');
      expect(injectedBreakpoints.at(-1)?.suffix).toBe('Cd');
    });
  });
});

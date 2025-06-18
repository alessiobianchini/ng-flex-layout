import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { sortDescendingPriority } from '../../utils/sort';
import { BreakPoint } from '../break-point';
import { BREAKPOINTS } from '../break-points-token';
import { DEFAULT_BREAKPOINTS } from './break-points';

describe('break-point-provider (mocked)', () => {
  let breakPoints: BreakPoint[];

  describe('with default configuration', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: BREAKPOINTS, useValue: DEFAULT_BREAKPOINTS }]
      });

      breakPoints = [...TestBed.inject(BREAKPOINTS)].sort(sortDescendingPriority);
    });

    it('has the standard breakpoints', () => {
      expect(breakPoints.length).toBe(DEFAULT_BREAKPOINTS.length);
      expect(breakPoints[0].alias).toBe('xs');
      expect(breakPoints.at(-1)?.alias).toBe('gt-xs');
    });
  });

  describe('with custom configuration', () => {
    let bpList: BreakPoint[];

    const CUSTOM_BPS: BreakPoint[] = [
      {
        alias: 'ab',
        suffix: 'Ab',
        mediaQuery: '(max-width: 297px)',
        overlapping: false
      },
      {
        alias: 'cd',
        suffix: 'Cd',
        mediaQuery: '(min-width: 298px) and (max-width:414px)',
        overlapping: false
      }
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: BREAKPOINTS, useValue: CUSTOM_BPS }]
      });

      bpList = TestBed.inject(BREAKPOINTS);
    });

    it('has the custom breakpoints', () => {
      expect(bpList.length).toBe(CUSTOM_BPS.length);
      expect(bpList[0].alias).toBe('ab');
      expect(bpList.at(-1)?.suffix).toBe('Cd');
    });
  });
});

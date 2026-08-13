import assert from 'node:assert/strict';
import { createMotionConfig, getComponentUrl, normalizeActivityData, normalizeContributionData } from '../package/runtime.js';

const records = normalizeActivityData([{ date: '2026-08-13', count: -4, level: 9 }]);
assert.deepEqual(records[0], { date: '2026-08-13', count: 0, level: 4, label: '2026-08-13' });
assert.deepEqual(normalizeContributionData([{ date: '2026-08-13', count: 2, level: 1 }])[0].count, 2);
assert.deepEqual(createMotionConfig({ duration: 12000, disabled: true }).duration, 10000);
assert.equal(createMotionConfig({ reducedMotion: false }).reducedMotion, false);
assert.equal(getComponentUrl('magnetic-button'), '/components/magnetic-button.html');

console.log('Runtime API tests passed.');

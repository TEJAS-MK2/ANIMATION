const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function normalizeActivityData(records = []) {
  if (!Array.isArray(records)) throw new TypeError('Activity data must be an array');
  return records.map((item, index) => ({
    date: String(item?.date ?? ''),
    count: Math.max(0, Number(item?.count) || 0),
    level: clamp(Number(item?.level) || 0, 0, 4),
    label: String(item?.label ?? item?.date ?? `item-${index + 1}`),
  }));
}

export function normalizeContributionData(records = []) {
  return normalizeActivityData(records);
}

export function createMotionConfig(options = {}) {
  return Object.freeze({
    duration: clamp(Number(options.duration) || 300, 0, 10000),
    easing: String(options.easing || 'cubic-bezier(.2,.8,.2,1)'),
    reducedMotion: options.reducedMotion !== false,
    disabled: options.disabled === true,
  });
}

export function getComponentUrl(name, base = '') {
  const path = `components/${name}.html`;
  return `${String(base).replace(/\/$/, '')}/${path}`.replace(/^\//, '/');
}

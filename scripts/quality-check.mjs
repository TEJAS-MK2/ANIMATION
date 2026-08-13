import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const exists = p => fs.existsSync(path.resolve(root, p));
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else files.push(path.relative(root, full));
  }
}
walk(root);

const htmlFiles = files.filter(f => f.endsWith('.html'));
const jsFiles = files.filter(f => f.endsWith('.js') || f.endsWith('.mjs'));

// These directories intentionally contain copy-paste HTML fragments rather than
// standalone documents. Full document metadata is enforced for actual pages.
const isFragment = file => file.startsWith('blocks/') || file.startsWith('examples/framework-starters/');
const hasDocumentMetadata = file => !isFragment(file);

for (const file of htmlFiles) {
  const text = fs.readFileSync(path.resolve(root, file), 'utf8');

  if (hasDocumentMetadata(file)) {
    if (!/^<!doctype html>/i.test(text.trim())) failures.push(`${file}: missing doctype`);
    if (!/<meta[^>]+name=["']viewport["']/i.test(text)) failures.push(`${file}: missing viewport meta`);
    if (!/<title>[^<]+<\/title>/i.test(text)) failures.push(`${file}: missing title`);
  }

  for (const match of text.matchAll(/(?:href|src)=["']([^"'#?]+)(?:["'])/gi)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(target)) continue;

    const resolved = path.normalize(path.join(path.dirname(file), target));
    const candidates = [resolved];

    // A link such as templates/portfolio.html may intentionally target a
    // directory entrypoint. Treat an existing directory as a valid local target.
    if (target.endsWith('.html')) {
      const directoryTarget = resolved.replace(/\.html$/i, '');
      if (exists(directoryTarget)) candidates.push(path.join(directoryTarget, 'index.html'));
    }

    if (!candidates.some(exists)) {
      failures.push(`${file}: broken local reference -> ${target}`);
    }
  }
}

for (const file of jsFiles) {
  if (file.includes('node_modules/')) continue;
  const text = fs.readFileSync(path.resolve(root, file), 'utf8');
  if (/TODO\s*:\s*(?:BUG|FIXME)/i.test(text)) failures.push(`${file}: unresolved bug marker`);
}

const required = [
  'index.html', 'component.html', 'app.js', 'styles.css', 'human-ui.css',
  'docs/index.html', 'docs/app.js', 'frameworks/component-snippets.js',
  'README.md', 'LICENSE', 'package.json'
];
for (const file of required) if (!exists(file)) failures.push(`missing required file: ${file}`);

const packageJson = JSON.parse(fs.readFileSync(path.resolve(root, 'package.json'), 'utf8'));
if (!packageJson.name?.startsWith('@tejas-mk2/')) failures.push('package name must use @tejas-mk2 scope');
if (packageJson.engines?.node !== '>=18') failures.push('package must require Node >=18');

if (failures.length) {
  console.error(`Quality check failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Quality check passed: ${htmlFiles.length} HTML files, ${jsFiles.length} JS files, required assets, package metadata, and local references checked.`);

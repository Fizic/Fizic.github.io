import fs from 'node:fs';
import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const worksRoot = path.resolve(__dirname, 'src/content/works');
const featuredWorksRoot = path.resolve(__dirname, 'src/content/featured-works');
const catalogs = [
  {
    virtualModuleId: 'virtual:works-catalog',
    exportName: 'workFiles',
    root: worksRoot,
    sourcePrefix: '/src/content/works',
  },
  {
    virtualModuleId: 'virtual:featured-works-catalog',
    exportName: 'featuredWorkFiles',
    root: featuredWorksRoot,
    sourcePrefix: '/src/content/featured-works',
  },
].map((catalog) => ({
  ...catalog,
  resolvedVirtualModuleId: `\0${catalog.virtualModuleId}`,
}));
const skippedDirectories = new Set(['node_modules', '.git', 'dist', 'build', 'coverage']);
const allowedExtensions = new Set([
  'pdf',
  'doc',
  'docx',
  'ppt',
  'pptx',
  'xls',
  'xlsx',
  'zip',
  'rar',
  '7z',
  'txt',
  'md',
  'rtf',
  'png',
  'jpg',
  'jpeg',
  'webp',
  'gif',
  'svg',
  'mov',
  'mp4',
  'avi',
  'mkv',
  'webm',
  'exe',
  'mp3',
  'json',
  'yml',
  'yaml',
  'xml',
  'csv',
  'sql',
  'cfg',
  'conf',
  'ini',
  'asm',
  'pas',
  'lex',
  'py',
  'hs',
  'c',
  'cpp',
  'html',
  'word',
  'rsf',
  'sample',
  'veg',
  'fnt',
  'sfn',
  'mw',
]);
const allowedFileNames = new Set(['Dockerfile', 'Makefile', 'README', 'LICENSE']);

function isWorkFile(fileName) {
  if (allowedFileNames.has(fileName)) {
    return true;
  }

  if (!fileName.includes('.')) {
    return false;
  }

  const extension = fileName.split('.').at(-1)?.toLowerCase();
  return allowedExtensions.has(extension);
}

function readWorksFiles(directory) {
  const items = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (skippedDirectories.has(entry.name)) {
        continue;
      }

      items.push(...readWorksFiles(fullPath));
      continue;
    }

    if (!isWorkFile(entry.name)) {
      continue;
    }

    items.push(fullPath);
  }

  return items;
}

function buildCatalogModule({ exportName, root, sourcePrefix }) {
  if (!fs.existsSync(root)) {
    return `export const ${exportName} = [];`;
  }

  const files = readWorksFiles(root).sort((a, b) =>
    a.localeCompare(b, 'ru', { numeric: true, sensitivity: 'base' }),
  );

  const imports = [];
  const entries = [];

  files.forEach((filePath, index) => {
    const importName = `${exportName}${index}`;
    const relativePath = path.relative(root, filePath).split(path.sep).join('/');
    const sourcePath = `${sourcePrefix}/${relativePath}`;

    imports.push(`import ${importName} from ${JSON.stringify(`${sourcePath}?url`)};`);
    entries.push(`{ cleanPath: ${JSON.stringify(relativePath)}, url: ${importName} }`);
  });

  return `${imports.join('\n')}\n\nexport const ${exportName} = [\n  ${entries.join(',\n  ')}\n];`;
}

function worksCatalogPlugin() {
  return {
    name: 'works-catalog-plugin',
    resolveId(id) {
      const catalog = catalogs.find((entry) => entry.virtualModuleId === id);

      if (catalog) {
        return catalog.resolvedVirtualModuleId;
      }

      return null;
    },
    load(id) {
      const catalog = catalogs.find((entry) => entry.resolvedVirtualModuleId === id);

      if (!catalog) {
        return null;
      }

      return buildCatalogModule(catalog);
    },
  };
}

export default defineConfig({
  plugins: [react(), worksCatalogPlugin()],
});

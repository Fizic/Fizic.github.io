import fs from 'node:fs';
import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const VIRTUAL_WORKS_MODULE_ID = 'virtual:works-catalog';
const RESOLVED_VIRTUAL_WORKS_MODULE_ID = `\0${VIRTUAL_WORKS_MODULE_ID}`;
const worksRoot = path.resolve(__dirname, 'src/content/works');
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

function worksCatalogPlugin() {
  return {
    name: 'works-catalog-plugin',
    resolveId(id) {
      if (id === VIRTUAL_WORKS_MODULE_ID) {
        return RESOLVED_VIRTUAL_WORKS_MODULE_ID;
      }

      return null;
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL_WORKS_MODULE_ID) {
        return null;
      }

      if (!fs.existsSync(worksRoot)) {
        return 'export const workFiles = [];';
      }

      const files = readWorksFiles(worksRoot).sort((a, b) =>
        a.localeCompare(b, 'ru', { numeric: true, sensitivity: 'base' }),
      );

      const imports = [];
      const entries = [];

      files.forEach((filePath, index) => {
        const importName = `workFile${index}`;
        const relativePath = path.relative(worksRoot, filePath).split(path.sep).join('/');
        const sourcePath = `/src/content/works/${relativePath}`;

        imports.push(`import ${importName} from ${JSON.stringify(`${sourcePath}?url`)};`);
        entries.push(`{ cleanPath: ${JSON.stringify(relativePath)}, url: ${importName} }`);
      });

      return `${imports.join('\n')}\n\nexport const workFiles = [\n  ${entries.join(',\n  ')}\n];`;
    },
  };
}

export default defineConfig({
  plugins: [react(), worksCatalogPlugin()],
});

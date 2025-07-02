import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      // mapeia cada compat do es-toolkit para o lodash equivalente
      'es-toolkit/compat/get':       'lodash/get.js',
      'es-toolkit/compat/last':      'lodash/last.js',
      'es-toolkit/compat/maxBy':     'lodash/maxBy.js',
      'es-toolkit/compat/minBy':     'lodash/minBy.js',
      'es-toolkit/compat/range':     'lodash/range.js',
      'es-toolkit/compat/sortBy':    'lodash/sortBy.js',
      'es-toolkit/compat/sumBy':     'lodash/sumBy.js',
      'es-toolkit/compat/omit':      'lodash/omit.js',
      'es-toolkit/compat/throttle':  'lodash/throttle.js',
      'es-toolkit/compat/isEqual':   'lodash/isEqual.js',
      'es-toolkit/compat/isPlainObject': 'lodash/isPlainObject.js',
      'es-toolkit/compat/uniqBy': 'lodash/uniqBy.js',
    }
  },

  optimizeDeps: {
    // força o Vite a pré-empacotar também esses módulos
    include: [
      'lodash/get.js',
      'lodash/last.js',
      'lodash/maxBy.js',
      'lodash/minBy.js',
      'lodash/range.js',
      'lodash/sortBy.js',
      'lodash/sumBy.js',
      'lodash/omit.js',
      'lodash/throttle.js',
      'lodash/isEqual.js',
      'lodash/isPlainObject.js'
    ]
  }
});
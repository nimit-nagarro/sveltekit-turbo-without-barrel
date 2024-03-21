import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

const allowedA11ywarnings = [
	'a11y-no-static-element-interactions',
	'a11y-click-events-have-key-events',
	'a11y-missing-content',
	'a11y-missing-attribute',
	'a11y-no-noninteractive-element-interactions',
	'a11y-label-has-associated-control',
	'a11y-invalid-attribute',
	'css-unused-selector'
];

export default defineConfig({
	build: {
		lib: {
			entry: './index.ts',
			name: 'common'
		}
	},
	plugins: [
		svelte({
			preprocess: preprocess({
				sourceMap: true
			}),
			onwarn: (warning, handler) => {
				if (allowedA11ywarnings.some((x) => warning.code.indexOf(x) > -1)) return;
				handler && handler(warning);
			},
			emitCss: true,
			compilerOptions: {
				customElement: true
			}
		})
	]
});

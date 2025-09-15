import tailwindcss from '@tailwindcss/vite';
import { DynamicPublicDirectory } from 'vite-multiple-assets';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { type PluginOption } from 'vite';

export default defineConfig({
	plugins: [
		DynamicPublicDirectory([
			'static/**',
			'../../shared/static/**',
		]) as PluginOption,
		tailwindcss(),
		sveltekit(),
	],
});

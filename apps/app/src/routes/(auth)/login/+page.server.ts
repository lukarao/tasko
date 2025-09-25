import type { Actions } from './$types';

import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			console.error(error);
		} else {
			redirect(303, '/');
		}
	},
} satisfies Actions;

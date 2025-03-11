import { error, redirect } from "@sveltejs/kit"
import { PROTECTED_PASSWORD } from "$env/static/private" 

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData()
        const password = formData.get("password")

        if (password !== PROTECTED_PASSWORD) {
            throw error(401, "Incorrect password!")
        }

        cookies.set("auth_token", "authenticated", { path: "/", maxAge: 360000, httpOnly: true })

        throw redirect(303, "/")
    }
};

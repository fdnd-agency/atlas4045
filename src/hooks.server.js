export async function handle({ event, resolve }) {
	const sessionCookie = event.cookies.get("auth_token")

	// Allow access to the login page
	if (event.url.pathname.startsWith("/login")) {
			return resolve(event, {
        filterSerializedResponseHeaders: (key) => {
          return key.toLowerCase() === 'content-type';
        },
      })
	}

	// If not authenticated, redirect to login
	if (sessionCookie !== "authenticated") {
			return new Response("Redirecting...", { status: 303, headers: { location: "/login" } })
	}

	return resolve(event, {
		filterSerializedResponseHeaders: (key) => {
			return key.toLowerCase() === 'content-type';
		},
	})
}

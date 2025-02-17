export async function load({ cookies }) {
  const isAuthenticated = cookies.get("auth_token") === "authenticated"
  
  return { isAuthenticated }
}

// Disable caching so auth state updates immediately
export const prerender = false
export const trailingSlash = "always"
export const csr = true

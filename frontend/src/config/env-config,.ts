export const envConfig = () => ({
  text: import.meta.env.VITE_TEXT,
  apiUrl: import.meta.env.VITE_API_URL,
  sockerUrl: import.meta.env.VITE_SOCKET_URL
});

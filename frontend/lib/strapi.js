// lib/strapi.js
export async function getProjects() {
  const STRAPI_URL = 'http://127.0.0.1:1337';
  
  try {
    const res = await fetch(`${STRAPI_URL}/api/projects?populate=*`, {
      cache: 'no-store' // Biar datanya selalu fresh tiap di-refresh
    });
    
    if (!res.ok) {
      throw new Error('Gagal narik data dari Strapi');
    }
    
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error Strapi:", error);
    return [];
  }
}
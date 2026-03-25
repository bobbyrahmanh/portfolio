// components/ProjectCard.js
import Image from 'next/image';

export default function ProjectCard({ data, id }) {
  const STRAPI_URL = 'http://127.0.0.1:1337';
  
  // Ambil URL gambar dari Strapi
  const desktopImg = `${STRAPI_URL}${data.DesktopImage?.data?.attributes?.url}`;
  const mobileImg = `${STRAPI_URL}${data.MobileImage?.data?.attributes?.url}`;

  return (
    <div className="bg-[#2D1642] border border-[#4B3066] rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-bold text-white text-center mb-6">{data.Title}</h3>
      
      {/* Container Gambar Mockup */}
      <div className="flex items-end justify-center gap-4 mb-8">
        <div className="relative w-[65%] aspect-video bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-700">
           {data.DesktopImage?.data && <Image src={desktopImg} alt="Desktop" fill className="object-cover" />}
        </div>
        <div className="relative w-[20%] aspect-[9/18] bg-black rounded-2xl overflow-hidden border-2 border-black -ml-8 mb-[-10px] z-10">
           {data.MobileImage?.data && <Image src={mobileImg} alt="Mobile" fill className="object-cover" />}
        </div>
      </div>

      <div className="text-center mb-4">
        <a href={data.LiveUrl} className="text-blue-400 hover:underline">
          {data.LiveUrl?.includes('github.com') ? 'View Code' : 'Live Website'}
        </a>
      </div>

      <p className="text-[#CBB5E0] text-sm line-clamp-3 mb-6">{data.Description}</p>

      <div className="pt-4 border-t border-[#4B3066] text-xs text-[#9F85B9] flex justify-between">
        <span>Stack: {data.TechStack}</span>
        <span>{data.Year}</span>
      </div>
    </div>
  );
}
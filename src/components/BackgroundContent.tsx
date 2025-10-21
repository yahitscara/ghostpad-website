export default function BackgroundContent() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient placeholder - user can add optimized image later */}
      <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200" />

      {/* When ready, uncomment and add optimized image: */}
      {/* <img
        src="/ghostpad-website/trialbgpicture2.png"
        alt="background"
        className="w-full h-full object-cover"
      /> */}
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col lg:items-start text-center md:text-left">
        <p className="text-2xl font-bold mb-10">Page not found</p>
      </div>
    </div>
  );
}

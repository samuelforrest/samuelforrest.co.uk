import Link from "next/link";
import Image from "next/image";
import { formatDate, getBlogPosts } from "src/app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-items-center sm:justify-items-stretch">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            href={`/blog/${post.slug}`}
          >
            {post.metadata.image && (
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="flex flex-col p-4 flex-1">
              <h2 className="font-semibold text-lg mb-2 text-neutral-900 dark:text-neutral-100 line-clamp-2">
                {post.metadata.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2 flex-1">
                {post.metadata.summary}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

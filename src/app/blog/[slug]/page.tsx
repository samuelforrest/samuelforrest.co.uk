import { notFound } from "next/navigation";
import Image from "next/image";
import { CustomMDX } from "src/components/mdx";
import { formatDate, getBlogPosts } from "../utils";
import { baseUrl } from "src/app/sitemap";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${baseUrl}/blog/${post.slug}`,
              },
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              ...(post.metadata.image && {
                image: {
                  "@type": "ImageObject",
                  url: post.metadata.image,
                  width: 1200,
                  height: 630,
                },
              }),
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "Samuel Forrest",
                url: `${baseUrl}`,
                sameAs: [
                  "https://github.com/samuelforrest",
                  "https://www.linkedin.com/in/samueljforrest/",
                  "https://www.youtube.com/@samuelforrest",
                ],
              },
              publisher: {
                "@type": "Person",
                name: "Samuel Forrest",
                url: `${baseUrl}`,
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${baseUrl}`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${baseUrl}/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.metadata.title,
                },
              ],
            },
          ]),
        }}
      />
      <a id="top"></a>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      {post.metadata.image && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <article className="prose prose-invert prose-quoteless prose-neutral">
        <CustomMDX source={post.content} />
      </article>
      <br />
      <br />
      <a className="underline underline-offset-3 font-medium" href="#top">
        Back to top
      </a>
    </section>
  );
}

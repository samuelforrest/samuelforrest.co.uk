import { notFound } from "next/navigation";
import { CustomMDX } from "src/components/mdx";
import { formatDate, getProjects } from "../utils";
import Image from "next/image";
import { baseUrl } from "src/app/sitemap";

export async function generateStaticParams() {
  let projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project = getProjects().find((project) => project.slug === slug);
  if (!project) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project = getProjects().find((project) => project.slug === slug);

  if (!project) {
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
              "@type": "CreativeWork",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${baseUrl}/projects/${project.slug}`,
              },
              headline: project.metadata.title,
              datePublished: project.metadata.publishedAt,
              dateModified: project.metadata.publishedAt,
              description: project.metadata.summary,
              image: {
                "@type": "ImageObject",
                url: project.metadata.image
                  ? project.metadata.image
                  : `${baseUrl}/og?title=${encodeURIComponent(project.metadata.title)}`,
                width: 1200,
                height: 630,
              },
              url: `${baseUrl}/projects/${project.slug}`,
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
                  name: "Projects",
                  item: `${baseUrl}/projects`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: project.metadata.title,
                },
              ],
            },
          ]),
        }}
      />
      <a id="top"></a>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {project.metadata.title}
      </h1>
      <div className="flex mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-400">
          {formatDate(project.metadata.publishedAt)}
        </p>
      </div>
      {project.metadata.image && (
        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.metadata.image}
            alt={project.metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <article className="prose prose-invert prose-quoteless prose-neutral">
        <CustomMDX source={project.content} />
      </article>
      <br />
      <br />
      <a className="underline underline-offset-3 font-medium" href="#top">
        Back to top
      </a>
    </section>
  );
}

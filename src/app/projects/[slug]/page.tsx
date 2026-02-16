import { notFound } from "next/navigation";
import { CustomMDX } from "src/components/mdx";
import { formatDate, getProjects } from "../utils";
import Image from "next/image";

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
    : `https://samuelforrest.co.uk/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://samuelforrest.co.uk/projects/${project.slug}`,
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `https://samuelforrest.co.uk${project.metadata.image}`
              : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `https://samuelforrest.co.uk/projects/${project.slug}`,
            author: {
              "@type": "Person",
              name: "Samuel Forrest",
            },
          }),
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

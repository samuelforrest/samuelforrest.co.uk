import { baseUrl } from "../sitemap";
import { CustomMDX } from "src/components/mdx";
import { readFileSync } from "fs";
import { join } from "path";

export const metadata = {
  title: "Documents | Samuel Forrest",
  description: "Samuel Forrest's certificates, licences and qualifications.",
  alternates: {
    canonical: "/documents",
  },
  openGraph: {
    title: "Documents | Samuel Forrest",
    description: "Samuel Forrest's certificates, licences and qualifications.",
    url: `${baseUrl}/documents`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documents | Samuel Forrest",
    description: "Samuel Forrest's certificates, licences and qualifications.",
  },
};

function getDocumentsContent() {
  const filePath = join(
    process.cwd(),
    "src",
    "app",
    "documents",
    "documents.mdx",
  );
  const content = readFileSync(filePath, "utf8");
  return content;
}

export default function Page() {
  const content = getDocumentsContent();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Documents
      </h1>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}

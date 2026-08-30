import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LabDetail } from "@/app/components/case-study-detail";
import { labs } from "@/app/data/portfolio";

type LabPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return labs.map((lab) => ({
    slug: lab.slug,
  }));
}

export async function generateMetadata({
  params,
}: LabPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lab = labs.find((item) => item.slug === slug);

  if (!lab) {
    return {
      title: "Lab Not Found | JM Security",
    };
  }

  return {
    title: `${lab.title} | JM Security`,
    description: lab.objective,
  };
}

export default async function LabPage({ params }: LabPageProps) {
  const { slug } = await params;
  const lab = labs.find((item) => item.slug === slug);

  if (!lab) {
    notFound();
  }

  return <LabDetail item={lab} />;
}

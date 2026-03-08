import { notFound } from "next/navigation";
import { team } from "@services/team";
import TeamDetail from "@components/nosotros/TeamDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return team.map((person) => ({ slug: person.slug }));
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const person = team.find((p) => p.slug === slug);

  if (!person) {
    notFound();
  }

  return <TeamDetail person={person} />;
}

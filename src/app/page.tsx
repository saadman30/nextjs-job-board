import JobFilterSidebar from "@/components/JobFilterSidebar";
import H1 from "@/components/ui/h1";
import JobResults from "@/components/JobResults";
import { PageProps } from "../../.next/types/app/layout";
import { JobFilterValues } from "@/lib/validation";

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? `remote developer jobs`
        : "All developer jobs";

  const titleSuffix = location? `in ${location}` : ""

  return `${titlePrefix}${titleSuffix}`;
}

export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar filterValues={filterValues} />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
}

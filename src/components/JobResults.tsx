import prisma from "@/lib/prisma";
import JobListItem from "./JobListItem";

export default async function JobResults() {
    const jobs = await prisma.job.findMany({
        where: { approved: true },
        orderBy: { createdAt: "desc" },
      });
  return (
    <div className="grow space-y-4">
      {jobs.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}
    </div>
  );
}

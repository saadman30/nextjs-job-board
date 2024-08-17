import { Job } from "@prisma/client";
import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import Image from "next/image";
import { Briefcase, Globe2, MapPin } from "lucide-react";

interface JobListItemProps {
  job: Job;
}

export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) {
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt=""
        width={100}
        height={100}
        className="rounded-lg self-center"
      />
      <div className="flex-groiw space-y-3">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <h2 className="text-muted-foreground">{companyName}</h2>
          <div className="text-muted-foreground">
            <p className="flex items-center gap-1.5 sm:hidden">
              <Briefcase size={16} className="shrink-0"/>
              {type}
            </p>
            <p className="flex items-center gap-1.5 sm:hidden">
              <MapPin size={16} className="shrink-0"/>
              {locationType}
            </p>
            <p className="flex items-center gap-1.5 sm:hidden">
              <Globe2 size={16} className="shrink-0"/>
              {location || "Worldwide"}
            </p>
            <p className="flex items-center gap-1.5 sm:hidden">
              <Briefcase size={16} className="shrink-0"/>
              {type}
            </p>
            <p className="flex items-center gap-1.5 sm:hidden">
              <Briefcase size={16} className="shrink-0"/>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

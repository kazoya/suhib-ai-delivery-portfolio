import { ProjectsIndex } from "@/components/projects/locale-projects";
import { projectsMeta } from "@/lib/locale-meta";

export const metadata = projectsMeta("en");

export default function Page() {
  return <ProjectsIndex locale="en" />;
}

"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./timeline_element";
import WORK_EXPERIENCES from "@/constants/work_experiences";
import SectionTitle from "@/components/section_title";

const ExperienceTimeline = () => {
  return (
    <VerticalTimeline lineColor="" animate>
      {WORK_EXPERIENCES.map((experience) => {
        return (
          <TimelineElement
            key={experience.company}
            workExperience={experience}
          />
        );
      })}
    </VerticalTimeline>
  );
};

const ExperienceSection = () => {
  return (
    <section className="flex flex-col ml-[5%] mr-[5%] items-center gap-5">
      <SectionTitle title="Experience" />
      <ExperienceTimeline />
    </section>
  );
};

export default ExperienceSection;

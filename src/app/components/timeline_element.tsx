import AppColor from "@/themes/app_color";
import WorkExperience from "@/types/work_experience";
import { Chip, Spacer } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkLogo = (props: { image: StaticImageData; company: string }) => {
  return (
    <Image src={props.image} alt={props.company} className="rounded-full" />
  );
};

const TimelineElement = (props: { workExperience: WorkExperience }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        className="vertical-timeline-element"
        contentStyle={{ background: AppColor.blue1, color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={props.workExperience.date}
        iconStyle={{ background: AppColor.blue1, color: "#fff" }}
        icon={
          <WorkLogo
            image={props.workExperience.image}
            company={props.workExperience.company}
          />
        }
      >
        <h3 className="font-bold text-xl lg:text-2xl">
          {props.workExperience.position}
        </h3>
        <h4 className="font-medium text-lg lg:text-xl">
          {props.workExperience.company}
        </h4>

        <Spacer y={4} />

        <div className="flex flex-wrap gap-2">
          {props.workExperience.keywords.map((keyword) => {
            return (
              <Chip
                key={`${props.workExperience.company}-${keyword}`}
                className="bg-white"
              >
                {keyword}
              </Chip>
            );
          })}
        </div>
      </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;

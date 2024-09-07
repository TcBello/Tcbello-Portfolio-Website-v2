import SectionTitle from "@/components/section_title";
import SKILLS from "@/constants/skills";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";

const SkillItem = (props: { name: string; image: any }) => {
  return (
    <Card
      shadow="none"
      className="h-[200px] w-[200px] bg-app-color-gray-1 hover:shadow-skillOnHover"
    >
      <CardBody className="flex flex-col items-center justify-around">
        <Image src={props.image} alt={props.name} className="size-[70px]" />
        <h1 className="font-medium text-2xl lg:text-3xl text-white">
          {props.name}
        </h1>
      </CardBody>
    </Card>
  );
};

const SkillSection = () => {
  return (
    <section className="flex flex-col ml-[5%] mr-[5%] items-center gap-14">
      <SectionTitle title="My Skills" />
      <div className="flex flex-wrap gap-4 justify-center">
        {SKILLS.map((skill) => {
          return (
            <SkillItem name={skill.name} image={skill.image} key={skill.name} />
          );
        })}
      </div>
    </section>
  );
};

export default SkillSection;

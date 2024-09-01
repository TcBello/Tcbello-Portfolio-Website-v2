"use client";

import Portfolio from "@/types/portoflio";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import MagicNeonGradientCard from "./magic_neon_gradient_card";
import AppstoreButton from "./appstore_button";
import GithubButton from "./github_button";
import PlaystoreButton from "./playstore_button";
import WebButton from "./web_button";

const MobilePortfolioCard = (props: {
  portfolio: Portfolio;
  index: number;
}) => {
  return (
    <MagicNeonGradientCard
      className="w-[90%] ml-auto mr-auto h-auto relative"
      neonColors={
        props.index % 2 == 0
          ? {
              firstColor: "#ff00aa",
              secondColor: "#00FFF1",
            }
          : {
              firstColor: "#00FFF1",
              secondColor: "#ff00aa",
            }
      }
    >
      <Image
        src={props.portfolio.image}
        alt={props.portfolio.name}
        className="absolute left-1/2 right-1/2 -translate-x-1/2 top-1 md:hidden w-[300px] h-auto"
      />

      <div className="flex flex-col items-center md:flex-row max-sm:mt-[37rem]">
        <Image
          src={props.portfolio.image}
          alt={props.portfolio.name}
          className="absolute left-1 top-1 max-sm:hidden w-[200px] h-auto"
        />

        <div className="flex flex-col items-center md:items-start gap-3 md:ml-[43%] md:max-w-[60%] md:h-[370px]">
          <h1 className="text-3xl font-bold font-aleo mt-4 md:mt-0">
            {props.portfolio.name}
          </h1>

          <p>{props.portfolio.description}</p>

          <div className="flex flex-wrap gap-2 mt-2 mb-4 md:mb-0">
            {props.portfolio.technologies.map((technology) => {
              return (
                <Chip key={technology} color="primary">
                  {technology}
                </Chip>
              );
            })}
          </div>

          <div className="flex flex-row mt-auto ml-auto gap-4">
            <GithubButton url={props.portfolio.githubLink} />
            <WebButton url={props.portfolio.visitLink} />
            <PlaystoreButton url={props.portfolio.playstoreLink} />
            <AppstoreButton url={props.portfolio.appstoreLink} />
          </div>
        </div>
      </div>
    </MagicNeonGradientCard>
  );
};

export default MobilePortfolioCard;

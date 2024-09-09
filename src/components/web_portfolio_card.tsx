"use client";

import Portfolio from "@/types/portoflio";
import { Chip } from "@nextui-org/chip";
import AppstoreButton from "./appstore_button";
import GithubButton from "./github_button";
import PlaystoreButton from "./playstore_button";
import WebButton from "./web_button";
import Image from "next/image";
import MagicNeonGradientCard from "./magic_neon_gradient_card";

const WebPortfolioCard = (props: { portfolio: Portfolio; index: number }) => {
  return (
    <MagicNeonGradientCard
      className="max-w-96 relative"
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
        className="w-[98%] rounded-xl absolute left-1 right-1 top-1"
        width={400}
        height={350}
      />

      <div className="flex flex-col gap-3 mt-[62%]">
        <h1 className="text-3xl font-bold font-aleo">{props.portfolio.name}</h1>

        <p>{props.portfolio.description}</p>

        <div className="flex flex-wrap gap-2">
          {props.portfolio.technologies.map((technology) => {
            return (
              <Chip key={technology} color="primary">
                {technology}
              </Chip>
            );
          })}
        </div>

        <div className="flex flex-row justify-end gap-4 mt-auto relative">
          <GithubButton url={props.portfolio.githubLink!} />
          <WebButton url={props.portfolio.visitLink!} />
          <PlaystoreButton url={props.portfolio.playstoreLink} />
          <AppstoreButton url={props.portfolio.appstoreLink} />
        </div>
      </div>
    </MagicNeonGradientCard>
  );
};

export default WebPortfolioCard;

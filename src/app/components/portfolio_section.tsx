"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import Image from "next/image";
import { CiMobile3 } from "react-icons/ci";
import webIcon from "@/assets/images/web.svg";
import PortfolioTab from "@/enums/portfolio_tab";
import { MOBILE_PORTFOLIO, WEB_PORTFOLIO } from "@/constants/portfolio";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import SectionTitle from "@/components/section_title";
import MobilePortfolioCard from "@/components/mobile_portfolio_card";
import WebPortfolioCard from "@/components/web_portfolio_card";

const WebIcon = () => {
  return <Image src={webIcon} alt={"Web"} className="size-6" />;
};

const tabs = [
  {
    id: PortfolioTab.mobile,
    icon: <CiMobile3 className="size-6 text-white" />,
    label: "Mobile",
    portfolios: MOBILE_PORTFOLIO,
  },
  {
    id: PortfolioTab.web,
    icon: <WebIcon />,
    label: "Web",
    portfolios: WEB_PORTFOLIO,
  },
];

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col ml-[5%] mr-[5%] items-center gap-5"
    >
      <SectionTitle title="Portfolio" />
      <Tabs
        aria-label="Options"
        color="primary"
        variant="bordered"
        size="lg"
        defaultSelectedKey={PortfolioTab.mobile}
        items={tabs}
      >
        {(tab) => (
          <Tab
            key={tab.id}
            title={
              <div className="flex items-center space-x-2">
                {tab.icon}
                <span className="text-3xl text-white font-medium">
                  {tab.label}
                </span>
              </div>
            }
          >
            <div
              className={`grid grid-cols-1 ${
                tab.id == PortfolioTab.mobile ? "xl:grid-cols-2" : null
              } gap-6`}
            >
              {tab.id == PortfolioTab.mobile
                ? tab.portfolios.slice(0, 4).map((portfolio, index) => {
                    return (
                      <MobilePortfolioCard
                        key={portfolio.name}
                        portfolio={portfolio}
                        index={index}
                      />
                    );
                  })
                : tab.portfolios.slice(0, 4).map((portfolio, index) => {
                    return (
                      <WebPortfolioCard
                        key={portfolio.name}
                        portfolio={portfolio}
                        index={index}
                      />
                    );
                  })}
            </div>

            <div
              className={`w-full flex flex-row justify-center p-10 ${
                tab.portfolios.length < 5 ? "hidden" : null
              }`}
            >
              <Button className="text-xl text-white font-medium bg-app-color-blue-1 rounded-md">
                View More
              </Button>
            </div>
          </Tab>
        )}
      </Tabs>
    </section>
  );
};

export default PortfolioSection;

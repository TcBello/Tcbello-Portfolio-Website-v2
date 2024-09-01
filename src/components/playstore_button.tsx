"use client";

import { openNewTab } from "@/utils/open_new_tab";
import { Button } from "@nextui-org/button";
import playstoreIcon from "@/assets/images/playstore.svg";
import Image from "next/image";

const PlaystoreButton = (props: { url: string | undefined }) => {
  function handleClick() {
    if (props.url != null) {
      openNewTab(props.url);
    }
  }

  return (
    <Button
      className={`bg-white rounded-full ${props.url != null ? null : "hidden"}`}
      isIconOnly
      onClick={handleClick}
    >
      <Image src={playstoreIcon} alt={"Playstore"} className="size-6" />
    </Button>
  );
};

export default PlaystoreButton;

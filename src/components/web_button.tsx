"use client";

import { openNewTab } from "@/utils/open_new_tab";
import { Button } from "@nextui-org/button";
import { BiLinkExternal } from "react-icons/bi";

const WebButton = (props: { url: string | undefined }) => {
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
      <BiLinkExternal className="text-black size-6" />
    </Button>
  );
};

export default WebButton;

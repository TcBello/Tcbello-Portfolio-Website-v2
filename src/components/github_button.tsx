"use client";

import { openNewTab } from "@/utils/open_new_tab";
import { Button } from "@nextui-org/button";
import { FiGithub } from "react-icons/fi";

const GithubButton = (props: { url: string | undefined }) => {
  function handleClick() {
    if (props.url != null) {
      openNewTab(props.url);
    }
  }

  return (
    <Button
      className={`bg-black rounded-full ${props.url != null ? null : "hidden"}`}
      isIconOnly
      onClick={handleClick}
    >
      <FiGithub className="text-white size-6" />
    </Button>
  );
};

export default GithubButton;

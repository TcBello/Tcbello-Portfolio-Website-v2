"use client";

import { Button } from "@nextui-org/button";
import { RESUME_LINK } from "@/constants/strings";
import { openNewTab } from "@/utils/open_new_tab";

const ResumeButton = () => {
  function handleViewResume() {
    openNewTab(RESUME_LINK);
  }

  return (
    <Button
      className="text-xl lg:text-2xl font-bold hover:text-white border-5 rounded-lg h-20"
      variant="ghost"
      color="primary"
      onClick={handleViewResume}
    >
      View Resume
    </Button>
  );
};

export default ResumeButton;

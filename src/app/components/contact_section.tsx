"use client";

import React from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/button";
import { IoIosSend } from "react-icons/io";
import SOCIALS from "@/constants/socials";
import useContactController from "../controllers/use_contact_controller";
import SectionTitle from "@/components/section_title";

const ContactDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row items-center space-x-8">
      <div className="h-2 w-full flex-1 bg-app-color-blue-4 rounded-full" />
      {children}
      <div className="h-2 w-full flex-1 bg-app-color-blue-4 rounded-full" />
    </div>
  );
};

const ContactSection = () => {
  const {
    fullName,
    email,
    message,
    isSending,
    fullNameErrorMessage,
    emailErrorMessage,
    messageErrorMessage,
    openLink,
    onChangeFullName,
    onChangeEmail,
    onChangeMessage,
    send,
  } = useContactController();

  return (
    <section id="contact" className="flex flex-col mr-[5%] ml-[5%] text-white">
      <ContactDivider>
        <SectionTitle title={"Get in Touch"} />
      </ContactDivider>

      <Spacer y={8} />

      <div className="w-[90%] md:w-1/2 h-auto self-center flex flex-col justify-center">
        <Input
          key={"Full Name"}
          value={fullName}
          label="Full Name"
          classNames={{
            label: "text-lg font-bold !text-white",
            input: [
              "placeholder:text-gray-500 placeholder:text-sm placeholder:md:text-base",
            ],
            inputWrapper: ["rounded-lg"],
          }}
          className="md:text-base"
          labelPlacement={"outside"}
          placeholder="Enter your full name"
          size="lg"
          onChange={onChangeFullName}
          isInvalid={fullNameErrorMessage != null}
          errorMessage={fullNameErrorMessage}
          color={fullNameErrorMessage != null ? "danger" : "default"}
        />

        <Spacer y={4} />

        <Input
          key={"Email"}
          value={email}
          label="Email"
          type="email"
          classNames={{
            label: "text-lg font-bold !text-white",
            input: [
              "placeholder:text-gray-500 placeholder:text-sm placeholder:md:text-base",
            ],
            inputWrapper: ["rounded-lg"],
          }}
          labelPlacement={"outside"}
          placeholder="Enter your email"
          size="lg"
          onChange={onChangeEmail}
          isInvalid={emailErrorMessage != null}
          errorMessage={emailErrorMessage}
          color={emailErrorMessage != null ? "danger" : "default"}
        />

        <Spacer y={4} />

        <Textarea
          key={"Message"}
          value={message}
          label="Message"
          labelPlacement="outside"
          placeholder="Enter your message here..."
          disableAutosize
          classNames={{
            label: "text-lg font-bold !text-white",
            input: [
              "placeholder:text-gray-500 placeholder:text-sm placeholder:md:text-base !min-h-32",
            ],
            inputWrapper: ["rounded-lg"],
          }}
          onChange={onChangeMessage}
          isInvalid={messageErrorMessage != null}
          errorMessage={messageErrorMessage}
          color={messageErrorMessage != null ? "danger" : "default"}
        />

        <Spacer y={8} />

        <Button
          color="primary"
          isLoading={isSending}
          className="self-center font-bold text-xl w-3/5 lg:w-2/5 h-12"
          startContent={isSending ? null : <IoIosSend className="size-6" />}
          onClick={() => (isSending ? null : send())}
        >
          {isSending ? null : "Send"}
        </Button>
      </div>

      <Spacer y={8} />

      <ContactDivider>
        <div className="flex flex-row gap-3 lg:gap-6">
          {SOCIALS.map((social) => {
            return (
              <Button
                key={social.name}
                color="primary"
                isIconOnly
                className="rounded-full"
                onClick={() => openLink(social.link)}
              >
                <social.icon className="size-6" />
              </Button>
            );
          })}
        </div>
      </ContactDivider>
    </section>
  );
};

export default ContactSection;

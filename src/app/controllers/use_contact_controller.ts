import { openNewTab } from "@/utils/open_new_tab";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { validateInput, validateEmail } from "@/utils/validators";

const useContactController = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setSending] = useState(false);
  const [fullNameErrorMessage, setFullNameErrorMessage] = useState<
    string | null
  >(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  );
  const [messageErrorMessage, setMessageErrorMessage] = useState<string | null>(
    null
  );

  function openLink(link: string): void {
    openNewTab(link);
  }

  function onChangeFullName(e: React.ChangeEvent<HTMLInputElement>): void {
    setFullName(e.target.value);
  }

  function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }

  function onChangeMessage(e: React.ChangeEvent<HTMLInputElement>): void {
    setMessage(e.target.value);
  }

  function clearInputs(): void {
    setFullName("");
    setEmail("");
    setMessage("");
    setFullNameErrorMessage(null);
    setEmailErrorMessage(null);
    setMessageErrorMessage(null);
  }

  function validateInputs(): boolean {
    const fullNameValidationMessage = validateInput(fullName);
    const emailValidationMessage = validateEmail(email);
    const messageValidationMessage = validateInput(message);

    setFullNameErrorMessage(fullNameValidationMessage);
    setEmailErrorMessage(emailValidationMessage);
    setMessageErrorMessage(messageValidationMessage);

    return (
      fullNameValidationMessage == null &&
      emailValidationMessage == null &&
      messageValidationMessage == null
    );
  }

  function send() {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY as string;
    const serviceId = "service_ynva5lf";
    const templateId = "template_hms9pts";

    const templateParams = {
      full_name: fullName,
      email: email,
      message: message,
    };

    if (validateInputs()) {
      setSending(true);

      emailjs
        .send(serviceId, templateId, templateParams, {
          publicKey: publicKey,
        })
        .then(() => {
          setSending(false);
          toast.success("Email sent!");
          clearInputs();
        })
        .catch((error) => {
          setSending(false);
          toast.error("Error has occured!", { autoClose: 3000 });
          console.error((error as Error).message);
        });
    } else {
      toast.warning("Fill up the missing fields!", { autoClose: 3000 });
    }
  }

  return {
    fullName,
    email,
    message,
    isSending,
    fullNameErrorMessage,
    emailErrorMessage,
    messageErrorMessage,
    openLink,
    onChangeEmail,
    onChangeFullName,
    onChangeMessage,
    send,
  };
};

export default useContactController;

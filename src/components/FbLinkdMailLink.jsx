import React from "react";
import fb from "@/assets/fb.svg?url";
import linkedin from "@/assets/linkedin.svg?url";
import mail from "@/assets/mail1.svg?url";
import link from "@/assets/link-2.svg?url";
import Image from "next/image";
const FbLinkdMailLink = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src={fb} alt="fb" />
      <Image src={linkedin} alt="linkedin" />
      <Image src={mail} alt="mail" />
      <Image src={link} alt="link" />
    </div>
  );
};

export default FbLinkdMailLink;

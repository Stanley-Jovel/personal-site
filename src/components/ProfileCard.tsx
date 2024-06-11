import Image from "next/image";
import { Envelope, GithubBlack, LinkedInBlack } from "@/icons";

export const ProfileCard = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-between">
      <Image
        src="/picture.png"
        alt="Stanley Jovel"
        width={150}
        height={150}
        className="rounded-full"
      />
    </div>
    <h1 className="text-4xl font-bold pt-10 text-gray-900">Stanley Jovel</h1>
    <p className="text-lg text-gray-900 text-center">
      Software and AI Engineer based in Seattle
    </p>
    <a
      href="/resume_stanley_jovel.pdf"
      target="_blank"
      className="text-blue-500 pt-2"
    >
      Resume
    </a>
    <div className="flex pt-6">
      <a
        href="https://www.linkedin.com/in/luisjovel/"
        target="_blank"
        rel="noreferrer"
        className="pr-4"
      >
        <LinkedInBlack width={30} height={30} />
      </a>
      <a
        href="https://github.com/Stanley-Jovel"
        target="_blank"
        rel="noreferrer"
        className="pr-4"
      >
        <GithubBlack width={30} height={30} />
      </a>
      <a href="mailto:contact@stanleyjovel.com">
        <Envelope width={30} height={30} />
      </a>
    </div>
  </div>
);

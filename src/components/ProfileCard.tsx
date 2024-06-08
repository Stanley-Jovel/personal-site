import Image from "next/image";
import { GithubBlack, LinkedInBlack } from "@/icons";

export const ProfileCard = () => (
  <>
    <div className="flex items-center justify-between">
      <Image
        src="/picture.png"
        alt="Stanley Jovel"
        width={150}
        height={150}
        className="rounded-full"
      />
    </div>
    <h1 className="text-4xl font-bold pt-10">Stanley Jovel</h1>
    <p className="text-lg">Software and AI Engineer based in Seattle</p>

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
      >
        <GithubBlack width={30} height={30} />
      </a>
    </div>
  </>
);
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex justify-center	py-24">
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
          <h1 className="text-4xl font-bold">Stanley Jovel</h1>
          <p className="text-lg">Software Engineer</p>
        </div>
      </div>
    </main>
  );
}

import { ArticleList, ProfileCard } from "@/components";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-3xl items-center font-mono text-sm lg:flex justify-center	py-24 border-x bg-white">
        <div className="flex flex-col items-center">
          <ProfileCard />
          <ArticleList articles={articles} />
        </div>
      </div>
    </main>
  );
}

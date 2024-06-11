import { ArrowUpRight } from "@/icons";
import { Article } from "@/types/article";

type props = {
  articles: Article[];
};

export const ArticleList = ({ articles }: props) => {
  return (
    <section className="py-5 sm:w-10/12 sm:px-0 px-4">
      <h2 className="font-bold text-gray-900">Articles/Projects:</h2>
      <ul role="list" className="divide-y divide-gray-100">
        {articles.map((article) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="group flex justify-between gap-x-6 py-3 hover:shadow-sm hover:bg-gray-50 transition-colors duration-200 ease-in-out px-3 hover:cursor-pointer">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="mt-1 truncate text-2xs leading-5 text-gray-500">
                    {article.domain}
                  </p>
                  <p className="text-xs font-semibold leading-6 text-gray-900">
                    {article.name}
                  </p>
                  <p className="text-xs leading-6 text-gray-900">
                    {article.description}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <ArrowUpRight
                    width={15}
                    height={15}
                    className="group-hover:rotate-45 transition duration-200 ease-in-out"
                  />
                </p>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

import NewsItem from "./NewsItem";

import type { NewsItemInterface } from "../services/interfaces/NewsItemInterface";

type NewsProps = {
  title: string;
  newsList: NewsItemInterface[];
  handleDelete: (item: NewsItemInterface) => void;
};

const News = ({ title, newsList, handleDelete }: NewsProps) => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl shadow p-6 w-full">
      <h2 className="text-2xl font-extrabold text-slate-800 mb-4 text-center">{title}</h2>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {newsList.map((newsItem, index) => (
          <li key={index} className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
            <NewsItem item={newsItem} />
            <button
              onClick={() => handleDelete(newsItem)}
              className="self-end min-w-24 px-3 py-2 rounded-lg text-white bg-gradient-to-r from-rose-400 to-amber-400 hover:from-rose-500 hover:to-amber-500 transition shadow"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export {News};
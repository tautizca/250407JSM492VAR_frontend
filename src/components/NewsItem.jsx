const NewsItem = ({ item }) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 rounded-xl shadow p-4 border border-slate-200 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-slate-800 mb-1">{item.title}</h3>
      <p className="text-slate-600">{item.description}</p>
    </div>
  );
}

export default NewsItem;

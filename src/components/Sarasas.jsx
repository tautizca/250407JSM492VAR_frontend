const Sarasas = (props) => {
     const duomenys = props.duomenys || [];
     const rodytiFoto = props.rodytiFoto || false;
     const salinimoEventas = props.salinimoEventas || (() => {});

    if (!duomenys.length) return null;

    return (
      <div className="w-full overflow-x-auto my-6 bg-white rounded-xl shadow border border-slate-200">
        <table className="min-w-[640px] w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-800">
              <th className="px-4 py-3 text-left text-sm font-semibold">Pavadinimas</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Aprašymas</th>
              {rodytiFoto && <th className="px-4 py-3 text-left text-sm font-semibold">Nuotrauka</th>}
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {duomenys.map((item, idx) => (
              <tr key={item.title + idx} className="odd:bg-white even:bg-slate-50 border-b border-slate-200">
                <td className="px-4 py-3 align-middle">{item.title}</td>
                <td className="px-4 py-3 align-middle">{item.descripcion}</td>
                {rodytiFoto && (
                  <td className="px-4 py-3 align-middle">
                    {item.img && item.title ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-10 object-cover rounded shadow-sm"
                      />
                    ) : null}
                  </td>
                )}
                <td className="px-4 py-3 align-middle text-right">
                  <button
                    onClick={() => salinimoEventas(item)}
                    className="px-3 py-2 rounded-lg text-white bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-500 hover:to-cyan-500 transition shadow"
                  >
                    Šalinti
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Sarasas;
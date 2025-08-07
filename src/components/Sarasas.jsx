import './Sarasas.css';

const Sarasas = (props) => {
     const duomenys = props.duomenys || [];
     const rodytiFoto = props.rodytiFoto || false;
     const salinimoEventas = props.salinimoEventas || (() => {});

    if (!duomenys.length) return null;

    return (
      <div className="sarasas">
        <table className="sarasas-table">
          <thead>
            <tr>
              <th>Pavadinimas</th>
              <th>Aprašymas</th>
              {rodytiFoto && <th>Nuotrauka</th>}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {duomenys.map((item, idx) => (
              <tr key={item.title + idx}>
                <td>{item.title}</td>
                <td>{item.descripcion}</td>
                {rodytiFoto && <td>{item.img && item.title ? <img src={item.img} alt={item.title} /> : null}</td>}
                <td>
                  <button onClick={() => salinimoEventas(item)}>Šalinti</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Sarasas;
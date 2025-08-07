const Sarasas = (props) => {
     const duomenys = props.duomenys || [];
     const rodytiFoto = props.rodytiFoto || false;
     const salinimoEventas = props.salinimoEventas || (() => {});

    if (!duomenys.length) return;
    
    return (
    <div className="sarasas">
        {duomenys.map((item, idx) => (
          <div key={item.title + idx} className="sarasas-item">
            <h3>{item.title}</h3>
            <p>{item.descripcion}</p>
            {rodytiFoto && item.img && item.title &&
                <img src={item.img} alt={item.title} />
            }
            <button onClick={() => salinimoEventas(item)}>Šalinti</button>
          </div>
        ))}
    </div>
    );
}

export default Sarasas;
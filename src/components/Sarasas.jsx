const Sarasas = ({ duomenys, rodytiFoto = false }) => {
    return (
    <div className="sarasas">
        {duomenys.map((item, idx) => (
          <div key={item.title + idx} className="sarasas-item">
            <h3>{item.title}</h3>
            <p>{item.descripcion}</p>



            {rodytiFoto && item.img && item.title &&
                <img src={item.img} alt={item.title} />
            }


          </div>
        ))}
    </div>
    );
}

export default Sarasas;
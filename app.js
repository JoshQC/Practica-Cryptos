const obtenerDatos = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  mostrarDatos(data);
};

const mostrarDatos = (data) => {
  const html = `
    <table class="tabla">
      <thead>
        <tr >
          <th class="dato">#</th>
          <th class="dato">Moneda</th>
          <th class="dato">Precio</th>
        </tr>
      </thead>
      <tbody>
        ${obtenerFilas(data)}
      </tbody>
    </table>
    `;
  document.querySelector("#contenedor").innerHTML = html;
};

const obtenerFilas = (data) => {
  let html = "";

  data.map((moneda, i) => {
    let fila = `
    <tr >
        <td class="dato">${i + 1}</td>
        <td class="dato dato-flex">
            <img class="imagen-moneda" src="${
              moneda.image
            }" alt="Imagen de la moneda ${moneda.name}">
            <span >${moneda.name}</span>
            <span>${moneda.symbol}</span>
        </td>
        <td class="dato">${moneda.current_price}</td>
        
        </tr>
    `;

    html += fila;
  });

  return html;
};

obtenerDatos(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
);

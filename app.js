const contenedor = document.querySelector("#contenedor");
const creartabla = () => {
  let tabla = `<table class="tabla">
                    <thead>
                        <tr>
                            <th class="tabla">#</th>
                            <th class="tabla">Logo</th>
                            <th class="tabla">Moneda</th>
                            <th class="tabla">Símbolo</th>
                            <th class="tabla">Precio</th>
                            <th class="tabla">24h</th>
                            <th class="tabla">Volumen 24h</th>
                            <th class="tabla">Límite de mercado</th>
                        </tr>
                    </thead>
                    <tbody id="contenedorTbody"></tbody>
                </table>`;
  contenedor.innerHTML = tabla;
};
const obtenerDatosCriptomonedas = async () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const respuesta = await fetch(url);
  const criptomonedas = await respuesta.json();
  console.log(criptomonedas);
  creartabla();
  const contenedor = document.querySelector("#contenedorTbody");
  let contenidoTabla = "";
  criptomonedas.map((criptomoneda) => {
    contenidoTabla += `
                    <tr>
                        <td class="tabla">${criptomoneda.market_cap_rank}</td>
                        <td class="tabla"> <img class="logo" src="${
                          criptomoneda.image
                        }" alt="${criptomoneda.name}"> </td>
                        <td class="tabla">${criptomoneda.name}</td>
                        <td class="tabla">${criptomoneda.symbol.toUpperCase()}</td>
                        <td class="tabla">$${criptomoneda.current_price}</td>
                        <td class="tabla">${criptomoneda.price_change_percentage_24h.toFixed(
                          2
                        )}%</td>
                        <td class="tabla">$${criptomoneda.total_volume}</td>
                        <td class="tabla">$${criptomoneda.market_cap}</td>
                    </tr>`;
  });
  contenedor.innerHTML = contenidoTabla;
};
obtenerDatosCriptomonedas();

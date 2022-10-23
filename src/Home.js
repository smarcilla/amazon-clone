import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
          className="home__image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.static-zoutons.com%2Fimages%2Foriginals%2Fblog%2FAmazonBlackFriday202001_1593689240_1597949815.png&f=1&nofb=1" alt=""
        />

        <div className="home__row">
          <Product title='Cantimplora' price={14.40} image="https://www.laken.es/1625-thickbox_default/cantimplora-pluma-1-l.jpg" rating={5}/> 
          <Product title='Navaja' price={11.90} image="https://dcops.es/wp-content/uploads/2018/12/morpilot-navaja-y-linterna-ttica-set-cuchillo-supervivencia-navaja-caza-1.jpg" rating={4}/>
        </div>

        <div className="home__row">
          <Product title='Botiquín Primeros Auxilios' price={20} image="https://images-eu.ssl-images-amazon.com/images/I/51Yw0-hARWL.jpg" rating={4}/>
          <Product title='Kit de fuego' price={6.75} image="https://www.paratum.es/521-large_default/kit-de-fuego-web-tex.jpg" rating={5}/>
          <Product title='Hornillo grande para pastillas de combustible' price={14.95} image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kp6pDdL_GshCNdKPgpmrSAHaHa%26pid%3DApi&f=1" rating={4} />
        </div>


        <div className="home__row">
          <Product title='Café molido tueste natural' price={2.5} image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jsp.es%2Fwp-content%2Fuploads%2F2019%2F06%2Fw-natural.jpg&f=1&nofb=1" rating={5} />
        </div>
      </div>
   </div>
  );
}

export default Home;
import Card from "./components/card";
import "./index.css";
import { useState } from "react";
import listaDeItens from "./components/listaDeItens";
import Modal from "./components/modal";

function App() {
  const [descriptionModal, setDescription] = useState(false);

  const [itemInicial, setItemInicial] = useState();

  const pegaValor = (obj: any) => {
    setItemInicial(obj);
  };

  const close = () => {
    setDescription(false);
  };

  const abrir = () => {
    setDescription(!descriptionModal);
  };

  return (
    <>
      <main>
        <h1>ITENS</h1>
        <div className="cardContainer">
          {listaDeItens.map((item) => {
            return (
              <Card
                key={item.id}
                pegaValor={pegaValor}
                abrir={abrir}
                name={item.name}
                custo={item.custo}
                status={item.status}
                description={item.description}
                image={item.image}
                setDescription={setDescription}
              />
            );
          })}

          {descriptionModal && (
            <Modal itemInicial={itemInicial} close={close} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;

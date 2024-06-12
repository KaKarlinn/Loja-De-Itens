interface ModalProps {
  close: () => void;
  itemInicial: any;
}

function Modal({ close, itemInicial }: ModalProps) {
  console.log(itemInicial);
  return (
    <div className="backgroundModal" onClick={close}>
      <div className="divModalCentral" onClick={(e) => e.stopPropagation()}>
        <button className="buttonFechaModal" onClick={close}>
          X
        </button>
        <div className="divModal">
          <h1>{itemInicial.name}</h1>
          <div className="divImagem">
            <img src={itemInicial.image} alt="" />
          </div>

          <div className="divOuro">
            <img
              src="https://cdn-icons-png.flaticon.com/512/217/217853.png"
              alt=""
              className="ouro"
            />
            {itemInicial.custo}
          </div>
          <li>{itemInicial.status}</li>
          <li>{itemInicial.description}</li>
        </div>
      </div>
    </div>
  );
}

export default Modal;

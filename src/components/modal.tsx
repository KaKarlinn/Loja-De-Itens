interface ModalProps {
    close: () => void;
    itemInicial: any;
}

function Modal({close,itemInicial}: ModalProps) {
    console.log(itemInicial)
    return(
        <div className="backgroundModal">

        <div className="divModalCentral">
        <button className="buttonFechaModal" onClick={close} >X</button>
        <div className="divModal">

            <h1>{itemInicial.name}</h1>
            <div className="divImagem">

            <img src={itemInicial.image} alt="" />
            </div>
            <li>{itemInicial.custo}</li>
            <li>{itemInicial.status}</li>
            <li>{itemInicial.description}</li>
        </div>
        </div>
        </div>
    )

}

export default Modal
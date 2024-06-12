interface CardProps {
  name: string;
  custo: number;
  status: string;
  description: string;
  image?: string;
  setDescription: (data: boolean) => void;
  abrir: () => void;
  pegaValor: (obj: any) => void;
}

function Card({
  name,
  custo,
  status,
  description,
  image,
  abrir,
  pegaValor,
}: CardProps) {
  return (
    <div
      className="cardStyle"
      onClick={() => pegaValor({ name, custo, status, description, image })}
    >
      <h2>{name}</h2>
      <img src={image} alt="image.jpg" />
      <div className="divOuro">
        <img
          src="https://cdn-icons-png.flaticon.com/512/217/217853.png"
          alt=""
          className="ouro"
        />
        {custo}
      </div>
      <li>{status}</li>
      {description.length > 37 ? (
        <button className="button" onClick={abrir}>
          Mais Detalhes
        </button>
      ) : (
        description && <li>{description}</li>
      )}
    </div>
  );
}

export default Card;

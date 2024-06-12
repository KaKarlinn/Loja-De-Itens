interface CardProps {
    name: string;
    custo: number;
    status: string;
    description: string;
    image?: string;
    setDescription: (data:boolean) => void
    abrir: () => void;
    pegaValor: (obj: any) => void
}

function Card({name,custo,status,description,image,abrir,pegaValor} : CardProps){
    
    return (
        <div className="cardStyle" 
        onClick={()=> pegaValor({name,custo,status,description,image})}>
            <h2>{name}</h2> 
            <img src={image} alt="image.jpg" />
            <li>{custo}</li>
            <li>{status}</li>
           {description.length > 37 ? (<button className="button" onClick={abrir}
           >Mais Detalhes
           </button>) : (<li>{description}</li>)}
           
           
           
        </div>
    )
};

export default Card
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //lembrar que =>('card ') tem um espaço do lado do card

  return <div className={classes}>{props.children}</div>;
}

export default Card;
//o componente Card serve como um invólucro customizado pro componente Expenses e os componentes customizados do interior do invólucro só são aceitos
//utilizando a propriedade {props.children} recebendo todas as classes do css

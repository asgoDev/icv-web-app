import Card from '@/components/Card/Card'
import './card-container.css'

const generateCardList = (list) => {
  if (!list) return <h3>No hay nada que mostrar.</h3>
  const cardList = list.map((element, i) => (
    <Card key={i} installationData={element} />
  ))

  return cardList
}

const CardContainer = ({ objectList }) => {
  return <div className="card-container">{generateCardList(objectList)}</div>
}

export default CardContainer

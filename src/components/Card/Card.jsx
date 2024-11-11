import { Formatter } from '@/utils/formatter.js'
import './card.css'

const handleClick = ({ id, ci, name, lastName }) => {
  const message = [id, ci, name, lastName].join(' ')
  alert(message)
}

const Card = ({ installationData = {} }) => {
  const {
    name = 'name',
    lastName = 'lastName',
    ci = '12345678',
    date = '01/10/2024',
    status = 'pending',
  } = installationData

  return (
    <div
      className={`card card-status--${status}`}
      onClick={() => {
        handleClick(installationData)
      }}
    >
      <article className="card_content">
        <h3 className="card_title">{Formatter.toShortName(name, lastName)}</h3>
        <span className="card_ci">{Formatter.toCiFormat(ci)}</span>
        <span className="card_date">{date}</span>
      </article>
    </div>
  )
}

export default Card

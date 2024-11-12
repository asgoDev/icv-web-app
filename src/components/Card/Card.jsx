import { Link } from 'react-router-dom'
import { Formatter } from '@/utils/formatter.js'
import './card.css'

// const handleClick = ({ id, ci, name, lastName }) => {
//   const message = [id, ci, name, lastName].join(' ')
//   alert(message)
// }

const Card = ({ installationData = {} }) => {
  const {
    id,
    name = 'name',
    lastName = 'lastName',
    ci = '12345678',
    date = '01/10/2024',
    status = 'pending',
  } = installationData

  return (
    <article className={`card card-status--${status}`}>
      <Link to={`/instalaciones/${id}`}>
        <div className="card_content">
          <h3 className="card_title">
            {Formatter.toShortName(name, lastName)}
          </h3>
          <span className="card_ci">{Formatter.toCiFormat(ci)}</span>
          <span className="card_date">{date}</span>
        </div>
      </Link>
    </article>
  )
}

export default Card

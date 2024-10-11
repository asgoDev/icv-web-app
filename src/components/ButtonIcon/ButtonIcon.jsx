import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons'

function ButtonIcon({ icon }) {
  const iconDictionary = {
    letter: faEnvelope,
    map: faMap,
    qr: faQrcode,
    scan: faExpand,
    fix: faWrench,
    user: faUser,
    gear: faGear,
    trash: faTrash,
    camera: faCamera,
    globe: faGlobe,
    database: faDatabase,
    nap: faMicrochip,
    share: faShareNodes,
    dot: faLocationDot,
    findDot: faMagnifyingGlassLocation,
    location_dot: faMapLocationDot,
    code: faBarcode,
    objective: faLocationCrosshairs,
    compass: faCompass,
  }
  return <FontAwesomeIcon icon={iconDictionary[icon]} />
}

export default ButtonIcon

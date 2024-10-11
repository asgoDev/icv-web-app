export const getActualLocation = () => {

    const getNavCoords = (pos) => {
      let coordsString = null
        let {
          coords: { latitude, longitude },
        } = pos
        coordsString = `${latitude}, ${longitude}`
        return (coordsString)
      }

      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };


  if ('geolocation' in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((pos)=>{
        resolve(getNavCoords(pos))
      }, error => reject(error.message), options)
    })
  } else {
    console.error('el navegador no es compatible con geolocalizacion')
  }
}

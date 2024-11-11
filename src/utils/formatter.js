export class Formatter {
  static toCiFormat(id) {
    let CI = id
    if (typeof id == 'number') CI = CI.toString()
    return CI.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  static toShortName(name, lastName) {
    let nameToArray = name.split(' ')
    let lastNameToArray = lastName.split(' ')

    return [nameToArray[0], lastNameToArray[0]].join(' ')
  }
  // formatDateString (date, separator) {
  //   return
  // }
}

export default function toRomanNumerals(floor) {
  switch (floor) {
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'III'
    default:
      return ''
  }
}
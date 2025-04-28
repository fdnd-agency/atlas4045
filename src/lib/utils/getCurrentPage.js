export default function getCurrentPage(pageURL) {
  switch (pageURL) {
    case '/':
      return 'gedenkposters';
    case '/adressen/':
      return 'adressen';
    case '/gebeurtenissen/':
      return 'gebeurtenissen';
    default:
      return 'other';
  }
}
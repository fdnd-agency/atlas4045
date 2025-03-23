export default function getCurrentPage(pageURL) {
  switch (pageURL) {
    case '/':
      return 'gedenkposters';
    case '/adressen/':
      return 'adressen';
    case '/gebeurtenissen/':
      return 'gebeurtenissen';
    default:
      g(`'${pageURL}' is not a handled route`);
      return 'other';
  }
}
export default function getCurrentPage(pageURL) {
  switch (pageURL) {
    case '/':
      // console.log("gedenkposters");
      return 'gedenkposters';
    case '/adressen/':
      // console.log("adressen");
      return 'adressen';
    case '/gebeurtenissen/':
      // console.log("gebeurtenissen");
      return 'gebeurtenissen';
    default:
      console.log(`'${pageURL}' is not a handled route`);
      return 'other';
  }
}
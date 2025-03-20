export default function getCurrentPage(pageURL) {
  switch (pageURL) {
    case '/':
      // console.log("gedenkposters");
      return 'home';
    case '/adressen/':
      // console.log("adressen");
      return 'adressen';
    case '/gebeurtenissen/':
      // console.log("gebeurtenissen");
      return 'adressen';
    default:
      console.log(`'${pageURL}' is not a handled route`);
      return 'other';
  }
}
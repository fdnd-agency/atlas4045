export default function getCurrentPage(pageURL) {
  switch (pageURL) {
    case '/':
      console.log("home");
      return 'home';
    case '/posters/':
      console.log("overview");
      return 'overview';
    default:
      console.log("other");
      return 'other';
  }
}
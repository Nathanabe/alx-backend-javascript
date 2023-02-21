/**
 * Contains the miscellaneous route handlers.
 * @author Nathaniel Adehor <https://github.com/Nathanabe>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

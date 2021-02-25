const{Group} = require('../models')

class GroupController {

  static getGroup (req, res) {
    Group.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(err);
      })
  }
}

module.exports = GroupController;
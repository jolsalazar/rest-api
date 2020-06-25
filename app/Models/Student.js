'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
  static get hidden() {
    return ['created_at', 'updated_at'];
  }

  course () {
    return this.belongsTo('App/Models/Course')
  }
}

module.exports = Student

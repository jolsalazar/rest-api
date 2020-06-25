'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Course extends Model {
  /*static get hidden() {
    return ['created_at', 'updated_at'];
  }*/

  students () {
    return this.hasMany('App/Models/Student')//.orderBy('created_at', 'desc')
  }
}

module.exports = Course

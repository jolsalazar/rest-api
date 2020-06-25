'use strict'

class StoreBook {
  get rules () {
    return {
      title: 'required|unique:books,title',
      isbn: 'required|unique:books,isbn',
      author: 'required'
    }
  }

  get messages () {
    return {
      'title.required': 'El campo título  es requerido',
      'title.unique': 'El título ya existe!',
      'isbn.required': 'El campo isbn es requerido',
      'isbn.unique': 'El isbn ya existe!',
      'author.required': 'El author es requerido'
    }
  }
}

module.exports = StoreBook

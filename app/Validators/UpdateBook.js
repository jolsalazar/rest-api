'use strict'

class UpdateBook {
  get rules () {
    const bookId = this.ctx.params.id;
    return {
      title: `required|unique:books,title,id,${bookId}`,
      isbn: `required|unique:books,isbn,id,${bookId}`,
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

module.exports = UpdateBook

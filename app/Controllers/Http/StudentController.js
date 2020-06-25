'use strict'

const Student = use('App/Models/Student');

class StudentController {
  async index ({response}) {
    let students = await Student.all();
    return response.json(students);
  }

  async store ({ request, response }) {
    const studentInfo = request.only(['course_id', 'fullname']);
    const student = new Student;
    student.course_id = studentInfo.course_id;
    student.fullname = studentInfo.fullname;
    await student.save();
    return response.status(201).json(student);
  }

  async show ({response, params}) {
    const student = await Student.find(params.id);

    if ( ! student) {
      return response.status(404).json({data: "Recurso no encontrado"});
    }

    return response.json(student);
  }

  async update ({request, response, params}) {
    const studentInfo = request.only(['course_id', 'fullname']);
    const student = await Student.find(params.id);

    if ( ! student) {
      return response.status(404).json({data: "Recurso no encontrado"});
    }

    student.course_id = studentInfo.course_id;
    student.fullname = studentInfo.fullname;
    await student.save();

    return response.status(200).json(student);
  }

  async destroy ({ response, params }) {
    const student = await Student.find(params.id);

    if ( ! student) {
      return response.status(404).json({data: "Recurso no encontrado"});
    }

    await student.delete();

    return response.status(204).json(null);
  }
}

module.exports = StudentController

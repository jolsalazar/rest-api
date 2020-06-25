'use strict'

const Course = use('App/Models/Course');
const Database = use('Database');

class CourseController {
  async index ({response}) {
    let courses = await Course.all();
    return response.json(courses);
  }

  async store ({ request, response }) {
    const courseInfo = request.only(['name']);
    const course = new Course;
    course.name = courseInfo.name;
    await course.save();
    return response.status(201).json(course);
  }

  async show ({response, params}) {
    const course = await Course.find(params.id);

    if ( ! course) {
      return response.status(404).json({data: "Recurso no encontrado"});
    }

    return response.json(course);
  }

  async showWithStudents ({ params, request, response }) {
    let row = await Course
                      .query()
                      .whereRaw('id = ?', [params.id])
                      .with('students')
                      .fetch();
    if ( ! row) {
      return response.status(404).json({data: "Recurso no encontrado"});
    }

    return response.json(row);
  }

  async showWithStudentsRaw ({ request, response }) {
    let rows = await Database
                      .raw('select courses.*, students.fullname from courses left join students on courses.id = students.course_id')

    return response.json(rows[0]);
  }

  async update ({request, response, params}) {
    const courseInfo = request.only(['name']);
    const course = await Course.find(params.id);

    if ( ! course) {
      return response.status(404).json({data: "Recurso no encontrado"});
    }

    course.name = courseInfo.name;
    await course.save();

    return response.status(200).json(course);
  }

  async destroy ({ response, params }) {
    const course = await Course.find(params.id);

    if ( ! course) {
      return response.status(404).json({data: "Recurso no encontrado"});
    }

    await course.delete();

    return response.status(204).json(null);
  }
}

module.exports = CourseController

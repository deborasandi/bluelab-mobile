import { Request, Response } from 'express';
import knex from '../database/connection';
import moment from 'moment'

class FresaController {

  async index(request: Request, response: Response) {
    const list = await knex('fresa').select('*')

    const options = { day: '2-digit', month: '2-digit', year: 'numeric', }

    const serialized = list.map(item => {
      return {
        id: item.id,
        manufacturer: item.manufacturer,
        diameter: item.diameter,
        type: item.type,
        height: item.height,
        machine: item.machine,
        date: moment(item.date).format('DD/MM/yyyy')
      }
    })
    return response.json(serialized)
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const item = await knex('fresa')
      .where('id', id)
      .first()

    if (!item) {
      return response.status(400).json({ message: 'Produto não cadastrado' })
    }

    const options = { day: '2-digit', month: '2-digit', year: 'numeric', }

    return response.json({ ...item, date: new Date(item.date).toLocaleDateString('en-GB', options) })
  }

  async update(request: Request, response: Response) {
    const { id } = request.params

    const item = await knex('fresa')
      .where('id', id)
      .update(request.body)

    if (!item) {
      return response.status(400).json({ message: 'Produto não cadastrado' })
    }

    return response.json({ message: 'Dados atualizados' })
  }

  async create(request: Request, response: Response) {
    const {
      manufacturer,
      diameter,
      type,
      height,
      machine,
    } = request.body

    const item = {
      manufacturer,
      diameter,
      type,
      height,
      machine,
      date: new Date()
    }

    const insertedItem = await knex('fresa').insert(item)

    return response.json({ id: insertedItem[0], ...item })
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params

    const item = await knex('fresa')
      .where('id', id)
      .delete()

    if (!item) {
      return response.status(400).json({ message: 'Produto não cadastrado' })
    }

    return response.json({ message: 'Produto removido' })
  }

}

export default FresaController
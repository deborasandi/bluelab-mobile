import { Request, Response } from 'express';
import knex from '../database/connection';
import moment from 'moment'

class CeraController {

  async index(request: Request, response: Response) {
    const zirconiaList = await knex('cera').select('*')

    const options = { day: '2-digit', month: '2-digit', year: 'numeric', }

    const serialized = zirconiaList.map(item => {
      return {
        id: item.id,
        height: item.height,
        brand: item.brand,
        lot: item.lot,
        date: moment(item.date).format('DD/MM/yyyy')
      }
    })
    return response.json(serialized)
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const item = await knex('zirconia')
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

    const item = await knex('zirconia')
      .where('id', id)
      .update(request.body)

    if (!item) {
      return response.status(400).json({ message: 'Produto não cadastrado' })
    }

    return response.json({ message: 'Dados atualizados' })
  }

  async create(request: Request, response: Response) {
    const {
      height,
      brand,
      lot
    } = request.body

    const item = {
      height,
      brand,
      lot,
      date: new Date()
    }

    const insertedItem = await knex('zirconia').insert(item)

    return response.json({ id: insertedItem[0], ...item })
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params

    const item = await knex('zirconia')
      .where('id', id)
      .delete()

    if (!item) {
      return response.status(400).json({ message: 'Produto não cadastrado' })
    }

    return response.json({ message: 'Produto removido' })
  }

}

export default CeraController
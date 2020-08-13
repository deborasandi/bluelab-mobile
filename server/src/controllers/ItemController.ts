import { Request, Response } from 'express';
import knex from '../database/connection';
import moment from 'moment'

class ItemController {

  async index(request: Request, response: Response) {
    const list = await knex('item').select('*')

    const options = { day: '2-digit', month: '2-digit', year: 'numeric', }

    const serialized = list.map(item => {
      return {
        id: item.id,
        name: item.name,
        material: item.material,
        description: item.description,
        brand: item.brand,
        lot: item.lot,
        date: moment(item.date).format('DD/MM/yyyy')
      }
    })
    return response.json(serialized)
  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const item = await knex('item')
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

    const item = await knex('item')
      .where('id', id)
      .update(request.body)

    if (!item) {
      return response.status(400).json({ message: 'Produto não cadastrado' })
    }

    return response.json({ message: 'Dados atualizados' })
  }

  async create(request: Request, response: Response) {
    const {
      blockType,
      material,
      description,
      brand,
      lot,
    } = request.body

    const item = {
      blockType,
      material,
      description,
      brand,
      lot,
      date: new Date()
    }

    const insertedItem = await knex('item').insert(item)

    return response.json({ id: insertedItem[0], ...item })
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params

    const item = await knex('item')
      .where('id', id)
      .delete()

    if (!item) {
      return response.status(400).json({ message: 'Produto não cadastrado' })
    }

    return response.json({ message: 'Produto removido' })
  }

}

export default ItemController
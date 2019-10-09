'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChamadoSchema extends Schema {
  up () {
    this.create('chamados', (table) => {
      table.increments()
      table.string("name",80).notNullable()
      table.string("description",80).notNullable()
      table.boolean("active").notNullable()
      table.integer('user_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('chamados')
  }
}

module.exports = ChamadoSchema

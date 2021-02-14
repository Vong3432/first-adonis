import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('likes').defaultTo(0)
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('likes')
    })
  }
}

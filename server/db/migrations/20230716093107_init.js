/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("flats", (table) => {
        table.increments("id");
        table.tinyint("floor").notNullable();
        table.tinyint("pos_on_floor").notNullable();
        table.integer("price").notNullable();
        table.tinyint("rooms").notNullable();
        table.decimal("area_total").notNullable();
        table.decimal("area_kitchen").notNullable();
        table.decimal("area_live").notNullable();
        table.string("layout_image").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("flats");
};

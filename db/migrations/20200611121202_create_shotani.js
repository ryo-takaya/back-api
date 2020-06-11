exports.up = function (knex) {
  return knex.schema.createTable("dancer", (t) => {
    t.increments();
    t.text("name").notNullable();
    t.integer("age");
    t.integer("weight");
    t.integer("height");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("dancer");
};

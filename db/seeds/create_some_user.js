exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("dancer")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("dancer").insert([
        { name: "ayana", age: 28, weight: 69, height: 154 },
        { name: "takeshi", age: 28, weight: 200, height: 180 },
        { name: "yukiko", age: 30, weight: 45, height: 120 },
      ]);
    });
};

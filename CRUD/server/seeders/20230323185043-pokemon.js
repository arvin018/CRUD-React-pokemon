'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data= require('../db.json')

    data.pokemon.map(el=>{
      return delete el.id,
      el.createdAt = new Date(),
      el.updatedAt = new Date()
    })
    // console.log(data.pokemon,">>>")
   return  queryInterface.bulkInsert('Pokemons',data.pokemon,{})

},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Pokemons',null,{});
  }
};

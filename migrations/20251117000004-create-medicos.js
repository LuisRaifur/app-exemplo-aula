'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      crm: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: true
      },
      especialidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'especialidades',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      cidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cidades',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('medicos');
  }
};

'use strict';
module.exports = (sequelize, DataTypes) => {
// export default function Todo(sequelize, DataTypes) {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    })
  };
  return Todo;
};
//try refactoring to use export default
const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','210431@rath',{
    dailect:'mysql',
    host:'localhost'
});

module.exports=sequelize;
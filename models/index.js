const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING, 
        allownull: false
    }, 
    slug: {
        type: Sequelize.STRING, 
        allownull: false, 
        validate: {
            isUrl: true,
        } 
    },
    content: {
        type: Sequelize.TEXT, 
    }, 
    status: {
        type: Sequelize.ENUM('open', 'closed'), 
        allownull: false
    }
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allownull: false
    }, 
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true 
        }
    }
})

module.exports = {
  db,
  Page,
  User
};
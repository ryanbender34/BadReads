var express = require('express');
var router = express.Router();
const csrf = require('csurf')
const csrfProtection = csrf({ cookie: true })
const db = require('../db/models');

const {Book, Review, Rating} = require('../db/models/book')

const { asyncHandler } = require('../utils');
const { log } = require('debug');


/* GET books. */
router.get('/', asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({
    // order: [['title', 'ASC']],
    // order: sequelize.random()
  })
  res.render('books', { title: 'BadReads Books', books });
}))

/* GET books id. */
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const bookId = req.params.id;
  const book = await db.Book.findByPk(bookId, {
    //include user ? 
    // include: {
    //   model: Review
    // },
    // include: {
    //   model: Rating
    // }
  })
  res.render('book', {title: 'Badbook', book});

}))




module.exports = router;
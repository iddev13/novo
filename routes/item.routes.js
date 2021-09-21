const { Router } = require('express')
const Item = require('../models/Item')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/add', auth, async (req, res) => {
  try {
    console.log('itemCreate', req.body);

    // if (existing) {
    //   return res.json({ item: existing })
    // }
    const { category, year, brand, millage, model, country, price, weight, files, description } = req.body;

    console.log(req.body.category);
    console.log(req.body.year);

    const item = new Item({
      category, year, owner: req.user.userId
    })

    await item.save(function (err) {
      if (err) return handleError(err);
    })

    console.log('Item', item);

    res.status(201).json({ item })
  } catch (e) {
    // throw new Error(e)
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова /add post' })
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const items = await Item.find({ owner: req.user.userId })
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова ' })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    res.json(item)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router

const { Router } = require('express')
const Message = require('../models/Messages')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/add', auth, async (req, res) => {
  try {
    console.log('messages', req.body);
    const { message } = req.body;

    const messages = new Message({
      message, owner: req.user.userId
    })

    await messages.save(function (err) {
      if (err) console.log(err);
    })

    console.log('Messages', messages);

    res.status(201).json({ messages })
  } catch (e) {
    // throw new Error(e)
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова /add message' })
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const messages = await Message.find({ owner: req.user.userId })
    res.json(messages)
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова ' })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const message = await Message.findById(req.params.id)
    res.json(message)
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router

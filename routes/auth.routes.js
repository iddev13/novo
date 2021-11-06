const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();

// /api/auth/register
router.post(
	'/register',
	[
		check('email', 'Некорректный email').isEmail(),
		check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
		check('name', 'Минимальная длина имени 3 символа').isLength({ min: 3 }),
		check('surname', 'Минимальная длина фамилии 3 символа').isLength({ min: 3 })
	],
	async (req, res) => {
		try {

			console.log(req.body);
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректный данные при регистрации'
				})
			}

			const { email, password, name, surname } = req.body

			const candidate = await User.findOne({ email })

			if (candidate) {
				return res.status(400).json({ message: 'Такой пользователь уже существует' })
			}

			const hashedPassword = await bcrypt.hash(password, 12)
			const user = new User({ email, password: hashedPassword, name, surname })

			await user.save()

			res.status(201).json({ message: 'Пользователь создан' })

		} catch (e) {
			res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова /register' })
		}
	})
// /api/auth/login
router.post(
	'/login',
	[
		check('email', 'Введите корректный email').normalizeEmail().isEmail(),
		check('password', 'Введите пароль').exists()
	],
	async (req, res) => {
		try {
			const serverTokenTime = '1h'
			console.log(req.body);

			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректный данные при входе в систему'
				})
			}

			const { email, password } = req.body

			const user = await User.findOne({ email })

			if (!user) {
				return res.status(400).json({ message: 'Пользователь не найден' })
			}

			const isMatch = await bcrypt.compare(password, user.password)

			if (!isMatch) {
				return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
			}

			const token = jwt.sign(
				{ userId: user.id },
				config.get('jwtSecret'),
				{ expiresIn: serverTokenTime }
			)

			res.json({ token, userId: user.id, serverTokenTime, message: 'Вход произошел!' })

		} catch (e) {
			res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
		}
	})

// /api/auth/changelogin
router.patch(
	'/changelogin',
	[
		check('changeEmail', 'Введите корректный email').normalizeEmail().isEmail()
	],
	async (req, res) => {
		try {
			console.log('server', req.body.changeEmail);
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: 'Некорректный данные при смене E-mail'
				})
			}

			res.json({ message: `changelogin сработал! Candidate: ${req.body.changeEmail}` })
		} catch (error) {
			console.log('changelogin: ', error);
		}
	}
)

module.exports = router;
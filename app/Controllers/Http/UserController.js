'use strict'

const User = use('App/Models/User')

class UserController {
	// Fungsi untuk register
	async register({request, response}) {
		const {first_name, last_name, email, password} = request.only([
			'first_name',
			'last_name',
			'email',
			'password'
		])

		// Membuat data user ke Database
		await User.create({
			first_name,
			last_name,
			email,
			password
		})

		// Jika berhasil akan menampilkan pesan 
		return response.send({message: 'User has been created'})
	}

	// Fungsi untuk login
	async login ({request, response, auth}) {
		const {email, password} = request.only(['email', 'password'])

		// Membuat token
		const token = await auth.attempt(email, password)
		return response.json(token)
	}

	// Mencocokkan dengan data yang di database
	async show({params, response}) {
		const user = await User.find(params.id)
		const res = {
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email
		}

		return response.json(res)
	}
}

module.exports = UserController
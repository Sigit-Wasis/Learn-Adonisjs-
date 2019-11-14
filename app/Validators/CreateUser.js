'use strict'

class CreateUser {
	// Membuat peraturan validation
  	get rules () {
    return {
      	// validation rules
      	'username': 'required|unique:users',
      	'email': 'required|unique:users',
      	'password': 'required'
    	}
  	}

  	// Membuat pesan untuk error
  	get messages() {
  	return {
  		'required': 'Woah Now, {{ field }} is required',
  		'unique': 'wait a second, the {{field}} already exits'
  		}
  	}

  	// Untuk mengirim pesan ketika ada error
  	async fails(error) {
  		this.ctx.session.withErrors(error)
  		.flashAll();

  		return this.ctx.response.redirect('back');
  	}
}

module.exports = CreateUser

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {res.render("products", {products : products})
		
	},

	// Detail - Detail from one product
	detail: (req, res) => {

		const idProduct= req.params.id;

		const show=products.find((prod)=>{return prod.id==idProduct});

		res.render("detail", {show : show})

		
	},

	// Create - Form to create
	create: (req, res) => {res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {res.send("terminamos la prixima")
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {const idProduct= req.params.id;

		const show=products.find((prod)=>{return prod.id==idProduct});
		
		res.render("product-edit-form", {show : show} )

		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {res.send("terminamos la prixima")
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {res.send("terminamos la prixima")
		// Do the magic
	
}}

module.exports = controller;
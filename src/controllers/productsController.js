const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

function saveList(){

const 	newList=JSON.stringify(products, null, 4);

fs.writeFileSync(productsFilePath, newList);

}



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
	store: (req, res) => {
		
		const newProduct= {id : Date.now(), ...req.body}
		
		products.push(newProduct);

		saveList();

		res.redirect("/products")
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {const idProduct= req.params.id;

		const show=products.find((prod)=>{return prod.id==idProduct});
		
		res.render("product-edit-form", {show : show} )

		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		
		const idProduct= req.params.id;
	
		const show=products.find((prod)=>{return prod.id==idProduct});

	show.category=req.body.category;
	show.name=req.body.name;
	show.description=req.body.description;
	show.price=req.body.price;
	show.discount=req.body.discount;
	
	saveList();

	res.redirect("/products/"+ show.id);
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		const idProduct= req.params.id;

		const index = products.findIndex((prod)=> {prod.id == idProduct});

		products.splice(index, 1);

		saveList();

		res.redirect("/products");
}}

module.exports = controller;
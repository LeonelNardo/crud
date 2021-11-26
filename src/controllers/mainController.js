const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		
		const visited= products.filter((prod) => {return prod.category == "visited"}) ;
		
		const inSale= products.filter((prod) => {return prod.category == "in-sale"});

		res.render("index", {visited : visited, inSale:inSale})
		
	},
	search: (req, res) => {
		res.render("results")
	},
};

module.exports = controller;

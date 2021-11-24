const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		
		const visited= products.filter((prod) => {return prod.category == "visited"}).slice(0,2) ;
		
		const inSale= products.filter((prod) => {return prod.category == "in-sale"}).slice(0,4);

		res.render("index", {visited : visited, inSale:inSale})
		
	},
	search: (req, res) => {
		res.render("results")
	},
};

module.exports = controller;

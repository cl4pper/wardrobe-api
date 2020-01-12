const express = require('express');
const router = express.Router();

// SCHEMA
const Item = require('Amodels').itemModel;

// LOCAL VARIABLES
const mainRoute = require('Aconstants').routeWardrobe;

// GETTING ALL
router.get(mainRoute, async (req, res) => {
	try {
		const items = await Item.find().select('-_id -__v');
		res.json(items);
	} catch (err) {
		res.status(500).json({
			message: err.message 
		});
	}
});

// GETTING ONE
router.get(`${mainRoute}/:id`, async (req, res) => {
	// res.send(res.item);
	try {
		const item = await Item.findById(req.params.id)
			.populate('type')
			.select('-_id -__v');
		res.send(item);
	} catch (err) {
		res.status(500).json({
			message: err.message 
		});
	}
});

// CREATING ONE
router.post(mainRoute, async (req, res) => {
	const item = new Item({
		...req.body
	});
	try {
		const newItem = await item.save();
		res.status(201).json(newItem);
	} catch (err) {
		res.status(400).json({
			message: err.message 
		});
	}
});

// DELETING ONE
router.delete(`${mainRoute}/:id`, getOneItem, async (req, res) => {
	try {
		await res.item.remove();
		res.json({
			message: `${res.item.name} DELETED` 
		});
	} catch (err) {
		res.status(500).json({
			message: err.message 
		});
	}
});

// UPDATING ONE
router.patch(`${mainRoute}/:id`, getOneItem, async (req, res) => {
	if (req.body) {
		try {
			await Item.updateOne({
				_id: res.item 
			}, {
				$set: {
					...req.body 
				} 
			});
			res.status(201).json({
				message: 'Update done.' 
			});
		} catch (err) {
			res.status(400).json({
				message: err.message 
			});
		}
	}
});

// MIDDLEWARES
async function getOneItem(req, res, next) {
	// FIX THIS ERROR HANDLER
	try {
		const item = await Item.findById(req.params.id);
		res.item = item;
	} catch (err) {
		return res.status(404).json({
			message: 'Item NOT found' 
		});
	}

	next();
}

module.exports = router;

const express = require('express');
const router = express.Router();

// SCHEMA
const Wearable = require('@models').wearableModel;

// LOCAL VARIABLES
const mainRoute = require('@constants').routeWearable;

// GETTING ALL
router.get(mainRoute, async (req, res) => {
	try {
		const wearableTypes = await Wearable.find();
		res.status(200).json(wearableTypes);
	} catch (err) {
		res.status(204).json({
			message: err.message
		});
	}
});

// GETTING ONE
router.get(`${mainRoute}/:id`, async (req, res) => {
	try {
		const wearableType = await Wearable.findById(req.params.id);
		res.status(200).json(wearableType);
	} catch (err) {
		res.status(204).json({
			message: err.message
		});
	}
});

// CREATING ONE
router.post(mainRoute, async (req, res) => {
	const wearableType = new Wearable({
		...req.body
	});

	try {
		const newWearableType = await wearableType.save();
		res.status(201).json(newWearableType);
	} catch (err) {
		res.status(400).json({
			message: err.message
		});
	}
});

// DELETING ONE

// UPDATING ONE
router.patch(`${mainRoute}/:id`, async (req, res) => {
	try {
		const updateTarget = await Wearable.findById(req.params.id);
		const query = {
			_id: req.params.id
		};
		await Wearable.updateOne(query, {
			$set: {
				...req.body
			}
		});
		res.status(200).json(updateTarget);
	} catch (err) {
		res.status(400).json({
			message: err.message
		});
	}
});

module.exports = router;

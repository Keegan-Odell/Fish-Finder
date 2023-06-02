const express = require('express');
const pool = require('../modules/pool');
const {
	rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */

router.put('/search', (req, res) => {
	let search = req.body;
	
});

router.get('/:id', (req, res) => {
	let catchToGrab = req.params.id;

	sqlText = `
	SELECT catch.id, catch.month, catch.length, fish.name, catch.water_temp, catch.latitude, catch.longitude FROM "catch"
	JOIN "fish" ON catch.fish_id=fish.id
	WHERE catch.id = $1	
	`;
	pool
		.query(sqlText, [catchToGrab])
		.then((results) => {
			res.send(results.rows);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.get('/', rejectUnauthenticated, (req, res) => {
	// GET route code here
	const userID = req.user.id;

	sqlText = `
	SELECT catch.id, catch.month, catch.length, fish.name, catch.water_temp, catch.latitude, catch.longitude FROM "catch"
	JOIN "fish" ON catch.fish_id=fish.id
	WHERE "user_id" = $1
	`;
	pool
		.query(sqlText, [userID])
		.then((results) => {
			res.send(results.rows);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
	//function for convering fish to fishID
	function fishToFishID(fishString) {
		if (fishString === 'Largemouth Bass') {
			return 1;
		} else if (fishString === 'Smallmouth Bass') {
			return 2;
		} else if (fishString === 'Walleye') {
			return 3;
		} else if (fishString === 'Lake Trout') {
			return 4;
		} else if (fishString === 'Northern Pike') {
			return 5;
		} else {
			return 6;
		}
	}
	// POST route code here
	const data = req.body;
	const userID = req.user.id;
	const fishID = fishToFishID(data.fishID);
	const month = data.month;
	const lat = data.lat;
	const lon = data.lon;
	const length = data.length;
	const waterTemp = data.waterTemp;

	const createCatch = `
	INSERT INTO "catch" ("user_id", "fish_id", "month", "latitude", "longitude", "length", "water_temp")
	VALUES
	($1, $2, $3, $4, $5, $6, $7)
	`;
	pool
		.query(createCatch, [userID, fishID, month, lat, lon, length, waterTemp])
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
	if (req.user != undefined) {
		idToDelete = req.params.id;
		userID = req.user.id;

		sqlQuery = `
		DELETE FROM catch 
		WHERE catch.id=$1
		AND catch.user_id=$2
		`;
		pool
			.query(sqlQuery, [idToDelete, userID])
			.then((response) => {
				res.sendStatus(200);
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		console.log('User was not logged in');
	}
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
	console.log(req.body);
	id = req.body.id;
	month = req.body.month;
	length = req.body.length;
	latitude = req.body.latitude;
	longitude = req.body.longitude;
	sqlQuery = `
	UPDATE "catch"
	SET month = $1,
			length = $2,
			latitude = $3,
			longitude = $4
	WHERE catch.id = $5
	`;
	pool
		.query(sqlQuery, [month, length, latitude, longitude, id])
		.then((response) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;

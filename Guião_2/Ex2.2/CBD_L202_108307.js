// NMEC: 108307

// 1. Liste todos os documentos da coleção.
db.restaurants.find()
// [
//   {
//     _id: ObjectId("652912b6cab862e8d9f0384b"),
//     address: {
//       building: '8825',
//       coord: [ -73.8803827, 40.7643124 ],
//       rua: 'Astoria Boulevard',
//       zipcode: '11369'
//     },
//     localidade: 'Queens',
//     gastronomia: 'American',
//     grades: [
//       {
//         date: ISODate("2014-11-15T00:00:00.000Z"),
//         grade: 'Z',
//         score: 38
//       },
//       {
//         date: ISODate("2014-05-02T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       },
//       {
//         date: ISODate("2013-03-02T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2012-02-10T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       }
//     ],
//     nome: 'Brunos On The Boulevard',
//     restaurant_id: '40356151'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f0384c"),
//     address: {
//       building: '2780',
//       coord: [ -73.98241999999999, 40.579505 ],
//       rua: 'Stillwell Avenue',
//       zipcode: '11224'
//     },
//     localidade: 'Brooklyn',
//     gastronomia: 'American',
//     grades: [
//       {
//         date: ISODate("2014-06-10T00:00:00.000Z"),
//         grade: 'A',
//         score: 5
//       },
//       {
//         date: ISODate("2013-06-05T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2012-04-13T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2011-10-12T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       }
//     ],
//     nome: 'Riviera Caterer',
//     restaurant_id: '40356018'
//   },
//   ...]

// 2. Apresente os campos restaurant_id, nome, localidade e gastronomia para todos os documentos da coleção.
db.restaurants.find({}, {restaurant_id: 1, nome: 1, localidade: 1, gastronomia: 1, _id: 0})
// [
//     {
//       _id: ObjectId("652912b6cab862e8d9f0384b"),
//       localidade: 'Queens',
//       gastronomia: 'American',
//       nome: 'Brunos On The Boulevard',
//       restaurant_id: '40356151'
//     },
//     {
//       _id: ObjectId("652912b6cab862e8d9f0384c"),
//       localidade: 'Brooklyn',
//       gastronomia: 'American',
//       nome: 'Riviera Caterer',
//       restaurant_id: '40356018'
//     },
//     {
//       _id: ObjectId("652912b6cab862e8d9f0384d"),
//       localidade: 'Brooklyn',
//       gastronomia: 'Delicatessen',
//       nome: "Wilken'S Fine Food",
//       restaurant_id: '40356483'
//     },
//     {
//       _id: ObjectId("652912b6cab862e8d9f0384e"),
//       localidade: 'Staten Island',
//       gastronomia: 'Jewish/Kosher',
//       nome: 'Kosher Island',
//       restaurant_id: '40356442'
//     },
//     {
//       _id: ObjectId("652912b6cab862e8d9f0384f"),
//       localidade: 'Manhattan',
//       gastronomia: 'Irish',
//       nome: 'Dj Reynolds Pub And Restaurant',
//       restaurant_id: '30191841'
//     },
// ...]

//3. Apresente os campos restaurant_id, nome, localidade e código postal (zipcode), mas exclua o campo _id de todos os documentos da coleção.
db.restaurants.find({}, {restaurant_id: 1, nome: 1, localidade: 1, 'address.zipcode': 1, _id: 0})
// [
//     {
//       address: { zipcode: '11369' },
//       localidade: 'Queens',
//       nome: 'Brunos On The Boulevard',
//       restaurant_id: '40356151'
//     },
//     {
//       address: { zipcode: '11224' },
//       localidade: 'Brooklyn',
//       nome: 'Riviera Caterer',
//       restaurant_id: '40356018'
//     },
//     {
//       address: { zipcode: '11234' },
//       localidade: 'Brooklyn',
//       nome: "Wilken'S Fine Food",
//       restaurant_id: '40356483'
//     },
//     {
//       address: { zipcode: '10314' },
//       localidade: 'Staten Island',
//       nome: 'Kosher Island',
//       restaurant_id: '40356442'
//     },
//     {
//       address: { zipcode: '10019' },
//       localidade: 'Manhattan',
//       nome: 'Dj Reynolds Pub And Restaurant',
//       restaurant_id: '30191841'
//     },
//     {
//       address: { zipcode: '11374' },
//       localidade: 'Queens',
//       nome: 'Tov Kosher Kitchen',
//       restaurant_id: '40356068'
//     },
//     {
//       address: { zipcode: '10462' },
//       localidade: 'Bronx',
//       nome: 'Morris Park Bake Shop',
//       restaurant_id: '30075445'
//     },
// ...]  

// 4. Indique o total de restaurantes localizados no Bronx
db.restaurants.find({localidade: 'Bronx'}).count()
// 309
// ou db.restaurants.aggregate([{$match:{localidade:'Bronx'}},{$group : {_id: "$localidade", num_total : {$sum:1}}}])
// { "_id" : "Bronx", "num_total" : 309 }

// 5. Apresente os primeiros 15 restaurantes localizados no Bronx, ordenados por ordem crescente de nome.
db.restaurants.find({localidade: 'Bronx'}).sort({"nome":1}).limit(15)
// [
//   {
//     _id: ObjectId("652912b6cab862e8d9f03929"),
//     address: {
//       building: '2300',
//       coord: [ -73.8786113, 40.8502883 ],
//       rua: 'Southern Boulevard',
//       zipcode: '10460'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     grades: [
//       {
//         date: ISODate("2014-05-21T00:00:00.000Z"),
//         grade: 'A',
//         score: 5
//       },
//       {
//         date: ISODate("2013-05-28T00:00:00.000Z"),
//         grade: 'A',
//         score: 3
//       },
//       {
//         date: ISODate("2012-06-18T00:00:00.000Z"),
//         grade: 'A',
//         score: 4
//       },
//       {
//         date: ISODate("2011-06-07T00:00:00.000Z"),
//         grade: 'A',
//         score: 9
//       }
//     ],
//     nome: 'African Market (Baboon Cafe)',
//     restaurant_id: '40368026'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03923"),
//     address: {
//       building: '2300',
//       coord: [ -73.8786113, 40.8502883 ],
//       rua: 'Southern Boulevard',
//       zipcode: '10460'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'African',
//     grades: [
//       {
//         date: ISODate("2014-05-21T00:00:00.000Z"),
//         grade: 'A',
//         score: 8
//       },
//       {
//         date: ISODate("2013-06-01T00:00:00.000Z"),
//         grade: 'A',
//         score: 6
//       },
//       {
//         date: ISODate("2012-06-12T00:00:00.000Z"),
//         grade: 'A',
//         score: 0
//       },
//       {
//         date: ISODate("2011-06-08T00:00:00.000Z"),
//         grade: 'A',
//         score: 0
//       }
//     ],
//     nome: 'African Terrace',
//     restaurant_id: '40368021'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03dc0"),
//     address: {
//       building: '3825',
//       coord: [ -73.86267, 40.884484 ],
//       rua: 'White Plains Road',
//       zipcode: '10467'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'Caribbean',
//     grades: [
//       {
//         date: ISODate("2014-11-06T00:00:00.000Z"),
//         grade: 'Z',
//         score: 20
//       },
//       {
//         date: ISODate("2014-06-16T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2013-10-21T00:00:00.000Z"),
//         grade: 'B',
//         score: 15
//       },
//       {
//         date: ISODate("2013-05-20T00:00:00.000Z"),
//         grade: 'B',
//         score: 22
//       },
//       {
//         date: ISODate("2012-04-17T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       }
//     ],
//     nome: 'Al Cholo Bakery',
//     restaurant_id: '40424273'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f04398"),
//     address: {
//       building: '4220',
//       coord: [ -73.85672319999999, 40.8939927 ],
//       rua: 'White Plains Road',
//       zipcode: '10466'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'Caribbean',
//     grades: [
//       {
//         date: ISODate("2014-11-06T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       },
//       {
//         date: ISODate("2013-11-06T00:00:00.000Z"),
//         grade: 'A',
//         score: 9
//       },
//       {
//         date: ISODate("2013-05-31T00:00:00.000Z"),
//         grade: 'A',
//         score: 9
//       },
//       {
//         date: ISODate("2012-11-27T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2012-06-28T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2012-01-19T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       }
//     ],
//     nome: "Ali'S Roti Shop",
//     restaurant_id: '40738028'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03d9c"),
//     address: {
//       building: '730',
//       coord: [ -73.89954829999999, 40.8164378 ],
//       rua: 'Kelly Street',
//       zipcode: '10455'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     grades: [
//       {
//         date: ISODate("2015-01-20T00:00:00.000Z"),
//         grade: 'Not Yet Graded',
//         score: 4
//       }
//     ],
//     nome: 'Ambassador Diner',
//     restaurant_id: '40403946'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03fbc"),
//     address: {
//       building: '445',
//       coord: [ -73.9049794, 40.8874509 ],
//       rua: 'West  238 Street',
//       zipcode: '10463'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     grades: [
//       {
//         date: ISODate("2014-03-20T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       },
//       {
//         date: ISODate("2013-08-15T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       },
//       {
//         date: ISODate("2012-08-01T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       },
//       {
//         date: ISODate("2012-03-27T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       }
//     ],
//     nome: 'An Beal Bocht Cafe',
//     restaurant_id: '40570634'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f04350"),
//     address: {
//       building: '4315',
//       coord: [ -73.8676548, 40.8992003 ],
//       rua: 'Katonah Ave',
//       zipcode: '10470'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'Bakery',
//     grades: [
//       {
//         date: ISODate("2014-09-22T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2013-10-08T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2013-05-29T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2012-12-12T00:00:00.000Z"),
//         grade: 'A',
//         score: 0
//       },
//       {
//         date: ISODate("2011-12-06T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       }
//     ],
//     nome: "Angelica'S Bakery",
//     restaurant_id: '40730301'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f04404"),
//     address: {
//       building: '2276',
//       coord: [ -73.8263328, 40.8662088 ],
//       rua: 'Bartow Avenue',
//       zipcode: '10475'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     grades: [
//       {
//         date: ISODate("2015-01-14T00:00:00.000Z"),
//         grade: 'A',
//         score: 3
//       },
//       {
//         date: ISODate("2014-08-28T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       },
//       {
//         date: ISODate("2013-08-09T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2013-03-06T00:00:00.000Z"),
//         grade: 'A',
//         score: 5
//       },
//       {
//         date: ISODate("2012-02-02T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       }
//     ],
//     nome: "Applebee'S Neighborhood Grill & Bar",
//     restaurant_id: '40752494'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03a31"),
//     address: {
//       building: '4277',
//       coord: [ -73.8675389, 40.8977829 ],
//       rua: 'Katonah Ave',
//       zipcode: '10470'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'Irish',
//     grades: [
//       {
//         date: ISODate("2014-10-06T00:00:00.000Z"),
//         grade: 'A',
//         score: 2
//       },
//       {
//         date: ISODate("2013-10-16T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2013-04-30T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2012-04-30T00:00:00.000Z"),
//         grade: 'A',
//         score: 8
//       },
//       {
//         date: ISODate("2011-11-01T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       }
//     ],
//     nome: 'Aqueduct North',
//     restaurant_id: '40379894'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03fbb"),
//     address: {
//       building: '1511',
//       coord: [ -73.86362500000001, 40.8381664 ],
//       rua: 'White Plains Road',
//       zipcode: '10462'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     grades: [
//       {
//         date: ISODate("2014-06-25T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       },
//       {
//         date: ISODate("2013-06-03T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2012-06-06T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       }
//     ],
//     nome: 'Archer Sports Bar',
//     restaurant_id: '40571081'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03e48"),
//     address: {
//       building: '394',
//       coord: [ -73.78706799999999, 40.8496359 ],
//       rua: 'City Island Avenue',
//       zipcode: '10464'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'Italian',
//     grades: [
//       {
//         date: ISODate("2014-05-22T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2013-12-11T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       },
//       {
//         date: ISODate("2013-03-28T00:00:00.000Z"),
//         grade: 'B',
//         score: 22
//       },
//       {
//         date: ISODate("2012-08-07T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       },
//       {
//         date: ISODate("2012-01-18T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       }
//     ],
//     nome: "Artie'S",
//     restaurant_id: '40515670'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03adc"),
//     address: {
//       building: '5189A',
//       coord: [ -73.91039789999999, 40.8745536 ],
//       rua: 'Broadway',
//       zipcode: '10463'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'Pizza',
//     grades: [
//       {
//         date: ISODate("2015-01-09T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       },
//       {
//         date: ISODate("2014-06-23T00:00:00.000Z"),
//         grade: 'A',
//         score: 9
//       },
//       {
//         date: ISODate("2013-10-16T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       },
//       {
//         date: ISODate("2013-05-15T00:00:00.000Z"),
//         grade: 'C',
//         score: 13
//       },
//       {
//         date: ISODate("2012-09-20T00:00:00.000Z"),
//         grade: 'A',
//         score: 4
//       },
//       {
//         date: ISODate("2012-04-23T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       }
//     ],
//     nome: "Arturo'S Pizza",
//     restaurant_id: '40387399'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03db7"),
//     address: {
//       building: '670',
//       coord: [ -73.8851025, 40.8541951 ],
//       rua: 'East  187 Street',
//       zipcode: '10458'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'Italian',
//     grades: [
//       {
//         date: ISODate("2014-05-29T00:00:00.000Z"),
//         grade: 'A',
//         score: 8
//       },
//       {
//         date: ISODate("2014-01-02T00:00:00.000Z"),
//         grade: 'A',
//         score: 2
//       },
//       {
//         date: ISODate("2012-12-07T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       },
//       {
//         date: ISODate("2011-11-29T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       }
//     ],
//     nome: 'Artuso Pastry Shop',
//     restaurant_id: '40423571'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f0442c"),
//     address: {
//       building: '5500',
//       coord: [ -73.90567390000001, 40.8766056 ],
//       rua: 'Broadway',
//       zipcode: '10463'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'Juice, Smoothies, Fruit Salads',
//     grades: [
//       {
//         date: ISODate("2014-09-16T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2013-09-19T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2012-09-20T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       },
//       {
//         date: ISODate("2011-10-06T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       }
//     ],
//     nome: 'Astral Fitness & Wellness',
//     restaurant_id: '40760469'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03b1a"),
//     address: {
//       building: '2214',
//       coord: [ -73.82328319999999, 40.8689401 ],
//       rua: 'Bartow Ave',
//       zipcode: '10475'
//     },
//     localidade: 'Bronx',
//     gastronomia: 'Delicatessen',
//     grades: [
//       {
//         date: ISODate("2014-10-18T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2014-05-02T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2013-10-30T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       },
//       {
//         date: ISODate("2013-05-30T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       },
//       {
//         date: ISODate("2013-02-12T00:00:00.000Z"),
//         grade: 'B',
//         score: 18
//       },
//       {
//         date: ISODate("2012-01-18T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       }
//     ],
//     nome: 'Bagel Cafe',
//     restaurant_id: '40389011'
//   }
// ]


// 6. Liste todos os restaurantes que tenham pelo menos um score superior a 85.
db.restaurants.find({ "grades.score":  { $gt: 85 } })
// ou db.restaurants.find({grades: {$elemMatch: {score: {$gt: 85}}}})
// [
//   {
//     _id: ObjectId("652912b6cab862e8d9f039a9"),
//     address: {
//       building: '65',
//       coord: [ -73.9782725, 40.7624022 ],
//       rua: 'West   54 Street',
//       zipcode: '10019'
//     },
//     localidade: 'Manhattan',
//     gastronomia: 'American',
//     grades: [
//       {
//         date: ISODate("2014-08-22T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       },
//       {
//         date: ISODate("2014-03-28T00:00:00.000Z"),
//         grade: 'C',
//         score: 131
//       },
//       {
//         date: ISODate("2013-09-25T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       },
//       {
//         date: ISODate("2013-04-08T00:00:00.000Z"),
//         grade: 'B',
//         score: 25
//       },
//       {
//         date: ISODate("2012-10-15T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       },
//       {
//         date: ISODate("2011-10-19T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       }
//     ],
//     nome: "Murals On 54/Randolphs'S",
//     restaurant_id: '40372466'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03a4b"),
//     address: {
//       building: '345',
//       coord: [ -73.9864626, 40.7266739 ],
//       rua: 'East 6 Street',
//       zipcode: '10003'
//     },
//     localidade: 'Manhattan',
//     gastronomia: 'Indian',
//     grades: [
//       {
//         date: ISODate("2014-09-15T00:00:00.000Z"),
//         grade: 'A',
//         score: 5
//       },
//       {
//         date: ISODate("2014-01-14T00:00:00.000Z"),
//         grade: 'A',
//         score: 8
//       },
//       {
//         date: ISODate("2013-05-30T00:00:00.000Z"),
//         grade: 'A',
//         score: 12
//       },
//       {
//         date: ISODate("2013-04-24T00:00:00.000Z"),
//         grade: 'P',
//         score: 2
//       },
//       {
//         date: ISODate("2012-10-01T00:00:00.000Z"),
//         grade: 'A',
//         score: 9
//       },
//       {
//         date: ISODate("2012-04-06T00:00:00.000Z"),
//         grade: 'C',
//         score: 92
//       },
//       {
//         date: ISODate("2011-11-03T00:00:00.000Z"),
//         grade: 'C',
//         score: 41
//       }
//     ],
//     nome: 'Gandhi',
//     restaurant_id: '40381295'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f03bb2"),
//     address: {
//       building: '130',
//       coord: [ -73.984758, 40.7457939 ],
//       rua: 'Madison Avenue',
//       zipcode: '10016'
//     },
//     localidade: 'Manhattan',
//     gastronomia: 'Pizza/Italian',
//     grades: [
//       {
//         date: ISODate("2014-12-24T00:00:00.000Z"),
//         grade: 'Z',
//         score: 31
//       },
//       {
//         date: ISODate("2014-06-17T00:00:00.000Z"),
//         grade: 'C',
//         score: 98
//       },
//       {
//         date: ISODate("2013-12-12T00:00:00.000Z"),
//         grade: 'C',
//         score: 32
//       },
//       {
//         date: ISODate("2013-05-22T00:00:00.000Z"),
//         grade: 'B',
//         score: 21
//       },
//       {
//         date: ISODate("2012-05-02T00:00:00.000Z"),
//         grade: 'A',
//         score: 11
//       }
//     ],
//     nome: 'Bella Napoli',
//     restaurant_id: '40393488'
//   },
//   {
//     _id: ObjectId("652912b6cab862e8d9f04416"),
//     address: {
//       building: '',
//       coord: [ -74.0163793, 40.7167671 ],
//       rua: 'Hudson River',
//       zipcode: '10282'
//     },
//     localidade: 'Manhattan',
//     gastronomia: 'American',
//     grades: [
//       {
//         date: ISODate("2014-06-27T00:00:00.000Z"),
//         grade: 'C',
//         score: 89
//       },
//       {
//         date: ISODate("2013-06-06T00:00:00.000Z"),
//         grade: 'A',
//         score: 6
//       },
//       {
//         date: ISODate("2012-06-19T00:00:00.000Z"),
//         grade: 'A',
//         score: 13
//       }
//     ],
//     nome: 'West 79Th Street Boat Basin Cafe',
//     restaurant_id: '40756344'
//   }
// ]

//7. Encontre os restaurantes que obtiveram uma ou mais pontuações (score) entre [80 e 100].
db.restaurants.find({grades: {$elemMatch: {score: {$gt: 85,$lte:100}}}})
// [
//     {
//       _id: ObjectId("652912b6cab862e8d9f03a4b"),
//       address: {
//         building: '345',
//         coord: [ -73.9864626, 40.7266739 ],
//         rua: 'East 6 Street',
//         zipcode: '10003'
//       },
//       localidade: 'Manhattan',
//       gastronomia: 'Indian',
//       grades: [
//         {
//           date: ISODate("2014-09-15T00:00:00.000Z"),
//           grade: 'A',
//           score: 5
//         },
//         {
//           date: ISODate("2014-01-14T00:00:00.000Z"),
//           grade: 'A',
//           score: 8
//         },
//         {
//           date: ISODate("2013-05-30T00:00:00.000Z"),
//           grade: 'A',
//           score: 12
//         },
//         {
//           date: ISODate("2013-04-24T00:00:00.000Z"),
//           grade: 'P',
//           score: 2
//         },
//         {
//           date: ISODate("2012-10-01T00:00:00.000Z"),
//           grade: 'A',
//           score: 9
//         },
//         {
//           date: ISODate("2012-04-06T00:00:00.000Z"),
//           grade: 'C',
//           score: 92
//         },
//         {
//           date: ISODate("2011-11-03T00:00:00.000Z"),
//           grade: 'C',
//           score: 41
//         }
//       ],
//       nome: 'Gandhi',
//       restaurant_id: '40381295'
//     },
//     {
//       _id: ObjectId("652912b6cab862e8d9f03bb2"),
//       address: {
//         building: '130',
//         coord: [ -73.984758, 40.7457939 ],
//         rua: 'Madison Avenue',
//         zipcode: '10016'
//       },
//       localidade: 'Manhattan',
//       gastronomia: 'Pizza/Italian',
//       grades: [
//         {
//           date: ISODate("2014-12-24T00:00:00.000Z"),
//           grade: 'Z',
//           score: 31
//         },
//         {
//           date: ISODate("2014-06-17T00:00:00.000Z"),
//           grade: 'C',
//           score: 98
//         },
//         {
//           date: ISODate("2013-12-12T00:00:00.000Z"),
//           grade: 'C',
//           score: 32
//         },
//         {
//           date: ISODate("2013-05-22T00:00:00.000Z"),
//           grade: 'B',
//           score: 21
//         },
//         {
//           date: ISODate("2012-05-02T00:00:00.000Z"),
//           grade: 'A',
//           score: 11
//         }
//       ],
//       nome: 'Bella Napoli',
//       restaurant_id: '40393488'
//     },
//     {
//       _id: ObjectId("652912b6cab862e8d9f042ad"),
//       address: {
//         building: '243',
//         coord: [ -73.9889479, 40.7568894 ],
//         rua: 'West   42 Street',
//         zipcode: '10036'
//       },
//       localidade: 'Manhattan',
//       gastronomia: 'American',
//       grades: [
//         {
//           date: ISODate("2014-10-31T00:00:00.000Z"),
//           grade: 'A',
//           score: 9
//         },
//         {
//           date: ISODate("2014-05-16T00:00:00.000Z"),
//           grade: 'A',
//           score: 11
//         },
//         {
//           date: ISODate("2013-11-19T00:00:00.000Z"),
//           grade: 'A',
//           score: 5
//         },
//         {
//           date: ISODate("2013-03-25T00:00:00.000Z"),
//           grade: 'B',
//           score: 19
//         },
//         {
//           date: ISODate("2012-09-05T00:00:00.000Z"),
//           grade: 'B',
//           score: 26
//         },
//         {
//           date: ISODate("2012-04-10T00:00:00.000Z"),
//           grade: 'C',
//           score: 49
//         },
//         {
//           date: ISODate("2011-11-21T00:00:00.000Z"),
//           grade: 'C',
//           score: 80
//         }
//       ],
//       nome: 'B.B. Kings',
//       restaurant_id: '40704853'
//     },
//     {
//       _id: ObjectId("652912b6cab862e8d9f04416"),
//       address: {
//         building: '',
//         coord: [ -74.0163793, 40.7167671 ],
//         rua: 'Hudson River',
//         zipcode: '10282'
//       },
//       localidade: 'Manhattan',
//       gastronomia: 'American',
//       grades: [
//         {
//           date: ISODate("2014-06-27T00:00:00.000Z"),
//           grade: 'C',
//           score: 89
//         },
//         {
//           date: ISODate("2013-06-06T00:00:00.000Z"),
//           grade: 'A',
//           score: 6
//         },
//         {
//           date: ISODate("2012-06-19T00:00:00.000Z"),
//           grade: 'A',
//           score: 13
//         }
//       ],
//       nome: 'West 79Th Street Boat Basin Cafe',
//       restaurant_id: '40756344'
//     }
//   ]
  
  
//8. Indique os restaurantes com latitude inferior a -95,7
db.restaurants.find({"address.coord.0":{$lt:-95.7}},{address:1,nome:1,_id:0})
// [
//   {
//     address: {
//       building: '3707',
//       coord: [ -101.8945214, 33.5197474 ],
//       rua: '82 Street',
//       zipcode: '11372'
//     },
//     nome: 'Burger King'
//   },
//   {
//     address: {
//       building: '15259',
//       coord: [ -119.6368672, 36.2504996 ],
//       rua: '10 Avenue',
//       zipcode: '11357'
//     },
//     nome: "Cascarino'S"
//   },
//   {
//     address: {
//       building: '60',
//       coord: [ -111.9975205, 42.0970258 ],
//       rua: 'West Side Highway',
//       zipcode: '10006'
//     },
//     nome: 'Sports Center At Chelsea Piers (Sushi Bar)'
//   }
// ]

//9. Indique os restaurantes que não têm gastronomia "American", tiveram uma (ou mais) pontuação superior a 70 e estão numa latitude inferior a -65.
db.restaurants.find({gastronomia:{$ne:"American"},grades:{$elemMatch:{score:{$gt:70}}},"address.coord.0":{$lt:-65}},{address:1,nome:1,_id:0})
// [
//     {
//       address: {
//         building: '345',
//         coord: [ -73.9864626, 40.7266739 ],
//         rua: 'East 6 Street',
//         zipcode: '10003'
//       },
//       gastronomia: 'Indian',
//       nome: 'Gandhi'
//     },
//     {
//       address: {
//         building: '130',
//         coord: [ -73.984758, 40.7457939 ],
//         rua: 'Madison Avenue',
//         zipcode: '10016'
//       },
//       gastronomia: 'Pizza/Italian',
//       nome: 'Bella Napoli'
//     },
//     {
//       address: {
//         building: '101',
//         coord: [ -73.9243061, 40.8276297 ],
//         rua: 'East 161 Street',
//         zipcode: '10451'
//       },
//       gastronomia: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)',
//       nome: 'El Molino Rojo Restaurant'
//     },
//     {
//       address: {
//         building: '289',
//         coord: [ -73.94610279999999, 40.7137587 ],
//         rua: 'Manhattan Avenue',
//         zipcode: '11211'
//       },
//       gastronomia: 'Bakery',
//       nome: 'Fortunato Bros Cafe & Bakery'
//     },
//     {
//       address: {
//         building: '231',
//         coord: [ -73.9772294, 40.7527262 ],
//         rua: 'Grand Central Station',
//         zipcode: '10017'
//       },
//       gastronomia: 'Italian',
//       nome: 'Two Boots Grand Central'
//     }
// ]

// 10. Liste o restaurant_id, o nome, a localidade e gastronomia dos restaurantes cujo nome começam por "Wil".
db.restaurants.find({nome:{$regex:/^Wil/}},{restaurant_id:1,nome:1,localidade:1,gastronomia:1,_id:0})
// [
//   {
//     localidade: 'Brooklyn',
//     gastronomia: 'Delicatessen',
//     nome: "Wilken'S Fine Food",
//     restaurant_id: '40356483'
//   },
//   {
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     nome: 'Wild Asia',
//     restaurant_id: '40357217'
//   },
//   {
//     localidade: 'Bronx',
//     gastronomia: 'Pizza',
//     nome: 'Wilbel Pizza',
//     restaurant_id: '40871979'
//   }
// ]

//11. Liste o nome, a localidade e a gastronomia dos restaurantes que pertencem ao Bronx e cuja gastronomia é do tipo "American" ou "Chinese".
db.restaurants.find({localidade:"Bronx",$or:[{"gastronomia":"American"},{"gastronomia":"Chinese"}]},{nome:1,localidade:1,gastronomia:1,_id:0}).pretty() // ou db.restaurants.find({localidade:"Bronx",gastronomia:{$in:["American","Chinese"]}},{nome:1,localidade:1,gastronomia:1,_id:0})
// [
//   { localidade: 'Bronx', gastronomia: 'American', nome: 'Wild Asia' },
//   { localidade: 'Bronx', gastronomia: 'Chinese', nome: 'Happy Garden' },
//   { localidade: 'Bronx', gastronomia: 'Chinese', nome: 'Happy Garden' },
//   { localidade: 'Bronx', gastronomia: 'American', nome: 'Manhem Club' },
//   {
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     nome: 'The New Starling Athletic Club Of The Bronx'
//   },
//   {
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     nome: 'Yankee Tavern'
//   },
//   {
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     nome: 'The Punch Bowl'
//   },
//   { localidade: 'Bronx', gastronomia: 'American', nome: 'Munchtime' },
//   {
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     nome: 'Marina Delray'
//   },
//   
// ...]

//12. Liste o restaurant_id, o nome, a localidade e a gastronomia dos restaurantes localizados em "Staten Island", "Queens", ou "Brooklyn"
db.restaurants.find({localidade:{$in:["Staten Island","Queens","Brooklyn"]}},{restaurant_id:1,nome:1,localidade:1,gastronomia:1,_id:0}) // ou db.restaurants.find({$or:[{"localidade":"Staten Island"},{"localidade":"Queens"},{"localidade":"Brooklyn"}]},{restaurant_id:1,nome:1,localidade:1,gastronomia:1,_id:0})
// [
//     {
//       localidade: 'Queens',
//       gastronomia: 'American',
//       nome: 'Brunos On The Boulevard',
//       restaurant_id: '40356151'
//     },
//     {
//       localidade: 'Brooklyn',
//       gastronomia: 'American',
//       nome: 'Riviera Caterer',
//       restaurant_id: '40356018'
//     },
//     {
//       localidade: 'Brooklyn',
//       gastronomia: 'Delicatessen',
//       nome: "Wilken'S Fine Food",
//       restaurant_id: '40356483'
//     },
//     {
//       localidade: 'Staten Island',
//       gastronomia: 'Jewish/Kosher',
//       nome: 'Kosher Island',
//       restaurant_id: '40356442'
//     },
// ...]

// 13. Liste o nome, a localidade, o score e gastronomia dos restaurantes que alcançaram sempre pontuações inferiores ou igual a 3.
db.restaurants.find({'grades.score':{$lte:3}},{nome:1,localidade:1,gastronomia:1,'grades.score':1,_id:0})
// [
//   {
//     localidade: 'Manhattan',
//     gastronomia: 'Irish',
//     grades: [ { score: 2 }, { score: 11 }, { score: 12 }, { score: 12 } ],
//     nome: 'Dj Reynolds Pub And Restaurant'
//   },
//   {
//     localidade: 'Bronx',
//     gastronomia: 'Bakery',
//     grades: [
//       { score: 2 },
//       { score: 6 },
//       { score: 10 },
//       { score: 9 },
//       { score: 14 }
//     ],
//     nome: 'Morris Park Bake Shop'
//   },
//   {
//     localidade: 'Bronx',
//     gastronomia: 'American',
//     grades: [ { score: 11 }, { score: 4 }, { score: 3 } ],
//     nome: 'Wild Asia'
//   },
//   ...]

//14. Liste o nome e as avaliações dos restaurantes que obtiveram uma avaliação com um grade "A", um score 10 na data "2014-08-11T00: 00: 00Z" (ISODATE).
db.restaurants.find({grades:{$elemMatch:{date:ISODate("2014-08-11T00:00:00Z"),grade:"A",score:10}}},{nome:1,grades:1,_id:0})
// [
//     {
//       grades: [
//         {
//           date: ISODate("2014-08-11T00:00:00.000Z"),
//           grade: 'A',
//           score: 10
//         },
//         {
//           date: ISODate("2014-03-14T00:00:00.000Z"),
//           grade: 'A',
//           score: 3
//         },
//         {
//           date: ISODate("2013-01-16T00:00:00.000Z"),
//           grade: 'A',
//           score: 10
//         },
//         {
//           date: ISODate("2012-07-12T00:00:00.000Z"),
//           grade: 'A',
//           score: 9
//         }
//       ],
//       nome: 'Serendipity 3'
//     },
//     {
//       grades: [
//         {
//           date: ISODate("2014-08-11T00:00:00.000Z"),
//           grade: 'A',
//           score: 10
//         },
//         {
//           date: ISODate("2013-08-30T00:00:00.000Z"),
//           grade: 'A',
//           score: 12
//         },
//         {
//           date: ISODate("2012-08-31T00:00:00.000Z"),
//           grade: 'A',
//           score: 4
//         },
//         {
//           date: ISODate("2012-04-13T00:00:00.000Z"),
//           grade: 'A',
//           score: 9
//         }
//       ],
//       nome: 'Mutual Of America'
//     },
// ...]

//15. Liste o restaurant_id, o nome e os score dos restaurantes nos quais a segunda avaliação foi grade "A" e ocorreu em ISODATE "2014-08-11T00: 00: 00Z".
db.restaurants.find({"grades.1.grade":"A", "grades.1.date":ISODate("2014-08-11T00:00:00Z")},{_id:0, "restaurant_id":1,"nome":1,"grades.score":1})
// [
//   {
//     grades: [
//       { score: 10 },
//       { score: 9 },
//       { score: 13 },
//       { score: 10 },
//       { score: 11 }
//     ],
//     nome: 'Club Macanudo (Cigar Bar)',
//     restaurant_id: '40526406'
//   },
//   {
//     grades: [
//       { score: 9 },
//       { score: 10 },
//       { score: 22 },
//       { score: 5 },
//       { score: 11 }
//     ],
//     nome: "Gene'S Coffee Shop",
//     restaurant_id: '40614916'
//   }
// ]

//16. Liste o restaurant_id, o nome, o endereço (address) e as coordenadas geográficas (coord) dos restaurantes onde o 2º elemento da matriz de coordenadas tem um valor superior a 42 e inferior ou igual a 52.
db.restaurants.find({"address.coord.1":{$gt:42,$lt:52}},{restaurant_id:1,nome:1,address:1,_id:0})
// [
//   {
//     address: {
//       building: '47',
//       coord: [ -78.877224, 42.89546199999999 ],
//       rua: 'Broadway @ Trinity Pl',
//       zipcode: '10006'
//     },
//     nome: "T.G.I. Friday'S",
//     restaurant_id: '40387990'
//   },
//   {
//     address: {
//       building: '1',
//       coord: [ -0.7119979, 51.6514664 ],
//       rua: 'Pennplaza E, Penn Sta',
//       zipcode: '10001'
//     },
//     nome: 'T.G.I. Fridays',
//     restaurant_id: '40388936'
//   },
// ...]

//17. Liste nome, gastronomia e localidade de todos os restaurantes ordenando por ordem crescente da gastronomia e, em segundo, por ordem decrescente de localidade.
db.restaurants.find({},{nome:1,gastronomia:1,localidade:1,_id:0}).sort({gastronomia:1,localidade:-1})
// [
//     {
//       localidade: 'Manhattan',
//       gastronomia: 'Afghan',
//       nome: 'Afghan Kebab House'
//     },
//     {
//       localidade: 'Manhattan',
//       gastronomia: 'Afghan',
//       nome: 'Khyber Pass'
//     },
//     {
//       localidade: 'Manhattan',
//       gastronomia: 'Afghan',
//       nome: 'Afghan Kebab House #1'
//     },
//     {
//       localidade: 'Manhattan',
//       gastronomia: 'Afghan',
//       nome: 'Ariana Kebab House'
//     },
//     {
//       localidade: 'Queens',
//       gastronomia: 'African',
//       nome: 'Africana Restaurant'
//     },
//     { localidade: 'Brooklyn', gastronomia: 'African', nome: 'Madiba' },
//     {
//       localidade: 'Bronx',
//       gastronomia: 'African',
//       nome: 'African Terrace'
//     },
// ...]  

//18. Liste nome, localidade, grade e gastronomia de todos os restaurantes localizados em Brooklyn que não incluem gastronomia "American" e obtiveram uma classificação (grade) "A". Deve apresentá-los por ordem decrescente de gastronomia.
db.restaurants.find({localidade:"Brooklyn",gastronomia:{$ne:"American"},grades:{$elemMatch:{grade:"A"}}},{nome:1,localidade:1,gastronomia:1,grades:1,_id:0}).sort({gastronomia:-1})
// [
//   {
//     localidade: 'Brooklyn',
//     gastronomia: 'Vegetarian',
//     grades: [
//       {
//         date: ISODate("2014-07-28T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       },
//       {
//         date: ISODate("2014-02-25T00:00:00.000Z"),
//         grade: 'A',
//         score: 5
//       },
//       {
//         date: ISODate("2013-06-01T00:00:00.000Z"),
//         grade: 'A',
//         score: 7
//       },
//       {
//         date: ISODate("2012-10-16T00:00:00.000Z"),
//         grade: 'C',
//         score: 28
//       },
//       {
//         date: ISODate("2011-10-06T00:00:00.000Z"),
//         grade: 'A',
//         score: 10
//       }
//     ],
//     nome: 'Strictly Vegetarian'
//   },
// ...]

//19. Indique o número total de avaliações (numGrades) na coleção.
db.restaurants.aggregate([{$group:{_id:"numTotalGrades",numGrades:{$sum:{$size:"$grades"}}}}])
// [ { _id: 'numTotalGrades', numGrades: 18142 } ]

// 20. Apresente o nome e número de avaliações (numGrades) dos 3 restaurante com mais avaliações.
db.restaurants.aggregate([{$unwind:"$grades"},{$group:{_id:"$nome", numGrades:{$sum:1}}},{$project:{_id:0,nome:"$_id", numGrades:1}},{$sort:{numGrades:-1}},{$limit:3}])
// [
//   { numGrades: 424, nome: 'Starbucks Coffee' },
//   { numGrades: 385, nome: "Mcdonald'S" },
//   { numGrades: 185, nome: "Domino'S Pizza" }
// ]

//21. Apresente o número total de avaliações (numGrades) em cada dia da semana.
db.restaurants.aggregate([{$unwind: "$grades"},{$project: {dayOfWeek: { $dayOfWeek: "$grades.date"}}},{$group: {_id: "$dayOfWeek", numGrades: {$sum: 1}}},{$project: {_id: 0, dayOfWeek: "$_id", numGrades: 1}}])
// [
//   { numGrades: 529, dayOfWeek: 7 },
//   { numGrades: 3878, dayOfWeek: 3 },
//   { numGrades: 2440, dayOfWeek: 6 },
//   { numGrades: 4118, dayOfWeek: 4 },db.restaurants.aggregate([{$project:{_id:0,nome:1,numGrades:{$size:"$grades"}}},{$sort:{numGrades:-1}},{$limit:3}])
//   { numGrades: 3984, dayOfWeek: 5 },
//   { numGrades: 3186, dayOfWeek: 2 },
//   { numGrades: 7, dayOfWeek: 1 }
// ]

//22. Conte o total de restaurante existentes em cada localidade.
db.restaurants.aggregate([{$group:{_id:"$localidade",numRest:{$sum:1}}},{$project:{_id:0,localidade:"$_id",numRest:1}}])
// [
//   { numRest: 738, localidade: 'Queens' },
//   { numRest: 309, localidade: 'Bronx' },
//   { numRest: 158, localidade: 'Staten Island' },
//   { numRest: 684, localidade: 'Brooklyn' },
//   { numRest: 1883, localidade: 'Manhattan' }
// ]

//23. Indique os restaurantes que têm gastronomia "Portuguese", o somatório de score é superior a 50 e estão numa latitude inferior a -60.
db.restaurants.aggregate([ { $match: { gastronomia: "Portuguese", "address.coord.0": { $lt: -60 } } }, { $unwind: "$grades" }, { $group: { _id: "$nome", totalScore: { $sum: "$grades.score" } } }, { $match: { totalScore: { $gt: 50 } } }] )
// [
//   { _id: 'Mateus Restaurant', totalScore: 67 },
//   { _id: 'Pao', totalScore: 80 }
// ]

//24. Apresente o número de gastronomias diferentes na rua "Fifth Avenue"
db.restaurants.aggregate([{$match: { "address.rua": "Fifth Avenue"}},{ $group: { _id: "address.rua", totalRest: {$addToSet:"$gastronomia"}}}, {$project: {_id: 1, totalGast: {$size: "$totalRest"}}} ])
// [ { _id: 'address.rua', totalGast: 4 } ]

//25. Apresente o nome e o score médio (avgScore) e número de avaliações (numGrades) dos restaurantes com score médio superior a 30 desde 1-Jan-2014.
db.restaurants.aggregate([{$match:{"grades.date":{$gte: ISODate("2014-01-01T00:00:00Z")}}},{$unwind:"$grades"},{$group:{_id:"$nome",avgScore:{$avg:"$grades.score"},numGrades:{$sum:1}}},{$match:{avgScore:{$gt:30}}}])
// [
//   { _id: 'Victoria Pizza', avgScore: 30.8, numGrades: 5 },
//   { _id: 'Live Bait Bar & Restaurant', avgScore: 32.6, numGrades: 5 },
//   {
//     _id: 'Nanni Restaurant',
//     avgScore: 32.142857142857146,
//     numGrades: 7
//   },
//   {
//     _id: 'West 79Th Street Boat Basin Cafe',
//     avgScore: 36,
//     numGrades: 3
//   },
//   {
//     _id: "Murals On 54/Randolphs'S",
//     avgScore: 33.666666666666664,
//     numGrades: 6
//   },
//   {
//     _id: "Billy'S Sport Bar Restaurant & Lounge",
//     avgScore: 30.6,
//     numGrades: 5
//   },
//   { _id: 'Trinidad Golden Place', avgScore: 30.8, numGrades: 5 }
// ]

//26. Apresente o número total de avaliações dadas por dia.
db.restaurants.aggregate([{$unwind:"$grades"},{$group:{_id:"$grades.date",numGrades:{$sum:1}}}])
// [
//     { _id: ISODate("2012-02-13T00:00:00.000Z"), numGrades: 29 },
//     { _id: ISODate("2012-06-21T00:00:00.000Z"), numGrades: 16 },
//     { _id: ISODate("2012-11-19T00:00:00.000Z"), numGrades: 14 },
//     { _id: ISODate("2014-11-13T00:00:00.000Z"), numGrades: 32 },
//     { _id: ISODate("2013-06-22T00:00:00.000Z"), numGrades: 3 },
//     { _id: ISODate("2011-10-19T00:00:00.000Z"), numGrades: 15 },
//     { _id: ISODate("2012-06-26T00:00:00.000Z"), numGrades: 21 },
//     { _id: ISODate("2014-02-03T00:00:00.000Z"), numGrades: 18 },
//     { _id: ISODate("2011-02-11T00:00:00.000Z"), numGrades: 2 },
//     { _id: ISODate("2012-06-15T00:00:00.000Z"), numGrades: 15 },
//     { _id: ISODate("2013-12-30T00:00:00.000Z"), numGrades: 13 },
//     { _id: ISODate("2012-09-28T00:00:00.000Z"), numGrades: 7 },
// ...]  

// 27. Apresente quantos restaurantes tem de cada gastronomia na rua "Fifth Avenue"
db.restaurants.aggregate([{$match:{"address.rua":"Fifth Avenue"}},{$group:{_id:"$gastronomia", totalRest:{$sum:1}}}])
// [
//   {
//     _id: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)',
//     totalRest: 1
//   },
//   { _id: 'Irish', totalRest: 1 },
//   { _id: 'Sandwiches/Salads/Mixed Buffet', totalRest: 1 },
//   { _id: 'American', totalRest: 4 }
// ]

//28. Apresente o nome e o número de avaliações (numGrades) dos restaurantes que têm mais de 100 avaliações.
db.restaurants.aggregate([{$unwind: "$grades"},{$group:{_id:"$nome",totalAva:{$sum:1}}},{$match:{totalAva:{$gt:100}}}])
// [
//   { _id: 'Burger King', totalAva: 180 },
//   { _id: "Mcdonald'S", totalAva: 385 },
//   { _id: 'Starbucks Coffee', totalAva: 424 },
//   { _id: "Domino'S Pizza", totalAva: 185 },
//   { _id: 'White Castle', totalAva: 105 }
// ]

//29. Apresente o nome das gelatarias (gastronomia "Ice Cream, Gelato, Yogurt, Ices") existem em Manhattan?
db.restaurants.find({gastronomia:"Ice Cream, Gelato, Yogurt, Ices",localidade:"Manhattan"},{_id:0,nome:1})
// [
//   { nome: 'Haagen-Dazs' },
//   { nome: 'Ciao Bella' },
//   { nome: "Dylan'S Candybar" }
// ]

//30. Aprsente o nome de todos os restaurantes que contém  no nome "ave".
db.restaurants.find({nome:{$regex:/ave/}},{_id:0,nome:1})
// [
//     { nome: 'White Horse Tavern' },
//     { nome: 'Yankee Tavern' },
//     { nome: "Lavelle'S Admiral'S Club" },
//     { nome: "Joyce'S Tavern" },
//     { nome: "Denino'S Pizzeria Tavern" },
//     { nome: "Desmond'S Tavern" },
//     { nome: 'Grassroot Tavern' },
//     { nome: 'Beaver Pond' },
//     { nome: 'Cherry Tavern' },
//     { nome: "Reif'S Tavern" },
//     { nome: 'White Horse Tavern' },
//     { nome: "Pete'S Tavern" },
//     { nome: 'Greenpoint Tavern' },
// ...]  
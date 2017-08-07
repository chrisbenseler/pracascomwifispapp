const fs = require('fs')
const csv = require('fast-csv')
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyA0F0GGjJclYIdrfeVxBTZeTwIXtnKmpF8'
});

const stream = fs.createReadStream("pracas.csv")

let items = [];

const geocodeAddress = (address) => {
  console.log('will get data from', address.address)
  return new Promise( (resolve, reject) => {

    googleMapsClient.geocode({ address: address.address + ', São Paulo' }, (err, response) => {
      if(err) {
        console.error('Error on', address.address, err)
        reject(err)
      }
      console.log('got data from', address.address)
      if(response.json.results.length > 0) {
        console.log('has location')
        address.location = response.json.results[0].geometry.location
      }
      resolve(address)
    })
  })
}


stream
.pipe(csv())
.on('data', data => {
  if(data[5] !== '') {
    items.push({ bairro: data[4], id: data[0], name: data[5], address: data[5], street: data[6], zone: data[2], url: data[11].toLowerCase() })
  }
})
.on('end', data => {

  const promises = items.map( address => geocodeAddress(address) )

  Promise.all(promises).then( geocoded => {
      console.log('all resolved', geocoded)
      fs.writeFile('data.json', JSON.stringify({ plazas: geocoded }), (err) => {
        console.log('File has been saved')
      })
  })
  .catch(err => {
    console.error(err)
  })
  
})


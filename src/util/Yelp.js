const clientId = 'm61NdXJbPz1nVmzKO0XRfA';
const secret = 'c7UqBiVbpWW2xfTA9VdYER6fNWdj7akegrb8ZxGHIp5cCzszXNMStsrpcWDB5qNq';
let accessToken

const Yelp = {
  getAccessToken(){
    if(accessToken) {
      return new Promise(resolve => resolve(accessToken));
    } // end of if conditional
      return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, {method: 'POST'}).then(response => { return response.json(); }).then( jsonResponse => {
        accessToken = jsonResponse.access_token;
      });
  }, // end of getAccessToken method

  search(term,location,sortBy){
    return Yelp.getAccessToken().then(() => {
      return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
        headers: { Authorization: `Bearer ${accessToken}` }
      }); // end of return fetch
    }).then((response) => {
      return response.json()
    }).then(function(jsonResponse){
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    })
  }// end of search
};


export default Yelp;

// Possible alternative to instantly resolving promise from getAccessToken
// Promise.resolve(accessToken).then(function(myValue) {
//   console.log(myValue);
// }, function(myValue){
//   console.log('Instant promise was not resolved for some reason')
// });

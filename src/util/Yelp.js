const clientId = 'm61NdXJbPz1nVmzKO0XRfA';
const secret = 'c7UqBiVbpWW2xfTA9VdYER6fNWdj7akegrb8ZxGHIp5cCzszXNMStsrpcWDB5qNq';
const accessToken;

const Yelp = {
  getAccessToken(){
    if(accessToken) {
      return new Promise(resolve => resolve(accessToken)); //end of new Promise
    }
  }
};

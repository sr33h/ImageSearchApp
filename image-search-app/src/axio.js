import axios from 'axios';

const searchImage = async () => {
    let response = await axios.get('https://api.thecatapi.com/v1/images/search',
    {
        headers:{
            'x-api-key': 'OpKYxtvcOvfHdN7GtZLeUw9j3t2tNryfJGzMuph66rtU42q65mKa2ioD4p2dwu1g'

        },
        params:{
              
        }
    })
return response;

}

export default searchImage;
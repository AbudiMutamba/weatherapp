import axios from "axios"




    const getData =  async (location ='Kampala' ) => {
        const API_URL = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&q=${location}`
        let response = ''

        try {
            response = await axios.get(API_URL)
            // console.log(response)
            let { data } = response
            return(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
            console.log(response)

            return{'error': "Resource error"}

        
        }
    }

    export default getData
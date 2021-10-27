import React from 'react'
import getData from '../helpers/fetchData'


function Hero() {

    const [location, setlocation] = React.useState('')
    const [weatherinfo, setWeatherinfo] = React.useState({})
    const [error, SetError] = React.useState('')

    
    const handleInput = event =>{
        const {value: location } = event.target
        // console.log(location)
        // console.log(event.target.value)
        setlocation(location)
    }

    const handleSubmit =async event => {
        event.preventDefault()
        
        setWeatherinfo({})


         const response = await getData(location)

      // setweatherinfo(response) // I will be given objects to destructor


        // console.log(event)
        // console.log('From submitted')
        
        

       const {location: {country, lat, lon}} = response
       const {current:{condition: {text,icon,code}}} = response

       setWeatherinfo({country,lat, lon, text, icon, code} )
     

    }
    const {country, lat, lon, text, icon, code} = weatherinfo

    return (
        <div>
           <h1> Weather App</h1>
           <p>Use this App to findout the current weather info of a location</p>
           
            <form action="#" method="post" onSubmit={handleSubmit} >

                <input
                
                    type="text"
                    placeholder="Location"
                    onChange={handleInput}

                />
                <input type="submit" value="Go"/>

            </form>
            {country}<br/>
            {lat}<br/>
            {lon}<br/>
            {text}<br/>
           {icon && <img src={icon} alt='image'/>}<br/>
            {code}<br/>
      
        </div>
            
     
    )
}

export default Hero

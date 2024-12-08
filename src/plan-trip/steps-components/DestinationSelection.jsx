import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const DestinationSelection = () => {
    const [destination, setDestination] = useState("")
    return (
        <div className='mt-10 space-y-10'>
            <span className="text-2xl md:text-3xl font-medium bg-green-200 px-4 py-2 rounded-lg text-center">
                What is your Destination?
            </span>
            <div className="w-full">
                <GooglePlacesAutocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                    selectProps={{
                        destination,
                        onChange: (value) => setDestination(value),
                        placeholder: "Search your destination",
                    }}
                    styles={{
                        container: (provided) => ({ ...provided, width: "100%" }),
                        input: (provided) => ({ ...provided, fontSize: "1rem" }),
                    }}
                />
            </div>
        </div>
    )
}

export default DestinationSelection
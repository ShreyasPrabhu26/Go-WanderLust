import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useFormContext } from "react-hook-form";

const DestinationSelection = () => {
    const { setValue, watch, formState: { errors } } = useFormContext();
    const destination = watch("destination");

    return (
        <div className="mt-10 space-y-6">
            <span className="text-2xl md:text-3xl font-medium bg-green-200 px-4 py-2 rounded-lg text-center">
                What is your Destination?
            </span>
            <div className="w-full">
                <GooglePlacesAutocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                    selectProps={{
                        value: destination,
                        onChange: (value) => setValue("destination", value, { shouldValidate: true }),
                        placeholder: "Search your destination",
                    }}
                    styles={{
                        container: (provided) => ({ ...provided, width: "100%" }),
                        input: (provided) => ({ ...provided, fontSize: "1rem" }),
                    }}
                />
                {errors.destination && (
                    <p className="text-red-500 text-sm mt-2">{errors.destination.message}</p>
                )}
            </div>
        </div>
    );
};

export default DestinationSelection;

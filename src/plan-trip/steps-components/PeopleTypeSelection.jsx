import { TRAVEL_LIST } from "@/constants/options"
import { useState } from "react"

const PeopleTypeSelection = () => {
    const [selectedPeopleType, setSelectedPeopleType] = useState("")
    return (
        <div className="w-full text-center space-y-6">
            <span className="bg-green-200 p-2 rounded-lg text-xl font-medium">
                Whome do you plan on travelling with on your next Adventure?
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                {TRAVEL_LIST.map((peopleType) => (
                    <div
                        key={peopleType.id}
                        onClick={() => setSelectedPeopleType(peopleType.id)}
                        className={`flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer hover:shadow-lg  h-36
                    ${selectedPeopleType === peopleType.id
                                ? "border-primary bg-blue-400 text-primary-foreground"
                                : "border-border bg-muted text-foreground"
                            }`}
                        style={{
                            minWidth: "200px",
                            maxWidth: "300px",
                        }}
                    >
                        <span className="text-3xl">{peopleType.icon}</span>
                        <span className="font-semibold text-lg mt-2 text-wrap">{peopleType.title}</span>
                        <p className="text-sm text-center mt-1">{peopleType.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PeopleTypeSelection
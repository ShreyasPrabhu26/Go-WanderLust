import { Input } from "@/components/ui/input"

const DaysSelection = () => {
    return (
        <div className="mt-10 space-y-10 w-full">
            <span className="bg-green-200 p-2 rounded-lg md:text-xl text-center font-medium">
                How many days are you planning your trip?
            </span>
            <Input
                className="outline-double w-full"
                placeholder={"Ex: 2"}
                type={"number"}
                min="1"
                max="25"
            />
        </div>
    )
}

export default DaysSelection
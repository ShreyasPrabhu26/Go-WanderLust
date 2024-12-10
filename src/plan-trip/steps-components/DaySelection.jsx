import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DaysSelection = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="mt-10 space-y-6 w-full text-center">
            <span className="bg-green-200 p-2 rounded-lg md:text-xl text-center font-medium">
                How many days are you planning your trip?
            </span>
            <Input
                className={`outline-double w-full ${errors.days ? "border-red-500" : ""}`}
                placeholder="Ex: 2"
                type="number"
                min="1"
                max="25"
                {...register("days", {
                    required: "Please enter the number of days.",
                    min: { value: 1, message: "Days must be at least 1." },
                    max: { value: 25, message: "Days cannot exceed 25." },
                })}
            />
            {errors.days && (
                <p className="text-red-500 text-sm mt-1">{errors.days.message}</p>
            )}
        </div>
    );
};

export default DaysSelection;

import { TRAVEL_LIST } from "@/constants/options";
import { useFormContext } from "react-hook-form";

const PeopleTypeSelection = () => {
    const { setValue, watch, formState: { errors } } = useFormContext();
    const selectedPeopleType = watch("peopleType");

    return (
        <div className="w-full text-center space-y-6">
            <span className="bg-green-200 p-2 rounded-lg text-xl font-medium">
                Whom do you plan on traveling with on your next adventure?
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                {TRAVEL_LIST.map((peopleType) => (
                    <div
                        key={peopleType.id}
                        onClick={() => setValue("peopleType", peopleType.title, { shouldValidate: true })}
                        className={`flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer hover:shadow-lg h-36
                        ${selectedPeopleType === peopleType.title
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
            {errors.peopleType && (
                <p className="text-red-500 text-sm mt-2">{errors.peopleType.message}</p>
            )}
        </div>
    );
};

export default PeopleTypeSelection;

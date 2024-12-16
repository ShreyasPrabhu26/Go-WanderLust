import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import Header from "./Header";
import DestinationSelection from "../../components/steps-components/DestinationSelection";
import DaysSelection from "../../components/steps-components/DaySelection";
import BudgetSelection from "../../components/steps-components/BudgetSelection";
import PeopleTypeSelection from "../../components/steps-components/PeopleTypeSelection";

import { Button } from "@/components/ui/button";
import chatSession from "@/service/AIModel";
import { db } from "@/service/firebase";
import { useAuth } from "@/hooks/useAuth";
import { doc, setDoc } from "firebase/firestore";

const PlanTrip = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isValidInput, setIsValidInput] = useState(true);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    const methods = useForm();

    const saveTrip = async (userSelections, tripDataFromAi) => {
        if (userSelections?.destination)
            userSelections.destination = userSelections?.destination?.label

        const docID = Date.now().toString();
        await setDoc(doc(db, "AITrips", docID), {
            id: docID,
            userEmail: user?.email,
            userSelections,
            tripDataFromAi: JSON.parse(tripDataFromAi),
        });
    };

    const onSubmit = async (data) => {
        try {
            if (!data) {
                throw new Error("Error retrieving form data!");
            }
            setLoading(true);

            const { destination, budget, days, peopleType } = data;

            if (!destination?.value || !budget || !days || !peopleType) {
                throw new Error("Incomplete form data. Please fill all required fields.");
            }

            const AI_PROMPT = `
                Generate a Travel Plan for Location: ${destination.label} for ${days} days 
                with ${peopleType}, staying within a ${budget} budget. 
                Provide the following details:
                - Hotel options (HotelName, Hotel Address, Price, Hotel Image URL, Geo Coordinates, Rating, Description).
                - A detailed itinerary for ${days} days with:
                  - Place Name, Place Details, Place Image URL (don’t give example placeholder), Geo Coordinates, Place Address, Ticket Pricing, 
                    Travel Time to each location, and the best time to visit.
                Format the output in JSON.
            `;

            const result = await chatSession.sendMessage(AI_PROMPT);
            const finalResult = result?.response?.text();
            await saveTrip(data, finalResult);
        } catch (error) {
            console.error("Error in onSubmit:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleNext = async () => {
        setIsValidInput(await methods.trigger());
        if (isValidInput && currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const steps = [
        <DestinationSelection />,
        <DaysSelection />,
        <BudgetSelection />,
        <PeopleTypeSelection />,
    ];

    return (
        <FormProvider {...methods}>
            <div className="h-full flex flex-col items-center p-5 space-y-5 overflow-auto bg-gradient-to-r from-blue-50 to-blue-100">
                <Header />
                <main className="flex flex-col items-center max-w-2xl w-full space-y-10">
                    {loading && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
                        </div>
                    )}
                    <form>
                        {steps[currentStep - 1]}
                    </form>
                    <div className="flex justify-between w-full">
                        <Button
                            onClick={handlePrevious}
                            disabled={currentStep === 1 || loading}
                            className="bg-blue-300"
                        >
                            Previous
                        </Button>
                        {currentStep === steps.length ? (
                            <Button
                                onClick={methods.handleSubmit(onSubmit)}
                                className="bg-green-500"
                                disabled={loading}
                            >
                                {loading ? "Generating..." : "Generate Trip"}
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                className="bg-green-200"
                                disabled={loading}
                            >
                                Next
                            </Button>
                        )}
                    </div>
                </main>
            </div>
        </FormProvider>
    );
};

export default PlanTrip;

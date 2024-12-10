import React, { useState } from "react";


import Header from "./Header";
import DestinationSelection from "./steps-components/DestinationSelection";
import DaysSelection from "./steps-components/DaySelection";
import BudgetSelection from "./steps-components/BudgetSelection";
import PeopleTypeSelection from "./steps-components/PeopleTypeSelection";

import { Button } from "@/components/ui/button";

import { useForm, FormProvider } from "react-hook-form"


const PlanTrip = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isValidInput, setIsValidInput] = useState(true);

    const methods = useForm();
    const onSubmit = (data) => console.log(data);

    const handleNext = async () => {
        setIsValidInput(await methods.trigger())
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
                    <form>
                        {steps[currentStep - 1]}
                    </form>
                    <div className="flex justify-between w-full">
                        <Button
                            onClick={handlePrevious}
                            disabled={currentStep === 1}
                            className="bg-blue-300"
                        >
                            Previous
                        </Button>
                        {currentStep === steps.length ? (
                            <Button onClick={methods.handleSubmit(onSubmit)} className="bg-green-500">
                                Generate Trip
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                className="bg-green-200">
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
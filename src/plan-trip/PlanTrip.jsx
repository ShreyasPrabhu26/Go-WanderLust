import React, { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationEllipsis,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import Header from "./Header";
import DestinationSelection from "./steps-components/DestinationSelection";
import DaysSelection from "./steps-components/DaySelection";
import BudgetSelection from "./steps-components/BudgetSelection";
import PeopleTypeSelection from "./steps-components/PeopleTypeSelection";

import { Button } from "@/components/ui/button";

const PlanTrip = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        <DestinationSelection />,
        <DaysSelection />,
        <BudgetSelection />,
        <PeopleTypeSelection />,
    ];

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="h-full flex flex-col items-center  p-5 space-y-5 overflow-auto bg-gradient-to-r from-blue-50 to-blue-100">
            <Header />
            <main className="flex flex-col items-center max-w-2xl w-full space-y-10">
                <div>{steps[currentStep - 1]}</div>
                {currentStep === steps.length && (
                    <Button size="lg" className="w-[80vw] md:w-auto">
                        Generate Trip
                    </Button>
                )}
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={(e) => {
                                    e.preventDefault();
                                    handlePrevious();
                                }}
                                className={currentStep === 1 ? "hidden" : "bg-blue-300 outline-double"}
                            />
                        </PaginationItem>
                        <PaginationItem className={(currentStep === 1 || currentStep === steps.length) ? "hidden" : ""}>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNext();
                                }}
                                className={currentStep === steps.length ? "hidden" : "bg-green-200 outline-double"}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </main>
        </div>
    );
};


export default PlanTrip;
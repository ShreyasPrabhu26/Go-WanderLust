import { BUDGET_OPTIONS } from "@/constants/options"
import { useState } from "react"

const BudgetSelection = () => {
    const [selectedBudget, setSelectedBudget] = useState("");

    return (
        <div className="w-full text-center space-y-6">
            <span className="bg-green-200 p-2 rounded-lg text-2xl font-medium">
                What is your Budget?
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 ">
                {BUDGET_OPTIONS.map((budget) => (
                    <div
                        key={budget.id}
                        onClick={() => setSelectedBudget(budget.id)}
                        className={`flex flex-col items-center justify-center p-4 md:p-6 border rounded-lg cursor-pointer hover:shadow-lg 
                                    ${selectedBudget === budget.id
                                ? "border-primary bg-blue-400 text-primary-foreground"
                                : "border-border bg-muted text-foreground"
                            }`}
                        style={{
                            width: "100%",
                            maxWidth: "250px",
                            minWidth: "150px",
                            height: "auto",
                        }}
                    >
                        <span className="text-2xl md:text-3xl">{budget.icon}</span>
                        <span className="font-semibold text-base md:text-lg mt-2 text-wrap">
                            {budget.title}
                        </span>
                        <p className="text-sm text-center mt-1 hidden md:block">{budget.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BudgetSelection;

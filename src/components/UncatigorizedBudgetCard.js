import { UNCATIGORIZED_BUDGET_ID, useBudget } from "../context/BudgetContext";
import BudgetCard from "./BudgetCard"


function UncatigorizedBudgetCard(props) {
    const { getBudgetExpenses } = useBudget();
    const amount = getBudgetExpenses(UNCATIGORIZED_BUDGET_ID).reduce(
        (total,expense)=>total + expense.amount, 0
      );
      if (amount===0) return null;
    return (
        <BudgetCard name="Uncategorized" amount={amount} 
          gray {...props} />
    )
}

export default UncatigorizedBudgetCard;

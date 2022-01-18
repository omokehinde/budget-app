import { useState } from "react";
import { Stack, Container, Button } from "react-bootstrap";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import BudgetCard from "./components/BudgetCard";
import { useBudget } from "./context/BudgetContext";

function App() {
  const [show, setShow] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const handleClose = () => setShow(false);
  const handleshow = () => setShow(true);
  const { budgets, getBudgetExpenses } = useBudget();
  function openAddExpenseModal(budgetId) {
    handleshow();
    setAddExpenseModalBudgetId(budgetId);
  }
  return (
    <>
    <Container className="my-4">
      <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary" onClick={handleshow}>Add Budget</Button>
        <Button variant="outline-primary" onClick={handleshow} >Add Expense</Button>
      </Stack>
      <div style={{ display:"grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", 
        alignItems: "flex-start" }}>
          {budgets.map(budget=>{
            const amount = getBudgetExpenses(budget.id).reduce(
              (total,expenses)=>total + expenses.amount, 0
            );
            return <BudgetCard key={budget.id} name={budget.name}
              amount={amount} max={budget.max}
              onAddExpenseClick={()=>openAddExpenseModal(budget.id)} />;
          })}
        </div>
    </Container>
    <AddBudgetModal show={show} handleClose={handleClose}  />
    <AddExpenseModal show={show} 
      handleClose={handleClose} defaultBudgetId={addExpenseModalBudgetId} />
    </>
  );
}

export default App;

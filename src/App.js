import { useState } from "react";
import { Stack, Container, Button } from "react-bootstrap";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import BudgetCard from "./components/BudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import UncatigorizedBudgetCard from "./components/UncatigorizedBudgetCard";
import ViewExpenseModal from "./components/ViewExpenseModal";
import { UNCATIGORIZED_BUDGET_ID, useBudget } from "./context/BudgetContext";

function App() {
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState();
  const handleCloseAddExpenseModal = () => setShowAddExpenseModal(false);
  const handleCloseAddBudgetModal = () => setShowAddBudgetModal(false);
  const handleCloseExpenseModal = () => setShowExpenseModal(false);
  const handleShowAddBudget = () => setShowAddBudgetModal(true);
  const handleShowAddExpense = () => setShowAddExpenseModal(true);
  const handleShowExpenseModal = () => setShowExpenseModal(true);
  const { budgets, getBudgetExpenses } = useBudget();
  function openAddExpenseModal(budgetId) {
    handleShowAddExpense();
    setAddExpenseModalBudgetId(budgetId);
  }
  function openAddBudgetModal() {
    handleShowAddBudget();
  }
  function viewExpenseModal(budgetId) {
    handleShowExpenseModal();
    setViewExpenseModalBudgetId(budgetId);
  }
  return (
    <>
    <Container className="my-4">
      <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary" onClick={handleShowAddBudget}>Add Budget</Button>
        <Button variant="outline-primary" onClick={handleShowAddExpense} >
          Add Expense
        </Button>
      </Stack>
      <div style={{ display:"grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", 
        alignItems: "flex-start" }}>
          <TotalBudgetCard />
          {budgets.map(budget=>{
            const amount = getBudgetExpenses(budget.id).reduce(
              (total,expense)=>total + expense.amount, 0
            );
            return <BudgetCard key={budget.id} name={budget.name}
              amount={amount} max={budget.max}
              onAddExpenseClick={()=>openAddExpenseModal(budget.id)} 
              onViewExpenseClick={()=>viewExpenseModal(budget.id)}/>;
          })}
          <UncatigorizedBudgetCard 
            onAddExpenseClick={()=>openAddExpenseModal(UNCATIGORIZED_BUDGET_ID)} />
        </div>
    </Container>
    <AddBudgetModal show={showAddBudgetModal} handleClose={handleCloseAddBudgetModal}  />
    <AddExpenseModal show={showAddExpenseModal} 
      handleClose={handleCloseAddExpenseModal} defaultBudgetId={addExpenseModalBudgetId} />
    <ViewExpenseModal show={showExpenseModal} budgetId={setViewExpenseModalBudgetId} 
      handleClose={handleCloseExpenseModal} />
    </>
  );
}

export default App;

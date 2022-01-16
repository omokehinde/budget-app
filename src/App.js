import { useState } from "react";
import { Stack, Container, Button } from "react-bootstrap";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleshow = () => setShow(true);
  return (
    <>
    <Container className="my-4">
      <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary" onClick={handleshow}>Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div style={{ display:"grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", 
        alignItems: "flex-start" }}>
          <BudgetCard name={"Entertainment"} amount={5000} max={1000} gray></BudgetCard>
        </div>
    </Container>
    <AddBudgetModal show={show} handleClose={handleClose}  />
    </>
  );
}

export default App;

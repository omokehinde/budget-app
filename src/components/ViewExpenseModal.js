import {Modal, Form, Button, Stack } from "react-bootstrap"
import { UNCATIGORIZED_BUDGET_ID, useBudget } from "../context/BudgetContext";


function ViewExpenseModal({budgetId, show, handleClose}) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudget();
    const budget = UNCATIGORIZED_BUDGET_ID === budgetId ? {name:'Uncategorized',
     id: UNCATIGORIZED_BUDGET_ID} : 
     budgets.find(budget=> budget.id === budgetId);
    return (
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Stack direction="horizontal" gap={2}>
                            <div>Expenses - {budget?.name}  </div>
                            {budgetId !== UNCATIGORIZED_BUDGET_ID && (
                                <Button onClick={()=>{
                                    deleteBudget(budget);
                                    handleClose();
                                    }} 
                                    variant="outline-danger">
                                    Delete
                                </Button>
                            )}
                        </Stack>
                    </Modal.Title>
                </Modal.Header>
                
        </Modal>
    )
}

export default ViewExpenseModal;

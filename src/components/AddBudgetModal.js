import { useState } from "react"
import {Modal, Form, Button } from "react-bootstrap"


function AddBudgetModal({show, handleClose}) {
    function handleSubmit(e) {
        
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group controlId="max" className="mb-3">
                        <Form.Label>Maximum spending</Form.Label>
                        <Form.Control type="text" required type="number" min={0} step={1} />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

export default AddBudgetModal

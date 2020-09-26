import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form }  from 'react-bootstrap'

export default function Body() {
    return (
        <div className="Body">
            <p>Contact form</p>
            <Form>
                <Form.Group>
                    <Form.Label style={{ color: "white"}}>Please write hereafter your first name:</Form.Label>
                    <Form.Control className="mb-3"type ="text" placeholder="Your first name"></Form.Control>
                    <Form.Label style={{ color: "white"}}>Please write hereafter your last name:</Form.Label>
                    <Form.Control className="mb-3" type ="text" placeholder="Your last name"></Form.Control>
                    <Form.Label style={{ color: "white"}}>Please write your mail here:</Form.Label>
                    <Form.Control className="mb-3"type ="email" placeholder="Your email address"></Form.Control>
                </Form.Group>
                <Button>Submit</Button>
            </Form> 
        </div>
    )
}

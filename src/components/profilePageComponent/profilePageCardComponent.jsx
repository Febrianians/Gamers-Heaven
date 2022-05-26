import React from "react";
import { Row, Col, FormGroup, Label, Input, Form } from 'reactstrap'
import styles from './profilePageCardStyle.module.css'
export default function ProfileCardComponent() {
    return (
        <>
            <Form className={styles.form}>
                <Row>
                    <Col md={4} sm={6}>
                    <FormGroup className={styles.FormGroup}>
                        <Label for="Email">
                        Email
                        </Label>
                        <Input
                        name="email"
                        placeholder="user@gmail.com"
                        type="email"
                        />
                    </FormGroup>
                    </Col>
                    <Col md={4} sm={6}>
                    <FormGroup>
                        <Label for="Username">
                        Username
                        </Label>
                        <Input
                        name="username"
                        placeholder="username"
                        type="text"
                        />
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                        <Label for="Password">
                        Password
                        </Label>
                        <Input
                        name="password"
                        placeholder="password user"
                        type="password"
                        />
                    </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="Bio">
                    Bio
                    </Label>
                    <Input
                    name="bio"
                    placeholder="Bio"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">
                    City
                    </Label>
                    <Input
                    name="city"
                    placeholder="Apartment, studio, or floor"
                    />
                </FormGroup>
                <Row>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="Total Score">
                        Total Score
                        </Label>
                        <Input
                        name="totalscore"
                        placeholder="999"
                        />
                        
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="Social Media URL">
                        Social Media Url
                        </Label>
                        <Input
                        name="socialmediaurl"
                        placeholder="@user"        
                        />
                    </FormGroup>
                    </Col>
                </Row>
                </Form>
        </>
    )
}
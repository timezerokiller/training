import React from 'react';
import {useField, Form, FormikProps, Formik} from 'formik';
import {Form as FormBootstrap, Button} from "react-bootstrap"
import {BootstrapTextField} from "../../UI/BootstrapTextField"

interface
Values
{
    firstName: string;
    lastName: string;
    email: string;
}



const Example = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{
                email: '',
                firstName: 'red',
                lastName: '',
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {(props: FormikProps<Values>) => (
                <Form>
                    <BootstrapTextField name="firstName" type="text" label="First Name"/>
                    <BootstrapTextField name="lastName" type="text" label="Last Name"/>
                    <BootstrapTextField name="email" type="email" label="Email"/>
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Example
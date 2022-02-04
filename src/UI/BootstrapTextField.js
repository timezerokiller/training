import {useField} from "formik/dist/index";
import {Form as FormBootstrap} from "react-bootstrap"


export const BootstrapTextField = ({label, ...props}) => {
    console.log(label)
    console.log(props)
    const [field, meta, helpers] = useField(props);
    return (
        <>
            <FormBootstrap.Group className="mb-3" controlId={props.name}>
                <FormBootstrap.Label>
                    {label}
                    <FormBootstrap.Control {...field} {...props} />
                </FormBootstrap.Label>
                {meta.touched && meta.error ? (
                    <FormBootstrap.Text id={props.name} className="error" muted>
                        {meta.error}
                    </FormBootstrap.Text>
                ) : null}
            </FormBootstrap.Group>
        </>
    );
};
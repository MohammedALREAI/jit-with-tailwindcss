import { Formik, Form, useField } from "formik";
import { PodDeploymentButton } from './PodDeploymentButton'
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-5" align="left" htmlFor={props.id || props.name}>{label}</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-600 font-weight-light italic" align="left">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <>
            <label className="checkbox">
                <input {...field} {...props} type="checkbox" />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </>
    );
};

export const PodDeploymentForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    namespace: "",
                    host: "",
                    repository: "",
                    tag: "",
                    target: "",
                    acceptedTerms: false, // added for our checkbox
                    jobType: "" // added for our select
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(30, "Must be 30 characters or less")
                        .required("Required"),
                    namespace: Yup.string()
                        .max(30, "Must be 30 characters or less")
                        .required("Required"),
                    host: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    repository: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    tag: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    target: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    /* jobType: Yup.string()
                        // specify the set of valid values for job type
                        // @see http://bit.ly/yup-mixed-oneOf
                        .oneOf(
                            ["designer", "development", "product", "other"],
                            "Invalid Job Type"
                        )
                        .required("Required") */
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    await new Promise(r => setTimeout(r, 500));
                    setSubmitting(false);
                }}>
                <Form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
                    <MyTextInput
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="gatsby-123456"
                    />
                    <MyTextInput
                        label="Namespace"
                        name="namespace"
                        type="text"
                        placeholder="test-ns-123456"
                    />
                    <MyTextInput
                        label="Host"
                        name="host"
                        type="text"
                        placeholder="edersdevdomain.com"
                    />
                    <MyTextInput
                        label="Repository"
                        name="repository"
                        type="text"
                        placeholder="gcr.io/blankcut/gatsby-js"
                    />
                    <MyTextInput
                        label="Tag"
                        name="tag"
                        type="text"
                        placeholder="1.0.0-beta"
                    />
                    <MyTextInput
                        label="Target"
                        name="target"
                        type="text"
                        placeholder="blank-cut-alb-1795202642.us-east-1.elb.amazonaws.com"
                    />
                    {/* <MySelect label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </MySelect> */}
                    <div className="flex items-center justify-between mt-2">
                        <MyCheckbox name="acceptedTerms" className="pl-6" align="left">
                            <span className="pl-2">I accept the terms and conditions</span>
                        </MyCheckbox>
                    </div>
                    <div className="flex items-center justify-between">
                        <PodDeploymentButton />
                    </div>
                </Form>
            </Formik>
        </>
    )
};
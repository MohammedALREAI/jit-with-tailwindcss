import { Formik, Form, useField } from "formik";
import { DomainRegistrationButton } from './DomainRegistrationButton'
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

export const DomainRegistrationForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    domain_name: "",
                    first_name: "",
                    last_name: "",
                    organization: "",
                    address: "",
                    city: "",
                    state: "",
                    country: "",
                    zipcode: "",
                    phone_number: "",
                    email: "",
                    acceptedTerms: false, // added for our checkbox
                    jobType: "" // added for our select
                }}
                validationSchema={Yup.object({
                    domain_name: Yup.string()
                        .max(30, "Must be 30 characters or less")
                        .required("Required"),
                    first_name: Yup.string()
                        .max(30, "Must be 30 characters or less")
                        .required("Required"),
                    last_name: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    organization: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    city: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    state: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    country: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    zipcode: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    phone_number: Yup.string()
                        .max(30, "Must be 30 charecters or less")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    acceptedTerms: Yup.boolean()
                        .required("Required")
                        .oneOf([true], "You must accept the terms and conditions."),
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
                        label="Domain Name"
                        name="domain_name"
                        type="text"
                        placeholder="blankcut.com"
                    />
                    <MyTextInput
                        label="First name"
                        name="first_name"
                        type="text"
                        placeholder="Leonardo"
                    />
                    <MyTextInput
                        label="Last Name"
                        name="last_name"
                        type="text"
                        placeholder="DiCaprio"
                    />
                    <MyTextInput
                        label="Organization"
                        name="organization"
                        type="text"
                        placeholder="Blank Cut"
                    />
                    <MyTextInput
                        label="City"
                        name="city"
                        type="text"
                        placeholder="New York"
                    />
                    <MyTextInput
                        label="State"
                        name="state"
                        type="text"
                        placeholder="New York"
                    />
                    <MyTextInput
                        label="Country"
                        name="country"
                        type="text"
                        placeholder="United States"
                    />
                    <MyTextInput
                        label="Zipcode"
                        name="zipcode"
                        type="text"
                        placeholder="10001"
                    />
                    <MyTextInput
                        label="Phone Number"
                        name="phone_number"
                        type="text"
                        placeholder="+1.5555555555"
                    />
                    <MyTextInput
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="blankcut@blankcut.com"
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
                        <DomainRegistrationButton />
                    </div>
                </Form>
            </Formik>
        </>
    )
};
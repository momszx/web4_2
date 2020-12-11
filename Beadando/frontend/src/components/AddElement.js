import React , { Component } from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
import {AddNewEmployee} from "../actions/AddNewEmployee";

export const AddElement  = () => (
    <Formik
        initialValues={{name: "", address: "", dateOfBirth:""}}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                console.log(values)
                AddNewEmployee(values);
                setSubmitting(false);
            }, 1000);
        }}

        validationSchema={Yup.object().shape({
            name: Yup.string()
                .required(),
            address: Yup.string()
                .required(),
            dateOfBirth: Yup.date()
                .required()
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full name:</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={ errors.name && touched.name ? "form-control is-invalid" : "form-control"}
                        />
                        {errors.name && touched.name && (
                            <div className={"invalid-feedback"}>{errors.name} </div>
                        )}
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="address">Address:</label>
                        <input
                            name="address"
                            type="text"
                            placeholder="Your Address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.address && touched.address ? "form-control is-invalid" : "form-control"}
                        />
                        {errors.address && touched.address && (
                            <div className={"invalid-feedback"}>{errors.address}</div>
                        )}
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="dateOfBirth">Birth date:</label>
                        <input
                            name="dateOfBirth"
                            type="date"
                            placeholder="Your birth date!"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.dateOfBirth && touched.dateOfBirth ? "form-control is-invalid" : "form-control"}
                        />
                        {errors.dateOfBirth && touched.dateOfBirth && (
                            <div className={"invalid-feedback"}>{errors.dateOfBirth}</div>
                        )}
                    </div>
                    <button type="submit" disabled={isSubmitting} className={"btn btn-primary"}>
                        Add employee
                    </button>
                </form>
            );
        }}
    </Formik>
);
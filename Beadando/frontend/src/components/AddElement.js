import React , { Component } from 'react'
import {Formik} from "formik";
import * as Yup from "yup";

export const AddElement  = () => (
    <Formik
        initialValues={{name: "", address: "", dateOfBirth:""}}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                //LoginAction.Login(values);
                setSubmitting(false);
            }, 500);
        }}

        validationSchema={Yup.object().shape({
            name: Yup.string()
                .required(),
            address: Yup.string()
                .required(),
            DateOfBirth: Yup.date()
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
                        <label htmlFor="DateOfBirth">Birth date:</label>
                        <input
                            name="DateOfBirth"
                            type="date"
                            placeholder="Your birth date!"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.DateOfBirth && touched.DateOfBirth ? "form-control is-invalid" : "form-control"}
                        />
                        {errors.DateOfBirth && touched.DateOfBirth && (
                            <div className={"invalid-feedback"}>{errors.DateOfBirth}</div>
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
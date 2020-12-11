import React, {Component} from 'react'
import {Formik} from "formik";
import * as Yup from "yup";

export const LoginElement = () => (
    <Formik
        initialValues={{email: "", password: ""}}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                //LoginAction.Login(values);
                setSubmitting(false);
            }, 500);
        }}

        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string()
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
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Your email address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? "form-control is-invalid" : "form-control"}
                        />
                        {errors.email && touched.email && (
                            <div className={"invalid-feedback"}>{errors.email} </div>
                        )}
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="email">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? "form-control is-invalid" : "form-control"}
                        />
                        {errors.password && touched.password && (
                            <div className={"invalid-feedback"}>{errors.password}</div>
                        )}
                    </div>
                    <button type="submit" disabled={isSubmitting} className={"btn btn-primary"}>
                        Login
                    </button>
                </form>
            );
        }}
    </Formik>
);
import React from 'react';
import ReactModal from 'react-modal';
import {Button} from "reactstrap";
import * as Yup from "yup";
import {Formik} from "formik";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class ModifyElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            user: {
                name: this.props.name,
                address: this.props.address,
                dateOfBirth: this.props.dateOfBirth,
                modifyID: this.props.modifyID
            }
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleOpenModal} className={"btn btn-success"}>Modify employee</Button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Add employee"
                    style={customStyles}
                >
                    <div className="card-body text-center">
                        <h5 className="card-title">Modify employee's userdata</h5>
                        <h6 className="card-subtitle mb-2 text-muted">#ID:{this.state.user.modifyID}</h6>
                        <Formik
                            initialValues={{
                                name: this.state.user.name, address: this.state.user.address,
                                dateOfBirth: this.state.user.dateOfBirth
                            }}
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
                                            <label htmlFor="name">Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Full name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.name && touched.name ? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.name && touched.name && (
                                                <div className={"invalid-feedback"}>{errors.name} </div>
                                            )}
                                        </div>
                                        <div className={"form-group"}>
                                            <label htmlFor="address">Address</label>
                                            <input
                                                name="address"
                                                type="text"
                                                placeholder="Address"
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
                                            <label htmlFor="dateOfBirth">Date of birth</label>
                                            <input
                                                name="dateOfBirth"
                                                type="date"
                                                placeholder="Date of birth"
                                                value={values.dateOfBirth}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.dateOfBirth && touched.dateOfBirth ? "form-control is-invalid" : "form-control"}
                                            />
                                            {errors.dateOfBirth && touched.dateOfBirth && (
                                                <div className={"invalid-feedback"}>{errors.dateOfBirth}</div>
                                            )}
                                        </div>
                                        <p className="card-text">This user will be modified!</p>
                                        <button type="submit" disabled={isSubmitting}
                                                className={"btn btn-success card-link"}>
                                            Modify
                                        </button>
                                        <button onClick={this.handleCloseModal} className={"btn btn-primary card-link"}>
                                            Cancel
                                        </button>
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default ModifyElement
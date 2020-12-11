import React from 'react';
import ReactModal from 'react-modal';
import {Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DeleteEmployee} from "../actions/DeleteEmployee";

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

class DeleteElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                deleteID: props.deleteID,
                userName: props.name
            },
            showModal: false
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

    handleClick() {
        console.log('The link was clicked.');
        //DeleteEmployee({user})
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleOpenModal} className={"btn btn-danger"}>Delete employee</Button>
                <ReactModal
                    ariaHideApp={false}
                    isOpen={this.state.showModal}
                    contentLabel="Delete employee"
                    style={customStyles}
                >
                    <div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Delete this employee: {this.state.user.userName}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">#ID:{this.state.user.deleteID}</h6>
                            <p className="card-text">This user will be permanently deleted!</p>
                            <button onClick={this.handleClick} className={"btn btn-danger card-link"}>Delete
                            </button>
                            <button onClick={this.handleCloseModal} className={"btn btn-primary card-link"}>Cancel
                            </button>
                        </div>
                        <p>{this.state.deleteID}</p>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default DeleteElement
import React from 'react';
import ReactModal from 'react-modal';
import {Button} from "reactstrap";


class AddElement extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render () {
        return (
            <div>
                <Button onClick={this.handleOpenModal} className={"btn btn-info"}>Add Employee</Button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Add employee"
                >
                    <div>
                        <div>
                            <button onClick={this.handleCloseModal}>Close Modal</button>
                        </div>
                        <div>

                        </div>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default AddElement
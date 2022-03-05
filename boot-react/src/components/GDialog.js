import {useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";

// const GModal = (props) => {
const GModal = ({ modelShow, close, sourceButtonName }) => {
    //ES6 destructuring
    // const { modelShow, close, sourceButtonName  } = props
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modelShow}
            onHide={close}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    BootCamp Dialog: called by <b>{sourceButtonName}</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/100x180.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={close}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

const GDialog = (props) => {
    /*let modelShow = false
    const setModelShow = (modelSh) => {
        modelShow = modelSh
        console.log(1, 'modelShow: ', modelShow)
    }*/
    const [modelShow, setModelShow] = useState(false)
    const show = () => {
        setModelShow(true)
    }
    const close = () => {
        setModelShow(false)
    }

    return (
       <>
           <Button variant={props.buttonColor || "primary"} onClick={show}>
               {props.buttonName}
           </Button>

            <GModal
                modelShow={modelShow}
                close={close}
                sourceButtonName={props.buttonName}
            />

       </>
    )
}

export default GDialog
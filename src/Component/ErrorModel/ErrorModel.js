import Button from '../Button/Button';
import Card from '../Card/Card';
import './ErrorModel.css';
import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className='backdrop'/>
};

const Overlay = (props) => {
    return (
        <Card className='modal'>
            <header className='header'>
                <h2>{props.head}</h2>
            </header>
            <div className='content'>
                <p>{props.message}</p>
            </div>
            <footer className='actions'>
                <Button onClick={props.onClick}>
                    Okay
                </Button>
            </footer>
        </Card>
    );
};

const ErrorModel = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
            <Backdrop
            />, document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(
            <Overlay 
                head= {props.head}
                message= {props.message}
                onClick= {props.onClick}
            />, document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}

export default ErrorModel;
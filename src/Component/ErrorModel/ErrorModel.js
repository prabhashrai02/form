import Button from '../Button/Button';
import Card from '../Card/Card';
import './ErrorModel.css';
import React from 'react';

const ErrorModel = (props) => {
    return(
        <React.Fragment>
            <div className='backdrop' />
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
        </React.Fragment>
    )
}

export default ErrorModel;
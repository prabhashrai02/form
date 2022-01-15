import Button from '../Button/Button';
import Card from '../Card/Card';
// import './ErrorModel.css';

const ErrorModel = (props) => {
    return(
        <div>
            <div className='backdrop' />
            <Card className='modal'>
                <header className='header'>
                    <h2>{props.head}</h2>
                </header>
                
                {/* <body className='content'> */}
                    <p className='content'>{props.message}</p>
                {/* </body> */}

                <footer className='actions'>
                    <Button onClick={props.onClick}>
                        Okay
                    </Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModel;
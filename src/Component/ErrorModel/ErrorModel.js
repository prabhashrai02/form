import Button from '../Button/Button';
import Card from '../Card/Card';
import './ErrorModel.css';
import Wrapper from '../Wrapper/Wrapper';


const ErrorModel = (props) => {
    return(
        <Wrapper>
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
        </Wrapper>
    )
}

export default ErrorModel;
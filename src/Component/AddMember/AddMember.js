import './AddMember.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const AddMember = () => {
    return (
        <Card>
            <form className="form_input">
                <label>Enter Your Name</label>
                <input type='text' placeholder='Eg. Prabhash Rai'></input>
                <label>Enter Your Age</label>
                <input type='number' placeholder='Eg. 21'></input>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default AddMember;
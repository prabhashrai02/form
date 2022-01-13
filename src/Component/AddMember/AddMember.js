import './AddMember.css';
import Card from '../Card/Card';

const AddMember = () => {
    return (
        <Card>
            <form className="form_input">
                <label>Enter Your Name</label>
                <input type='text' placeholder='Eg. Prabhash Rai'></input>
                <label>Enter Your Age</label>
                <input type='number' placeholder='Eg. 21'></input>
                <button type='submit'>Add User</button>
            </form>
        </Card>
    )
}

export default AddMember;
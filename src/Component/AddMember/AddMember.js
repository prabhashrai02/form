import './AddMember.css';

const AddMember = () => {
    return (
        <div>
            <form className="form_input">
                <label>Enter Your Name</label>
                <input type='text' placeholder='Eg. Prabhash Rai'></input>
                <label>Enter Your Age</label>
                <input type='number' placeholder='Eg. 21'></input>
            </form>
        </div>
    )
}

export default AddMember;
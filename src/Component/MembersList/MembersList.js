import './MembersList.css';
import Card from '../Card/Card';

const MembersList = (props) => {

    return (
        <Card>
            <ul>
                {props.users.map(user =>(
                    <li>{user.name} is {user.age} years old.</li>
                ))}
            </ul>
        </Card>
    );
};

export default MembersList;
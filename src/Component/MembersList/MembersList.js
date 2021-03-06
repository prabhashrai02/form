import './MembersList.css';
import Card from '../Card/Card';

const MembersList = (props) => {

    return (
        <Card className="users">
            <ul>
                {props.users.map(user =>(
                    <li key={user.id}>
                        {user.name} is {user.age} years old.
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default MembersList;
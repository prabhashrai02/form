import AddMember from '../AddMember/AddMember';
import MembersList from '../MembersList/MembersList';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="Homepage">
            <AddMember />
            <MembersList />
        </div>
    )
}

export default Homepage;
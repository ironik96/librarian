import { Link } from "react-router-dom";

const MemberItem = ({ member }) => {
  return (
    <Link to={`/members/${member.slug}`}>
      <div className="member-item">
        <div className={"membership " + member.membership}></div>
        <div className="member-name">
          {member.firstName} {member.lastName}
        </div>
      </div>
    </Link>
  );
};

export default MemberItem;

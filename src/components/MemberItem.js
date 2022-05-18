const MemberItem = ({ member }) => {
  return (
    <div className="member-item">
      <div className="member-name">
        {member.firstName} {member.lastName}
      </div>
      <div>{member.membership}</div>
    </div>
  );
};

export default MemberItem;

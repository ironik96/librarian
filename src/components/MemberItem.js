const MemberItem = ({ member }) => {
  return (
    <button className="member-item">
      <div className={"membership " + member.membership}></div>
      <div className="member-name">
        {member.firstName} {member.lastName}
      </div>
    </button>
  );
};

export default MemberItem;

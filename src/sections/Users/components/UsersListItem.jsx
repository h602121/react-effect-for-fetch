function UsersListItem({ user }) {
  return (
    <li key={user.id} style={{ background: "#0d7f26" }}>
      <img src={user.profileImage} alt={user.firstName + " " + user.lastName} />
      <h3>Name: {user.firstName + " " + user.lastName}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}

export default UsersListItem;

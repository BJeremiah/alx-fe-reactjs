function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      borderRadius: '10px', 
      padding: '15px', 
      margin: '15px', 
      maxWidth: '300px' 
    }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>
        {props.name}
      </h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic', color: 'gray' }}>{props.bio}</span></p>
    </div>
  );
}

export default UserProfile;

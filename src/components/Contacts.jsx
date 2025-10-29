import styled from "styled-components";
const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style: none;
  padding: 0;
  margin: 20px auto;
  max-width: 500px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 14px;
  transition: all 0.3s ease;

  &:hover {
    background: #f1f3f5;
    transform: translateY(-2px);
  }
`;

const Button = styled.button`
  background: #d64b4b;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #a02c2c;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.97);
  }
`;
const Contacts = ({deleteContact,userInfo}) => {
  const contactId=(event)=>{
    deleteContact(event.target.id)
  }
  return (
    <>
      <List>
        {userInfo.map((user) => (
          <ListItem id={user.id}>
            {user.name} : {user.telephone}
            <Button id={user.id} onClick={contactId}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Contacts

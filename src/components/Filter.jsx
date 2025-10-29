import styled from "styled-components"

const Label = styled.p`
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #bbb;
  width: 220px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #888;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
`;
const Filter=({filter})=>{
    const filterValue=(event)=>{
        filter(event.target.value)
    }
    return(
        <>
        <Label>Find contacts by name</Label>
        <Input type="text" onChange={filterValue}/>
        </>
    )
}
export default Filter
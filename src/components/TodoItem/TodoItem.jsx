import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const TodoItem = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>2 Mar 2022</CardTitle>
        <CardText>Belajar programming</CardText>
        <Button color="success">Done</Button>
      </CardBody>
    </Card>
  );
};

export default TodoItem;

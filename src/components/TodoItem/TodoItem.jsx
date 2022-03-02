import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const TodoItem = () => {
  return (
    <Card className="my-2">
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>
            <CardTitle tag="h5" className="fw-bold">
              2 Mar 2022
            </CardTitle>
            <CardText>Belajar programming</CardText>
          </div>
          {/* <Button color="success">Done</Button> */}
          <Button color="danger">On Going</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default TodoItem;

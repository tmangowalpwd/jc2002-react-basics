import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const TodoItem = (props) => {
  // const renderButton = () => {
  //   if (props.status === "done") {
  //     return <Button color="success">Done</Button>;
  //   }

  //   return <Button color="danger">On Going</Button>;
  // };
  return (
    <Card className="my-2">
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>
            <CardTitle tag="h5" className="fw-bold">
              {props.date}
            </CardTitle>
            <CardText>{props.action}</CardText>
          </div>
          {/* {renderButton()} */}
          {props.isDone ? (
            <Button color="success">Done</Button>
          ) : (
            <Button color="danger">On Going</Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default TodoItem;

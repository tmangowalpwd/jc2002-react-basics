import { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const TodoItem = (props) => {
  const [isDone, setIsDone] = useState(props.isDone);
  // const renderButton = () => {
  //   if (props.status === "done") {
  //     return <Button color="success">Done</Button>;
  //   }

  //   return <Button color="danger">On Going</Button>;
  // };

  const toggleDone = () => {
    setIsDone(!isDone);
  };

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
          {isDone ? (
            <Button onClick={toggleDone} color="success">
              Done
            </Button>
          ) : (
            <Button onClick={toggleDone} color="danger">
              On Going
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default TodoItem;

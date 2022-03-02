import { useState } from 'react'
import "./assets/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import BandSection from "./components/BandSection/BandSection";
import Navbar from './components/Navbar/Navbar'
import TourSection from "./components/TourSection/TourSection";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";
import TodoItem from "./components/TodoItem/TodoItem";
import { Button, Input } from 'reactstrap';

const data = [
  {
    username: "mark",
    location: "BSD",
    numberOfLikes: 120,
    caption: "Halo kawan-kawan!"
  },
  {
    username: "seto",
    location: "Jakarta",
    numberOfLikes: 3,
    caption: "Lagi overload kerjaan banget, mental health aku parah nih"
  },
  {
    username: "bill",
    location: "Puncak",
    numberOfLikes: 314,
    caption: "Kacau, macet banget!"
  },
]

function App() {
  const [myUsername, setMyUsername] = useState("seto");
  const [fullName, setFullName] = useState("")
  const [todoList, setTodoList] = useState([
    {
      date: "12 Feb 2022",
      action: "Belajar Fundamental",
      isDone: true
    },
    {
      date: "14 Feb 2022",
      action: "Beli coklat buat ayang",
      isDone: true
    },
    {
      date: "28 Feb 2022",
      action: "Cicil project frontend",
      isDone: false
    },
    {
      date: "1 Mar 2022",
      action: "Design project",
      isDone: false
    },
    {
      date: "2 Mar 2022",
      action: "Bikin component library",
      isDone: true
    },
  ])

  const renderContentList = () => {
    const jsxResult = data.map((val) => {
      return (
        <ContentCard
          username={val.username}
          location={val.location}
          numberOfLikes={val.numberOfLikes}
          caption={val.caption}
        />
      )
    })

    return jsxResult
  }

  const renderTodoList = () => {
    return todoList.map((val) => {
      return (
        <TodoItem
          date={val.date}
          action={val.action}
          isDone={val.isDone}
        />
      )
    })
  }

  const changeUsername = () => {
    setMyUsername("mark")
    setFullName("jane bar")
  }

  const [todoInputValue, setTodoInputValue] = useState("")

  const inputHandler = (event) => {
    const { value } = event.target;

    // console.log(value)
    setTodoInputValue(value)
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className='row my-3'>
          <div className='offset-3 col-5'>
            <Input onChange={inputHandler} />
          </div>
          <div className='col-2'>
            <Button color='success'>Add Todo</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {/* {renderContentList()} */}
            {renderTodoList()}
          </div>
        </div>
        <h1>{myUsername}</h1>
        <h1>{fullName}</h1>
        <Button onClick={changeUsername}>Change username</Button>
      </div>
      {/* <BandSection />
      <TourSection />
      <ClassComponent /> */}
    </>
  );
}

export default App;

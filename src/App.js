import "./assets/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import BandSection from "./components/BandSection/BandSection";
import Navbar from './components/Navbar/Navbar'
import TourSection from "./components/TourSection/TourSection";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import ContentCard from "./components/ContentCard/ContentCard";
import TodoItem from "./components/TodoItem/TodoItem";

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
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {/* {renderContentList()} */}
            <TodoItem />
          </div>
        </div>
      </div>
      {/* <BandSection />
      <TourSection />
      <ClassComponent /> */}
    </>
  );
}

export default App;

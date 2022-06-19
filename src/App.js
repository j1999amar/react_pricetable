import "./App.css";
import Navbar from "./Navbar";
import Content from "./Content";
import Card from "./Cards";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

let cards = [
  {
    tittle: "Free",
    amount: "$0",
    details: [
      { list: "10 users included" },
      { list: "2 GB of storage" },
      { list: "Email support" },
      { list: "Help center access" },
    ],
    buttons: [
      {
        button: "Sign Up for free",
        effect: true,
      },
    ],
  },
  {
    tittle: "Pro",
    amount: "$15",
    details: [
      { list: "20 users included" },
      { list: "10 GB of storage" },
      { list: "Priority email support" },
      { list: "Help center access" },
    ],
    buttons: [
      {
        button: "Get started",
        effect: false,
      },
    ],
  },
  {
    tittle: "Enterprise",
    amount: "$29",
    details: [
      { list: "30 users included" },
      { list: "15 GB of storage" },
      { list: "Phone and email support" },
      { list: "Help center access" },
    ],

    buttons: [
      {
        button: "Contact us",
        effect: false,
      },
    ],
  },
  
];

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <div className="container content">
        <Content></Content>
      </div>
      <div className="container packcontainer ">
      <div className="row ">
          {cards.map((pack) => {
            return <Card data={pack}></Card>;
          })}
        </div>
        <Footer></Footer>

      </div>
      <div className="footer">

      </div>

    </div>
  );
}

export default App;

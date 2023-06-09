import logo from "./logo.svg";
import "./App.css";
import AddRecordForm from "./components/addRecordForm";
import PhoneBookRecords from "./components/phoneBookRecords";

function App() {
  return (
    <div className="App">
      Phone Book
      <AddRecordForm />
      <PhoneBookRecords />
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { Book } from './contexts/book/book';
import { Routing } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Book>
          <Routing/>
        </Book>
      </div>
    </BrowserRouter>
  );
}

export default App;

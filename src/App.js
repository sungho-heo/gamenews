import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=genshin&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response.data);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}

export default App;

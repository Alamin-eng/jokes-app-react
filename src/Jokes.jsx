import {useEffect, useState} from "react";
import axios from "axios";

export default function Jokes(){
    const [jokes, setJokes] = useState([]);
    const [punchline, setPunchline] = useState(""); 
    const [status, setStatus] = useState("fetching");
 useEffect(() => {
    
    setTimeout(() => {
      fetchData(); 
    }, "1500");
  }, []);

    const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setStatus("found data");
      console.log(response.data)
      setJokes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
          <div className="jokes-div">
            {status === "found data" ? (
              <div className="jokes-texts">
                <h3>
                  <span className="setup-font">{jokes.setup}</span>
                </h3>
                <p >Punchline :<span className="punchline">{punchline}</span> </p> 
                <hr></hr>
              </div>
            ) : (
              <h5>"Loading Joke Please Wait .."</h5>
            )}
            <button className="punchline-button" onClick={() => setPunchline(jokes.punchline)}> Click for punchline </button>
            <button className="new-jokes" onClick={() => window.location.reload()}> Click For New Joke </button>
          </div>
      )
}
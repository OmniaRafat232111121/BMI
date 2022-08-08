
import React from "react";
function App() {
  return (
    <div className="App">
        <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form>
        <div>
        <label>Weight(lbs)</label>
        <input value={weight} />
        </div>
        <div>
        <label>Height(in)</label>
        <input value={weight} />
        </div>
        <div>
        <button className="btn" type="submit">Submit</button>
        <button className="btn btn-outline" type="submit">Submit</button>
        </div>
        </form>
        
        </div>
    </div>
  );
}

export default App;

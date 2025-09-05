import "./App.scss";
import Swapi from "./Swapi.js";

function App() {
  return (
    <main>
      <div className="header">
        <h1>Prompt Generator</h1>
      </div>
      <container className="grid">
        <div className="inputspace">
          <div>
            <textarea
              className="textarea"
              placeholder="Write your text here."
              rows={5}
              cols={40}
            ></textarea>
          </div>
          <br />
          <div>
            <label htmlFor="">Model: </label>
            <select name="" id="">
              <option value="midjourney">Midjourney</option>
              <option value="comfyui">ComfyUI</option>
              <option value="dalle">DALL-E</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="">Style: </label>
            <select name="" id="">
              <option value="photo">PhotoRealistic</option>
              <option value="anime">Anime</option>
              <option value="ghibli">Studio Ghibli</option>
              <option value="neon">Neon</option>
            </select>
          </div>

          <br />
          <div>
            <label htmlFor="">Color Scheme: </label>
            <select name="" id="">
              <option value="vibrant">Vibrant</option>
              <option value="monochrome">Monochrome</option>
            </select>
          </div>

          <br />

          <div>
            <label htmlFor="">Perspective: </label>
            <select name="" id="">
              <option value="frontview">Front view</option>
              <option value="sideview">Side view</option>
            </select>
          </div>

          <br />

          <div>
            <label htmlFor="">Mood: </label>
            <select name="" id="">
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
            </select>
          </div>

          <br />

          <div>
            <label htmlFor="">Light: </label>
            <select name="" id="">
              <option value="natural">Natural</option>
              <option value="soft">Soft</option>
              <option value="harsh">Harsh</option>
              <option value="candlelight">Candlelight</option>
            </select>
          </div>

          <br />

          <div>
            <button className="btn">Generate</button>
          </div>
        </div>

        <div className="outputspace">
          <textarea
            className="textarea"
            placeholder="Your prompt would appear here."
            rows={10}
            cols={50}
            disabled="yes"
          ></textarea>

          <br />

          <div>
            <button className="btn">Save to buffer</button>
          </div>
        </div>
      </container>
    </main>
  );
}

export default App;

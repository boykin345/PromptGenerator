import "./App.css";

function App() {
  return (
    <section>
      <h1>Prompt Generator</h1>
      <div>
        <div className="rawtextarea-div">
          <div>
            <textarea
              name=""
              placeholder="Write your text here."
              id=""
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
            <select name="" id=""></select>
          </div>

          <br />

          <div>
            <label htmlFor="">Perspective: </label>
            <select name="" id=""></select>
          </div>

          <br />

          <div>
            <label htmlFor="">Mood: </label>
            <select name="" id=""></select>
          </div>

          <br />

          <div>
            <label htmlFor="">Light: </label>
            <select name="" id=""></select>
          </div>

          <br />

          <div>
            <button>Generate</button>
          </div>
        </div>

        <div className="readytextarea-div">
          <textarea
            name=""
            placeholder="Your prompt would appear here."
            id=""
            rows={10}
            cols={50}
          ></textarea>

          <br />

          <div>
            <button>Save to buffer</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

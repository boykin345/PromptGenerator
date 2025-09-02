import "./App.css";

function App() {
  return (
    <div>
      <h1>Prompt Generator</h1>
      <div>
        <textarea name="" id="" rows={5} cols={40}></textarea>
      </div>
      <br />
      <div>
        <label htmlFor="">Choose Model: </label>
        <select name="" id="">
          <option value="midjourney">Midjourney</option>
          <option value="comfyui">ComfyUI</option>
          <option value="dalle">DALL-E</option>
        </select>
      </div>
      <br />
      <div>
        <label htmlFor="">Choose Style: </label>
        <select name="" id="">
          <option value="photo">PhotoRealistic</option>
          <option value="anime">Anime</option>
          <option value="ghibli">Studio Ghibli</option>
          <option value="neon">Neon</option>
        </select>
      </div>
      <br />
      <div>
        <label htmlFor="">Choose Color Scheme: </label>
        <select name="" id=""></select>
      </div>
      <br />
      <div>
        <label htmlFor="">Choose Perspective:</label>
        <select name="" id=""></select>
      </div>
      <br />
      <div>
        <label htmlFor="">Mood: </label>
        <select name="" id=""></select>
      </div>
      <br />
      <div>
        <label htmlFor="">Light</label>
      </div>
      <br />
      <div>
        <textarea name="" id="" rows={10} cols={50}></textarea>
      </div>
    </div>
  );
}

export default App;

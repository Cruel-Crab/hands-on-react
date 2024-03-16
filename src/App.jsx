function App() {
  const name = 'StarGazers';
  return (
    <div className="container">
      <article>
        
      <hgroup>
        <img src="images/group.svg" alt="StarGazers group" />
        <h1>
          Meet the <span style={{ color: "salmon", fontStyle: "italic" }}>{name}</span>
        </h1>
        <p>
          Members of an <b>intergalactic alliance</b> paving the way for peace
          and benevolence among all species. They are known for their enthusiasm
          for science, for their love of fun, and their dedication to education.
        </p>
        <button type="button" className="outline"
          onClick={() => {
            alert('Clicked')
          }}>Click here!</button>
      </hgroup>
      </article>
    </div>
  );
}
export default App

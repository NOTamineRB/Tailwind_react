import style from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>NavBar</div>
    </div>

    <div className={`bg-primary ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>Hero</div>
    </div>

    <div className={`bg-primary ${style.flexStart} ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>Hero</div>
    </div>
  </div>
);

export default App;

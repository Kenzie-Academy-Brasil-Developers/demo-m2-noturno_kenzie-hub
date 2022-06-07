import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button fn={() => console.log("teste")}>Button Text</Button>
    </div>
  );
};

export default App;

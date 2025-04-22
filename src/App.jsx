import Card from "./components/Card/Card";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import HorizontalLine from "./components/HorizontalLine/HorizontalLine";
import Sort from "./components/Sort/Sort";

function App() {
  return (
    <div className="app">
      <Header />
      <HorizontalLine />
      <main className="main">
        <div className="header d-flex jc-sb ai-c">
          <Categories />
          <Sort />
        </div>
        <div className="body">
          <h1>Все пиццы</h1>
          <div className="content">
            <Card cart={2} />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

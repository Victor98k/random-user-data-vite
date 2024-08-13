import Home from "./pages/home";
import "antd/dist/antd.css"; // Import Ant Design styles
import styles from "../src/styles/home.module.css";
import "./App.css";

function App() {
  return (
    <>
      <div className={styles.mainContainer}>
        <Home />
      </div>
    </>
  );
}

export default App;

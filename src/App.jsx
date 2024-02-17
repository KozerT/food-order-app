import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import UserProgressContext from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContext>
      <CartContextProvider>
        <Header />
        <main>
          <Meals />
        </main>
      </CartContextProvider>
    </UserProgressContext>
  );
}

export default App;

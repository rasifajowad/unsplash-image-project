import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import { useGlobalContext } from "./context";

const App = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <main>
      <ThemeToggle
        isDarkTheme={isDarkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;

import CardsMainPage from "../components/main/mainpage/cardsMainPage";
import ProjectsMainPage from "../components/main/mainpage/cases";
import MainScreen from "../components/main/mainpage/mainscreen";
import Tech from "../components/main/mainpage/tech";

export default function Home() {
  return (

    <div>
      <MainScreen />
      <CardsMainPage />
      <Tech />
      <ProjectsMainPage />
    </div>
  );
}

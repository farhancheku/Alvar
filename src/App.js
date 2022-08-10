import "./App.css";
import Home from "./Pages/Home";
import HomeFull from "./Pages/HomeFull";
import SeaFood from "./Pages/SeaFood";
import Meat from "./Pages/Meat";
import Salmon from "./Pages/Salmon";
import Poultry from "./Pages/Poultry";
import NewsPage from "./Pages/NewsPage";
import NewsStory from "./Pages/NewsStory";
import MistFocusSea from "./Pages/SeaFoodPage/MistFocusSea";
import MistCoreSea from "./Pages/SeaFoodPage/MistCoreSea";
import MistCanalSea from "./Pages/SeaFoodPage/MistCanalSea";
import MistDirectSea from "./Pages/SeaFoodPage/MistDirectSea";
import { Switch, Route } from "react-router-dom";
import Discovertechnology from "./Pages/Discovertechnology";
import Enquiry from "./Pages/Enquiry";
import Support from "./Pages/Support";
import Expo from "./Pages/Expo";
import Underconstruction from "./Pages/Underconstruction";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Environmentalimpact from "./Pages/Environmentalimpact";
import FAQs from "./Pages/FAQs";
import OurTeam from "./Pages/OurTeam";
import OurStory from "./Pages/OurStory";
import Careers from "./Pages/Careers";
import Clients from "./Pages/Clients";
import Other from "./Pages/Other";
import News_1 from "./Pages/News_1";
import News_2 from "./Pages/News_2";
import News_3 from "./Pages/News_3";
import News_4 from "./Pages/News_4";
import News_5 from "./Pages/News_5";
import AlvarNews from "./Pages/AlvarNews";
function App() {
  return (
    <>
      {/* <Meat /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sea-food">
          <SeaFood />
        </Route>
        <Route exact path="/meat">
          <Meat />
        </Route>
        <Route exact path="/salmon">
          <Salmon />
        </Route>
        <Route exact path="/poultry">
          <Poultry />
        </Route>
        <Route path="/mist-core/:category">
          <MistCoreSea />
        </Route>
        <Route exact path="/mist-focus/:category">
          <MistFocusSea />
        </Route>
        <Route exact path="/mist-direct/:category">
          <MistDirectSea />
        </Route>
        <Route exact path="/discover-our-technology">
          <Discovertechnology />
        </Route>
        <Route exact path="/mist-canal/:category">
          <MistCanalSea />
        </Route>
        <Route exact path="/newspage">
          <NewsPage />
        </Route>
        <Route exact path="/enquiry">
          <Enquiry />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/expo">
          <Expo />
        </Route>
        <Route exact path="/environmental-impact/:category">
          <Environmentalimpact />
        </Route>
        <Route exact path="/environmental-impact">
          <Environmentalimpact />
        </Route>
        <Route exact path="/testVideo">
          <HomeFull />
        </Route>
        <Route exact path="/news/:id">
          <NewsStory />
        </Route>
        <Route exact path="/faqs/:category">
          <FAQs />
        </Route>
        <Route exact path="/faqs">
          <FAQs />
        </Route>
        <Route exact path="/our-team">
          <OurTeam />
        </Route>
        <Route exact path="/our-story">
          <OurStory />
        </Route>
        <Route exact path="/careers">
          <Careers />
        </Route>
        <Route exact path="/clients/:category">
          <Clients />
        </Route>
        <Route exact path="/clients">
          <Clients />
        </Route>
        <Route exact path="/other">
          <Other />
        </Route>
        <Route exact path="/news_story/:slug">
          <News_1 />
        </Route>
        <Route exact path="/new_2_2">
          <News_2 />
        </Route>
        <Route exact path="/new_3_3">
          <News_3 />
        </Route>
        <Route exact path="/new_4_4">
          <News_4 />
        </Route>
        <Route exact path="/new_5_5">
          <News_5 />
        </Route>
        <Route exact path="/alvarnews">
          <AlvarNews />
        </Route>
        <Route exact path="/underconstruction/:pageName">
          <Underconstruction />
        </Route>
        <Redirect to="/underconstruction/UNDER DEVELOPMENT" />
      </Switch>
      {/* {/* <MistCoreSea /> */}
    </>
  );
}

export default App;

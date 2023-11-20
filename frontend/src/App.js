import { BrowserRouter, Routes, Route } from "react-router-dom";

import Professions from "./components/professions";
import DentistList from "./components/dentistList";
import GynecologistList from "./components/gynecologistList";
import NutritionList from "./components/nutritionList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Professions />}></Route>
        <Route path="/dental" element={<DentistList />}></Route>
        <Route path="/gynecologist" element={<GynecologistList />}></Route>
        <Route path="/nutrition" element={<NutritionList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

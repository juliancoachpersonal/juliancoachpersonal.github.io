import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Landing } from "../Landing/Landing";
// import { SocialBar } from "../../components/SocialBar/SocialBar";
import { Footer } from "../../components/Footer/Footer";
import { Generality } from "../Generality/Generality";
import { DetailGenerality } from "../DetailGenerality/DetailGenerality";
import { Component } from "../Component/Component";
import { OpinionPage } from "../OpinionPage/OpinionPage";
import { Adventure } from "../Component/Adventure/Adventure";
import { Esports } from "../Component/Esports/Esports";
import { Nutrition } from "../Component/Nutrition/Nutrition";
import { Psychology } from "../Component/Psychology/Psychology";
import { Train } from "../Component/Train/Train";
import { MuscleDetails } from "../Component/Train/MuscleDetails";
import { PremiumPage } from "../PremiumPage/PremiumPage";

import { Running } from "../Component/Running/Running";
import { RunningDetails } from "../Component/Running/RunningDetails";

import { useTranslation } from "react-i18next";
import { DetailRoutine } from "../DetailRoutine/DetailRoutine";
import { NutritionDetails } from "../Component/Nutrition/NutritionDetails";

export default function MainWindow() {

  const { t, i18n } = useTranslation();
  // i18n.changeLanguage('es');
  return (
    <div>
      {/* <SocialBar /> */}

        <Navbar t={t} i18n={i18n} />

    
        <Routes>
          <Route path="/" element={<Landing t={t} />} />
          <Route path="/generalidades/:typeGen" element={<Generality />} />
          <Route path="/componentes" element={<Component />} />
          <Route path="/componentes/aventura" element={<Adventure />} />
          <Route path="/componentes/esports" element={ <Esports/>} />
          <Route path="/componentes/nutricion" element={ <Nutrition/>} />
          <Route path="/componentes/nutricion/:id" element={ <NutritionDetails/>} />
          <Route path="/componentes/psicologia" element={ <Psychology/>} />
          <Route path="/componentes/entrenamiento" element={ <Train/>} />
          <Route path="/componentes/running" element={ <Running/>} />
          <Route path="/componentes/running/:id" element={ <RunningDetails/>} />
          <Route path="/componentes/entrenamiento/:muscle" element={ <MuscleDetails/>} />
          <Route path="/componentes/entrenamiento/:muscle/:id" element={ <DetailRoutine/>} />
          <Route path="/opiniones" element={<OpinionPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route
            path="/generalidades/:typeGen/:key"
            element={<DetailGenerality />}
          />
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
      

      <Footer t={t}/>
    </div>
  );
}

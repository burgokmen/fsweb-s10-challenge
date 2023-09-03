import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Img from "./assets/gratitude.jpg";

/* const activeNavLink = {
  border-color: white
} */
export default function App() {
  return (
    <div>
      <div className="bg-blue-400 shadow mb-8">
        <nav className="flex p-3 gap-2 justify-center max-w-xl mx-auto text-zinc-500">
          <NavLink
            to="/"
            exact
            //className="p-4 pb-3 tracking-tighter text-orange-500 hover:text-orange-800"
            className=" bg-orange-500 hover:text-orange-200 active:bg-orange-700 active:text-orange-700 text-white font-bold py-2 px-4 border-b-4 gap-2 border-orange-700 hover:border-orange-500 rounded"
            //style={(isActive) => (isActive ? activeNavLink : null)}
            activeClassName="text-amber-600"
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/notlar"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            activeClassName="text-amber-600"
          >
            Tüm Notlar
          </NavLink>
          <NavLink
            to="/yeni-not"
            className=" bg-orange-500 hover:text-orange-200 text-white font-bold py-2 px-4 border-b-4 gap-2 border-orange-700 hover:border-orange-500 rounded"
            activeClassName="text-amber-600"
          >
            Yeni Not
          </NavLink>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="max-w-xl mx-auto px-4 pb-8">
            <div className="beyazKutu Yeninot-form ">
              <img src={Img} alt="" />
              <div className="px-8 pt-7 pb-6 text-sm">
                <h1 className="text-3xl text-amber-600">
                  Minnet Günlüğü Nedir?
                </h1>
                <p className="my-2">
                  Minnet günlüğü, kişinin hayatındaki olumlu şeylere
                  odaklanması, minnettarlık ve şükran duygusunu hissetmesi için
                  sık sık teşekkür ettiği şeyleri yazdığı bir tür günlüktür.
                  Zihinsel iyi oluş için basit fakat oldukça etkili bir
                  yöntemdir ve kişinin hayata pozitif bir bakış açısı
                  geliştirmesine yardımcı olabilir.{" "}
                </p>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/yeni-not">
          <div className="max-w-md sm:max-w-4xl mx-auto px-4 pb-8">
            <PostForm />
          </div>
        </Route>

        <Route path="/notlar">
          <div className="max-w-md mx-auto px-4 pb-8">
            <PostList />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

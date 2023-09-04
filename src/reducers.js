import { NOT_SIL, NOT_EKLE } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}

export function myReducer(state = baslangicNotlariniGetir(), action) {
  switch (action.type) {
    case NOT_EKLE:
      const newState = { ...state, notlar: [...state.notlar, action.payload] };
      localStorageStateYaz(newState);
      return newState;
    case NOT_SIL:
      const newStateRem = {
        ...state,
        body: state.body.filter((item) => item.id !== action.payload),
      };
      localStorageStateYaz(newStateRem);
      return newState;

    default:
      baslangicNotlariniGetir();
      return state;
  }
}

import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { notSilAPI } from "../actions";
import { toast } from "react-toastify";

export default function Post({ item }) {
  const myDispatch = useDispatch();

  function handleSil() {
    // burada ilgili eylemi dispatch edin
    // sonra toast mesajı gösterin
    myDispatch(notSilAPI());
    toast.warn("Not silindi", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm Yeninot-form">
      <h1 className="font-sans">
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li) => (
        <p className="mt-2 text-s font-serif p-1" key={li}>
          - {li}
        </p>
      ))}

      <button
        className="text-xs text-amber-600 bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={handleSil}
      >
        Bu notu sil
      </button>
    </div>
  );
}

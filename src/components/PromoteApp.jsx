import React from "react";
import playStore from "../assets/playstore.svg";
import appStore from "../assets/appstore.svg";

export default function PromoteApp() {
  return (
    <>
      <div>
        <h3>Próximamente en</h3>
        <div>
          <img src={playStore} alt="googleplay.svg" />
          <img src={appStore} alt="appstore.svg" />
        </div>
      </div>
    </>
  );
}

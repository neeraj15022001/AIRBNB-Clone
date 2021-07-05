import React from "react";
import List from "./List/List";
import BottomBar from "./List/BottomBar/BottomBar";

function Footer() {
  return (
    <div className="border-t bg-gray-100 px-7 py-3">
      <List
        items={[
          "how airbnb works",
          "newsroom",
          "investors",
          "airbnb plus",
          "airbnb luxe",
          "hotel tonight",
          "airbnb for work",
          "made possible by hosts",
          "careers",
          "founder's letter",
        ]}
        listTitle="about"
      />
      <List
        items={[
          "diversity & belonging",
          "accessibiity",
          "airbnb associates",
          "frontline stays",
          "guest referrals",
          "airbnb.org",
        ]}
        listTitle="community"
      />
      <List
        items={[
          "host your home",
          "host an online experience",
          "host an experience",
          "responsibility hosting",
          "resource centre",
          "community centre",
        ]}
        listTitle="host"
      />
      <List
        items={[
          "our COVID-19 reponse",
          "help centre",
          "cancellation options",
          "neighbourhood support",
          "trust and safety",
        ]}
        listTitle="support"
      />
      <BottomBar />
    </div>
  );
}

export default Footer;

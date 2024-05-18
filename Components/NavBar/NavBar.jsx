import React, { useEffect, useState, useContext } from 'react';
import Image from "next/image";
import Link from "next/link";
import Style from "./NavBar.module.css";
import { ChatAppContext } from "../../Context/ChatAppContext";
import { Model, Error, Faqs } from "../index";
import images from "../../assets";

const NavBar = () => {
  const menuItems = [
    {
      menu: "All Users",
      link: "alluser",
    },
    {
      menu: "Chat",
      link: "/",
    },
    {
      menu: "Contact",
      link: "/",
    },
    {
      menu: "Setting",
      link: "/",
    },
    {
      menu: "FAQS",
      link: "/",
      action: () => setShowFaqs(true),
    },
    {
      menu: "Terms of use",
      link: "/",
    },
  ];

  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [showFaqs, setShowFaqs] = useState(false);
  const { account, userName, connectWallet, createAccount, error } = useContext(ChatAppContext);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <Image src={images.logo} alt='logo' height={80} width={80} />
        </div>
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_menu}>
            {menuItems.map((el, i) => (
              <div
                onClick={() => {
                  setActive(i + 1);
                  if (el.action) el.action();
                }}
                key={i + 1}
                className={`${Style.NavBar_box_right_menu_items} ${active == i + 1 ? Style.active_btn : ""}`}
              >
                <Link href={el.link} className={Style.NavBar_box_right_menu_items_link}>{el.menu}</Link>
              </div>
            ))}
          </div>

          {open && (
            <div className={Style.mobile_menu}>
              {menuItems.map((el, i) => (
                <div
                  onClick={() => {
                    setActive(i + 1);
                    if (el.action) el.action();
                  }}
                  key={i + 1}
                  className={`${Style.mobile_menu_items} ${active == i + 1 ? Style.active_btn : ""}`}
                >
                  <Link href={el.link} className={Style.mobile_menu_items_link}>{el.menu}</Link>
                </div>
              ))}
              <p className={Style.mobile_menu_btn}>
                <Image src={images.close} alt='close' height={50} width={50} onClick={() => setOpen(false)} />
              </p>
            </div>
          )}

          <div className={Style.NavBar_box_right_connect}>
            {account == "" ? (
              <button onClick={connectWallet}>
                <span>Connect wallet</span>
              </button>
            ) : (
              <button onClick={() => setOpenModel(true)}>
                <Image src={userName ? images.accountName : images.create2} alt='account image' height={20} width={20} />
                <small>{userName || "Create an account"}</small>
              </button>
            )}
          </div>
          <div className={Style.NavBar_box_right_open} onClick={() => setOpen(true)}>
            <Image src={images.open} alt='open' height={30} width={30} />
          </div>
        </div>
      </div>

      {openModel && (
        <div className={Style.modelbox}>
          <Model
            openBox={setOpenModel}
            title="Welcome to"
            head="PAL"
            info="A decentralized chat application that leverages blockchain and peer-to-peer (P2P) technology to enable secure and private messaging."
            smallInfo="Kindly select your name."
            image={images.hero}
            functionName={createAccount}
            address={account}
          />
        </div>
      )}

      {showFaqs && (
        <div className={Style.faqs}>
          <Faqs closeFaqs={() => setShowFaqs(false)} />
        </div>
      )}
      
      {error == "" ? "" : <Error error={error} />}
    </div>
  );
};

export default NavBar;

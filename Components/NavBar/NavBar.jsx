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
      menu: "Home",
      link: "/",
    },
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
      link: "faqs",
    },
    {
      menu: "Terms of use",
      link: "/",
    },
  ];

  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const { account, userName, connectWallet, createAccount, error } = useContext(ChatAppContext);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          <Image src={images.logo} alt='logo' height={80} width={80} />
        </div>
        <div className={Style.NavBar_box_right}>
        {/* Desktop */}
          <div className={Style.NavBar_box_right_menu}>
            {menuItems.map((el, i) => (
              <div
                onClick ={() => setActive (i+1)}
                key ={i+1}
                className={`${Style.NavBar_box_right_menu_items} ${active == i + 1 ? Style.active_btn : ""}`}
              >
                <Link href={el.link} className={Style.NavBar_box_right_menu_items_link}>{el.menu}</Link>
              </div>
            ))}
          </div>
          {/* Mobile */}
          {open && (
            <div className={Style.mobile_menu}>
              {menuItems.map((el, i) => (
                <div
                   onClick ={() => setActive (i+1)}
                key ={i+1}
                className={`${mobile_menu_items} ${active == i + 1 ? Style.active_btn : ""}`}
                >
                  <Link href={el.link} className={Style.mobile_menu_items_link}>{el.menu}</Link>
                </div>
              ))}
              <p className={Style.mobile_menu_btn}>
                <Image src={images.close} alt='close' height={50} width={50} onClick={() => setOpen(false)} />
              </p>
            </div>
          )}

          {/* Connect Wallet */}
          <div className={Style.NavBar_box_right_connect}>
            {account == "" ? (
              <button onClick={connectWallet}>
              {""}
                <span>Connect wallet</span>
              </button>
            ) : (
              <button onClick={() => setOpenModel(true)}>
              {""}
                <Image src={userName ? images.accountName : images.create2} 
                alt='account image' 
                height={20} 
                width={20} />
                {""}
                <small>{userName || "Create an account"}</small>
              </button>
            )}
          </div>
          <div className={Style.NavBar_box_right_open} onClick={() => setOpen(true)}>
            <Image src={images.open} alt='open' height={30} width={30} />
          </div>
        </div>
      </div>

      {/* Model component */}
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
      
      {error == "" ? "" : <Error error={error} />}
    </div>
  );
};

export default NavBar;

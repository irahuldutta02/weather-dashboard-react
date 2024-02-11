import { useState } from "react";
import { Logo } from "../../Logo";
import { FavouriteModal } from "./FavouriteModal";
import { SearchLocation } from "./SearchLocation";

export function Header() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <nav className="container flex items-center justify-between py-6">
          <Logo />
          <div className="flex items-center gap-4 relative">
            <SearchLocation />
            <div
              className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
              onClick={(e) => {
                e.preventDefault();
                handleShowModal();
              }}
            >
              <span>
                <img src="./assets/heart.svg" alt="favourite" />
              </span>
            </div>
            {showModal && <FavouriteModal handleModal={handleShowModal} />}
          </div>
        </nav>
      </header>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as gtag from "../ga";

import { useDispatch } from "react-redux";
import { toggleContactPopupHidden } from "../../redux/contact-popup/contact-popup.actions";

import {
  Container,
  Logo,
  LogoMobile,
  Menu,
  MenuOption,
  Hamburger,
  Line1,
  Line2,
  Line3,
  SearchContainer,
  Search,
  SearchText,
  SearchInput,
  SearchIcon,
} from "./header.style";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isServer = typeof window === "undefined";

  const [open, setOpen] = useState(false);

  const [searchValue, setSearchValue] = useState(
    "search" in router.query ? router.query.search : ""
  );
  const [searchError, setSearchError] = useState(false);
  const [placeholderText, setPlaceholder] = useState("Find Your Workcation...");

  const [searchPos, setSearchPos] = useState(false);

  useEffect(() => {
    if (router.route.length > 1) {
      setSearchPos(true);
    }
  }, [router]);

  const searchFunction = (e) => {
    e.preventDefault();

    if (searchValue.length === 0) {
      setPlaceholder("Search Field can't be empty");
      setSearchError(true);
    } else {
      gtag.event({
        category: "Search Function Called",
        action: "Search Function Called",
        label: "Search Function Called",
      });

      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init("717219922161498");

          ReactPixel.track("Search", {
            action: "Search Function Called",
          });
        });

      router.push(`/search?search=${encodeURI(searchValue)}`);
    }
  };

  const menuOpen = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    if (isServer || searchPos) return;
    if (screen.height - window.pageYOffset < 250) {
      setSearchPos(true);
    }
  };

  useEffect(() => {
    if (!isServer) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isServer) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <Container>
      <Link href="/" passHref>
        <Logo>
          <img src="/logo.svg" alt="Workcations" />
        </Logo>
      </Link>
      <Link href="/" passHref>
        <LogoMobile>
          <img src="/logo-mobile.svg" alt="Workcations" />
        </LogoMobile>
      </Link>
      <SearchContainer searchPos={searchPos}>
        <Search onSubmit={searchFunction}>
          <SearchInput
            type="text"
            value={searchValue}
            placeholder={placeholderText}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            searchError={searchError}
          />
          <SearchIcon onClick={searchFunction}>
            <img src="/search.svg" alt="search" />
          </SearchIcon>
        </Search>
      </SearchContainer>
      <Menu open={open}>
        <Link href="/properties" passHref>
          <MenuOption>Properties</MenuOption>
        </Link>
        <Link href="/workcations-for-teams" passHref>
          <MenuOption>Workcations For Teams</MenuOption>
        </Link>
        <Link href="/blog" passHref>
          <MenuOption>Blogs</MenuOption>
        </Link>
        <div onClick={() => dispatch(toggleContactPopupHidden())}>Connect</div>
      </Menu>
      <Hamburger>
        <button onClick={menuOpen}>
          <svg width="60" height="40" viewBox="0 0 100 100">
            <Line1
              open={open}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <Line2 open={open} d="M 20,50 H 80" />
            <Line3
              open={open}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </Hamburger>
    </Container>
  );
};

export default Header;

/*

<SearchText></SearchText>
          <SearchIcon>
            <img src="/search.svg" alt="search" />
          </SearchIcon>

          */

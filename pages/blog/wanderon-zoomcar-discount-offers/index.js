import { useState, useEffect } from "react";
import Head from "next/head";

import Layout from "../../../components/layout/layout";
import SocialShare from "../../../components/social-share/social-share";
import BlogSidebarContent from "../../../components/blog-sidebar-content/blog-sidebar-content";

import {
  BlogContainer,
  Cover,
  BlogContent,
  BlogSidebar,
  BlogTitle,
  Tags,
  Text,
  ImageCon,
  Image,
  Source,
  Caption,
  SubHeading,
} from "../../../components/blogs/blog-item.style";

const BlogItem = () => {
  const isServer = typeof window === "undefined";

  const [loadElements, setLoadElements] = useState(false);

  const handleScroll = () => {
    if (isServer || loadElements) return;
    setLoadElements(true);
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
    <Layout>
      <Head>
        <title>WanderOn X Zoomcar: Discount Offers Which You Cannot Miss</title>
        <meta
          name="description"
          content="Canceling your travel plans due to safe transportation? Book a trip with us and get amazing discount offers on sanitized cabs from Zoomcar."
        />
        <meta
          name="keywords"
          content="Zoomcar Discount Offer, Zoomcar Offers, Zoomcar Discount Coupon, Zoomcar Rental Offers, WanderOn Offers, Self Driving Cars "
        />
        <meta
          property="og:image"
          content="/wanderon-zoomcar-discount-offers/wanderon-zoomcar-discount-offers.jpg"
        />
        <meta
          property="og:description"
          content="Canceling your travel plans due to safe transportation? Book a trip with us and get amazing discount offers on sanitized cabs from Zoomcar."
        />
        <meta
          property="og:title"
          content="WanderOn X Zoomcar: Discount Offers Which You Cannot Miss"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/wanderon-zoomcar-discount-offers/wanderon-zoomcar-discount-offers.jpg)`,
          }}
        >
          WanderOn X Zoomcar: Discount Offers Which You Cannot Miss
        </Cover>
        <BlogContent>
          <SocialShare slug={"wanderon-zoomcar-discount-offers"} />
          <Tags>
            <span>Zoom Car</span>
            <span>Discount Offer</span>
          </Tags>
          <Text>
            Good news for all the Wanderers, Team{" "}
            <a href="https://www.wanderon.in/" target="_blank">
              WanderOn
            </a>{" "}
            has collaborated with the biggest self-drive car service provider
            <a href="https://www.zoomcar.com/" target="_blank">
              Zoomcar
            </a>{" "}
            for some exclusive discount offers.
            <br />
            <br />
            The offers are as follows:
          </Text>

          <SubHeading style={{ color: "#ff6b6c" }}>
            Zoomcar Discount Offer 1: Avail 20% Discount on 48+ hours Booking
          </SubHeading>
          <SubHeading>How to avail the offer </SubHeading>
          <Text>
            Book a short trip of 2N/3D with us. After booking a trip, the user
            will receive a discount coupon via email. They can use the discount
            offer while booking a Zoomcar.{" "}
          </Text>

          <SubHeading>Terms & Conditions</SubHeading>
          <Text>
            <ul>
              <li>
                Offer includes a flat 10% instant discount and an additional 10%
                Cashback
              </li>
              <li>
                <strong>Offer Validity:</strong> Hurry!! You can avail this
                offer till 31st October 2020 only.
              </li>
              <li>
                <strong>Travel Period:</strong> Book Today and Travel Tomorrow!!
                The offer could be availed between your booking date to 30th
                April 2021.
              </li>
              <li>Offer valid on 48+ hour booking.</li>
              <li>A refundable security deposit may be charged.</li>
              <li>A maximum discount can be availed up to INR 4000.</li>
              <li>
                You will receive the cashback post-trip completion in your
                Zoomcar wallet within seven days in the form of Zoom credits.
              </li>
              <li>
                Standard Zoomcar policies apply.{" "}
                <a href="https://www.zoomcar.com/policy" target="_blank">
                  https://www.zoomcar.com/policy
                </a>
              </li>
            </ul>
          </Text>
          <br />

          <SubHeading style={{ color: "#ff6b6c" }}>
            Zoomcar Discount Offer 2: Avail 30% Discount on 96+ hours Booking
          </SubHeading>
          <SubHeading>How to avail the offer </SubHeading>
          <Text>
            Book a leisure trip of 4N/5D with us. After booking your trip, you
            will receive a discount coupon via email. You can use the discount
            offer while booking a Zoomcar for your trip.
          </Text>

          <SubHeading>Terms & Conditions</SubHeading>
          <Text>
            <ul>
              <li>
                Offer includes a flat 15% instant discount and an additional 15%
                cashback
              </li>
              <li>
                <strong>Offer Validity:</strong> Hurry!! You can avail this
                offer till 31st October 2020 only.
              </li>
              <li>
                <strong>Travel Period:</strong> Book Today and Travel Tomorrow!!
                The offer could be availed between your booking date to 30th
                April 2021.
              </li>
              <li>Offer valid on 96+ hour booking.</li>
              <li>A refundable security deposit may be charged.</li>
              <li>A maximum discount can be availed up to INR 5000.</li>
              <li>
                You will receive the cashback post-trip completion in your
                Zoomcar wallet within seven days in the form of Zoom credits.
              </li>
              <li>
                Standard Zoomcar policies apply.{" "}
                <a href="https://www.zoomcar.com/policy" target="_blank">
                  https://www.zoomcar.com/policy
                </a>
              </li>
            </ul>
          </Text>
          <br />

          <SubHeading style={{ color: "#ff6b6c" }}>
            Zoomcar Discount Offer 3: Avail 40% Discount on 150+ hours Booking
          </SubHeading>
          <SubHeading>How to avail the offer </SubHeading>
          <Text>
            Book a Weeklong trip with us. After booking your trip, you will
            receive a discount coupon via email. You can use the discount offer
            while booking a Zoomcar for your weeklong excursion.
          </Text>

          <SubHeading>Terms & Conditions</SubHeading>
          <Text>
            <ul>
              <li>
                Offer includes a flat 20% instant discount and an additional 20%
                Cashback
              </li>
              <li>
                <strong>Offer Validity:</strong> Hurry!! You can avail this
                offer till 31st October 2020 only.
              </li>
              <li>
                <strong>Travel Period:</strong> Book Today and Travel Tomorrow!!
                The offer could be availed between your booking date to 30th
                April 2021.
              </li>
              <li>Offer valid on 150+ hour booking.</li>
              <li>A refundable security deposit may be charged.</li>
              <li>A maximum discount can be availed up to INR 6000.</li>
              <li>
                You will receive the cashback post-trip completion in your
                Zoomcar wallet within seven days in the form of Zoom credits.
              </li>
              <li>
                Standard Zoomcar policies apply.{" "}
                <a href="https://www.zoomcar.com/policy" target="_blank">
                  https://www.zoomcar.com/policy
                </a>
              </li>
            </ul>
          </Text>

          <SocialShare slug={"wanderon-zoomcar-discount-offers"} />
        </BlogContent>
        {loadElements ? (
          <BlogSidebar>
            <BlogSidebarContent />
          </BlogSidebar>
        ) : (
          <BlogSidebar></BlogSidebar>
        )}
      </BlogContainer>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default BlogItem;

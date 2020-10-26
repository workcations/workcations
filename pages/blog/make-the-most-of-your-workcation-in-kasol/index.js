import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../../components/layout/layout";
import SocialShare from "../../../components/social-share/social-share";

import {
  BlogContainer,
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
  SuggestedRead,
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
        <title>Make The Most Of Your Workcation In Kasol</title>
        <meta
          name="description"
          content="Planning for a workcation in Kasol? Here is a list of activities you can experience to make the most of your workcation in Kasol."
        />
        <meta
          name="keywords"
          content="Things to Do in Kasol, places to visit in kasol, Workcation in Kasol, Kasol Local Guide, Kasol Local Explorations, Temples In Kasol. Local Cafes In Kasol"
        />
        <meta
          property="og:image"
          content="/make-the-most-of-your-workcation-in-kasol/make-the-most-of-your-workcation-in-kasol.jpg"
        />
        <meta
          property="og:description"
          content="Planning for a workcation in Kasol? Here is a list of activities you can experience to make the most of your workcation in Kasol."
        />
        <meta
          property="og:title"
          content="Make The Most Of Your Workcation In Kasol"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <BlogContent>
          <Tags>
            <span>Kasol</span>
            <span>Workcations</span>
          </Tags>
          <BlogTitle>Make The Most Of Your Workcation In Kasol</BlogTitle>
          <SocialShare slug={"make-the-most-of-your-workcation-in-kasol"} />
          <ImageCon>
            <Image
              src="/make-the-most-of-your-workcation-in-kasol/make-the-most-of-your-workcation-in-kasol.jpg"
              alt="Make The Most Of Your Workcation In Kasol"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            We have discussed it quite a few times that Kasol is the numero uno
            choice for workcations ( a long staycation combining work and
            vacation). Owing to its pristine natural beauty, quiet surroundings
            and awesome arrangements for travellers, we see no reason why not to
            visit this hilly destination to unwind. While you are there, you can
            wake up to the picturesque view of snow-clad mountains of Kasol,
            work in peace at your cozy lodgings, enjoy trekking there as well as
            explore other treks in the surroundings, soak in the local Pahadi
            culture, and what not! Here’s how you can make the most of your
            trip.
          </Text>

          <SubHeading>Bask In Natural Glory</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/make-the-most-of-your-workcation-in-kasol/natural-glory.jpg"
                alt="Village"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Snow-clad mountains, hot springs, steep valleys, icy creaks, when it
            comes to pristine natural beauty, Kasol is a top-ranking
            destination. When visiting, make sure you bask in the glory of the
            lace and soak in the local culture
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-choose-bir-for-workcation" passHref>
              <a target="_blank">
                Pristine Paradise: Here’s Why You Should Go For A Workcation To
                Bir
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Unwind From Work With Trekking</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/make-the-most-of-your-workcation-in-kasol/trekking.jpg"
                alt="Trekking"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Trekking is a great way to take a break from work. Put on your
            hiking shoes and get going. You can also travel a bit further and
            explore other treks in the vicinity. Take a look (please hyperlink
            my old article)
          </Text>

          <SubHeading>Go On A Café-Hopping Spree</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/make-the-most-of-your-workcation-in-kasol/cafe-hopping.jpg"
                alt="Cafe Hopping"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Kasol is known for its Pahadi cuisine and many local cafes. Believe
            it or not, but they are totally Insta-worthy. Go on a café hopping
            spree and explorethe hidden gems whilst trying yummy food and hot
            beverages.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-setup-remote-office" passHref>
              <a target="_blank">
                How Setting Up A Workplace At Remote Location With Employees Is
                A Good Idea?
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Safe For Solo-Travel</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/make-the-most-of-your-workcation-in-kasol/solo-travel.jpg"
                alt="Solo Traveler"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Kasol is one of the safest places for solo-travel. Whether you are a
            single man or a woman, you can travel and explore this destination
            without much help from others. Make sure you book your stay through
            verified travel agents/agencies that will make your stay even more
            comfortable. The locals are more than willing to help as well.
          </Text>

          <SubHeading>Rafting & Adventure Activities</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/make-the-most-of-your-workcation-in-kasol/rafting.jpg"
                alt="River Rafting"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Water rafting, tubing and many other outdoorsy activities are a
            must-try when visiting Kasol. The Parvati river is a prominent river
            that flows through the region and you can find a number of water
            sport tours. Get your adrenaline pumping already.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-choose-manali-for-workation" passHref>
              <a target="_blank">Why Manali Is Our Fave Workcation Spot?</a>
            </Link>
          </SuggestedRead>

          <SubHeading>Get In Touch With Your Spiritual Side</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/make-the-most-of-your-workcation-in-kasol/manikaran.jpg"
                alt="Manikaran"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Trips are a great way to take a breather in life to get in touch
            with your spiritual side. Whist visiting such a beautiful
            destination, you can get in touch with your inner self, introspect,
            plan and start your daily life with a new perspective and fresh
            approach. You can always come here to escape chaos back at your city
            or village. The break can prove to be a much-needed elixir.
          </Text>

          <SubHeading>Visit Multiple Tourist Spots</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/make-the-most-of-your-workcation-in-kasol/hot-springs.jpg"
                alt="Hot Water Springs"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            There is no dearth of popular tourist attractions and things to do
            in Kasol.
            <ul>
              <li>
                You can visit the famous Gurudwara Shri Manikaran Sahib that has
                hot springs too! The beautiful holy place is built between two
                rivers — Baes and Parvati.
              </li>
              <li>You can roam the Kasol Nature Park. </li>
              <li>
                There are a lot of hot springs in the region. Take a dip, NOW!{" "}
              </li>
              <li>Visit the Choj bridge. </li>
              <li>
                If you want to visit a temple, the Naina Bhagwati Temple is a
                wooden architectural marvel.{" "}
              </li>
              <li>
                The list is endless when it comes to various treks and passes in
                the vicinity. Why not make a planned itinerary and make the most
                of your trip.
              </li>
            </ul>
          </Text>

          <Text>
            Kasol has always mesmerized everyone with its beauty. If you are
            bitten by the travel bug after staying in for months, you can always
            opt for long stays or workcation. Since travel is resuming slowly,
            make sure you travel safely and responsibility and make the most of
            this beautiful destination.
          </Text>

          <SocialShare slug={"make-the-most-of-your-workcation-in-kasol"} />
        </BlogContent>
        <BlogSidebar></BlogSidebar>
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

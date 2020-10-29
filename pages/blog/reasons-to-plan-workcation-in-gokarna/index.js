import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

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
        <title>
          Bangalore Techies, Reasons Why You Should Have A Workcation In Gokarna
        </title>
        <meta
          name="description"
          content="Stuck in the Hustle and Bustle of the IT city! Finally, We got you a perfect solution, A Workation in Gokarna."
        />
        <meta
          name="keywords"
          content="Workcations At Gokarna, Workation At Gokarna, Gokarna Workation, things to do in Gokarna, Gokarna Villas, Beaches in Gokarna, Workcations From Bangalore, Workation From Bangalore"
        />
        <meta
          property="og:image"
          content="/reasons-to-plan-workcation-in-gokarna/reasons-to-plan-workcation-in-gokarna.jpg"
        />
        <meta
          property="og:description"
          content="Stuck in the Hustle and Bustle of the IT city! Finally, We got you a perfect solution, A Workation in Gokarna."
        />
        <meta
          property="og:title"
          content="Bangalore Techies, Reasons Why You Should Have A Workcation In Gokarna"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/reasons-to-plan-workcation-in-gokarna/reasons-to-plan-workcation-in-gokarna.jpg)`,
          }}
        >
          Bangalore Techies, Reasons Why You Should Have A Workcation In Gokarna
        </Cover>
        <BlogContent>
          <SocialShare slug={"reasons-to-plan-workcation-in-gokarna"} />
          <Tags>
            <span>Workcations</span>
            <span>Gokarna</span>
          </Tags>
          <Text>
            Idyllic beaches, picturesque temples, serene surroundings —Gokarna
            is all these things. A small and quiet temple town in Karnataka,
            Gokarna is one of our favourite picks for weekend getaways and fun
            vacations. Bengaluru is a hub for techies and startup founders and
            the stress that this pandemic has caused cannot be measured. Why not
            unwind with a long vacation without missing work at Gokarna?
            Confused? Let us explain you. Pack your bags and go for a long
            workcation (a work vacation) to Gokarna and don’t miss even a single
            gem that this place has to offer.
          </Text>

          <SubHeading>Gokarna Is Heaven for Idyllic Beaches</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workcation-in-gokarna/idyllic-beaches.jpg"
                alt="Idyllic Beaches"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            All the beaches in Gokarna are pristine and unique. Beach hopping is
            one of the top activities that you should do here. The must-visit
            beaches include the crescent moon-shaped Kudle beach, Paradise beach
            aka ‘Full Moon Beach’, The Om beach that is in the shape of the
            sacred Om symbol, as well as the super-chill Gokarna beach.
          </Text>

          <SubHeading>
            Go on A Walking Tour & Visit Architectural Temples
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workcation-in-gokarna/architectural-temples.jpg"
                alt="Architectural Temples"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Whether travelling with friends or solo, embark on a walking tour
            and enjoy picturesque locales. The huts, homes and temples are a
            delight to watch. You can visit the 150-year old, magnificent
            Dravidian-style Mahabaleshwara temple that is made of white granite.
            The temple houses a 6-feet tall Shiv Linga known as Atmalinga. Every
            40 years, they have the Ashta Bandana Kumbhahishekam festival that
            is popular among the devotees.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/guide-for-workcation-at-lonavala" passHref>
              <a target="_blank">
                Pack Your Bags & Have A Workcation At Lonavala
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>
            Enjoy Staycation at Rustic Beach Shack Resorts
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workcation-in-gokarna/beach-resort.jpg"
                alt="Beach Resort"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            This beach town has many beach-facing shacks and rustic resorts that
            provide with great facilities. How will you feel when you wake up to
            a gorgeous beach view? Sounds surreal, doesn’t it?
          </Text>

          <SubHeading>Enjoy Authentic Cuisine at Shacks & Cafes</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workcation-in-gokarna/cafe.jpg"
                alt="Cafe"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Seafood, coastal dishes, sweets and global cuisine, when it comes to
            food, Gokarna has a lot to offer. Visit these lovely cafes and
            eateries to enjoy some lip-smacking food. All these places have a
            surreal beachy vibe to them. Some popular names include Ganga Café,
            Café 1987, Rock Namaste Café etc.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link
              href="/blog/work-from-mountain-destinations-with-good-wifi"
              passHref
            >
              <a target="_blank">
                Perfect Workcations Spots With The Most Reliable WiFi
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Enjoy Water Sports</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workcation-in-gokarna/water-sports.jpg"
                alt="Water Sports"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Have loads of fun with water sports that these beaches offer.
            Adventure seekers can enjoy banana boat rides, boating, kaykaying,
            aqua bumper rides and many other fun water sports.
          </Text>

          <SubHeading>Beach Camping & Trekking</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workcation-in-gokarna/beach-camping.jpg"
                alt="Beach Camping"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            At nights, you can camp on the beach, light up a bonfire, have a BBQ
            party, chill and enjoy music while camping on the beach. Nothing
            beats watching the stars while sleeping and listening to melodious
            wave sounds. There are several beach trek tour operators and it is
            one the best trekking destination.
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

          <SubHeading>Workcations At Gokarna</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workcation-in-gokarna/rustic-resort.jpg"
                alt="Rustic Resort"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            With all these recreational activities, your mind will be fresh.
            These resorts provide with great comfort and facilities such as
            wifi, pool etc. With strong signal, you can host meetings on
            beachside, and get creative juices flowing. Gokarna is a pretty
            popular place amongst Bengaluru peeps and the corporates and techies
            can always have a workcation here.
          </Text>

          <Text>
            Unwinding from work is much-needed because it provides us with fresh
            perspective. You can also take short breaks and enjoy attractions
            while resorts provide you with all facilities. It is also a great
            way to
          </Text>

          <SocialShare slug={"reasons-to-plan-workcation-in-gokarna"} />
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

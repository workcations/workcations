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
        <title>Why Manali Is Our Fave Workcation Spot?</title>
        <meta
          name="description"
          content="Seriously need reasons to choose Manali for workcation? Check out our seven reasons which make Manali the perfect workation spot!"
        />
        <meta
          name="keywords"
          content="Manali for Workation, Workcation in Manali, Workation In Manali, Workations, Workation, Best Workations Options, Long Stay in Manali "
        />
        <meta
          property="og:image"
          content="/reasons-to-choose-manali-for-workation/reasons-to-choose-manali-for-workation.jpg"
        />
        <meta
          property="og:description"
          content="Seriously need reasons to choose Manali for workcation? Check out our seven reasons which make Manali the perfect workation spot!"
        />
        <meta
          property="og:title"
          content="Why Manali Is Our Fave Workcation Spot?"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/reasons-to-choose-manali-for-workation/reasons-to-choose-manali-for-workation.jpg)`,
          }}
        >
          Why Manali Is Our Fave Workcation Spot?
        </Cover>
        <BlogContent>
          <SocialShare slug={"reasons-to-choose-manali-for-workation"} />
          <Tags>
            <span>Manali</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            We’re stuck in a pandemic and good news once in a while certainly
            lights our life up. Here’s one for you — Come October and Manali is
            opening its doors for all of us. Touted as India’s one of the most
            popular tourist destinations, Manali is beautiful, romantic and cozy
            to spend long stays and vacations. Not just that, why not take a
            break from your mundane routine and go on a workcation, a unique
            trip that is a combination of work and vacation. Great views,
            comfortable amenities, outdoorsy activities, lip-smacking authentic
            food, friendly locals, the list is endless when it comes to spending
            time in mountains. Reasons which make Manali the perfect Workation
            spot.
          </Text>

          <SubHeading>Manali Is Welcoming Tourists from October</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-manali-for-workation/old-manali-post-snowfall.jpg"
                alt="Old Manali Post Snowfall"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Good news, fellow travellers! Manali is resuming its tourism from
            the month of October. Pack your bags and book a long stay at this
            hilly destination. Whether with friends, family or significant
            other, Manali has surprises for everyone.
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

          <SubHeading>Eat & Chill at Local Pahadi Cafes</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-manali-for-workation/manali-cafes.jpg"
                alt="Manali Cafes"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Pahadi cuisine is popular and Manali happens to have many local
            quaint cafes with décor so rustic and Insta-worthy, that you won’t
            be able to keep yourself from clicking pictures. Not just that, the
            place is also known for lip-smacking street food. Make sure to try
            the yummy <em>Sidu, mittha, babru, tudkiya bhat</em> etc. From
            cafes, to dhabas to kiosks, enjoy food that is satisfying to the
            soul.
          </Text>

          <SubHeading>Enjoy Nature, Falls & Scenic Spots</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-manali-for-workation/scenic-spots.jpg"
                alt="Scenic Spots"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Nature parks, the beautiful Jogini falls, picnics by hilly base,
            Bhrigu lake, the list is endless when it comes to nature spots in
            Manali. You can enjoy being a tourist and mingle with friendly
            locals.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/panoramic-treks-around-kasol" passHref>
              <a target="_blank">
                Workcation In Kasol? Unwind With Some Nearby Trek
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Sightseeing & Market Tours</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-manali-for-workation/sightseeing.jpg"
                alt="Sightseeing"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Being a popular tourist spot, there is no dearth of beautiful sites
            for travellers. The hill station has a lot of beautiful temples such
            as Manu temple, Hadimba temple, Tibetan monasteries, etc, buzzing
            local market, museums, club houses etc. Shop for antiques,
            winter-wear, gifts, handcrafted jewellery, etc, and other souvenirs.
            <br />
            <strong>Interesting Read:</strong>{" "}
            <a
              href="https://www.wanderon.in/things-to-do-in-manali/"
              target="_blank"
            >
              5 Things to do in Manali in One Day
            </a>
          </Text>

          <SubHeading>Work from Quaint Places</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-manali-for-workation/remote-work.jpg"
                alt="Remote Work"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Be it any kind of vacation, you can always book a long stay and a
            Workation in Manali. Work out of quaint wooden resorts, cafes and
            hotels that will provide you with cozy ambiance, comfy amenities,
            and rooms with the best views. Work, relax and enjoy to your
            fullest.
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

          <SubHeading>
            Weekend Adventure Activities at Solang & Rohtang
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-manali-for-workation/solang-valley.jpg"
                alt="Solang Valley"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Trekking is a very adventurous yet refreshing activity. Solang and
            Rohtang are one of the popular activity spots. Take a break during
            weekends and pump up at Rohtang pass and activities like ropeway,
            skiing, snowboarding, etc.
          </Text>

          <SubHeading>Conclusion:</SubHeading>
          <Text>
            You don’t need a reason to come to Manali. You can spend quality
            romantic time with your significant other and work with rejuvenated
            minds. You’ll certainly enjoy the cozy resorts too. Pack your bags
            now! For, the hills are calling!
          </Text>

          <SocialShare slug={"reasons-to-choose-manali-for-workation"} />
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

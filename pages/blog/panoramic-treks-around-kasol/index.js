import { useState, useEffect } from "react";
import Head from "next/head";

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
        <title>Workcation In Kasol? Unwind with Some Nearby Treks</title>
        <meta
          name="description"
          content="What would be better to indulge in a trekking experience over a weekend? Panoramic trekking destinations around kasol you couldn't afford to miss. "
        />
        <meta
          name="keywords"
          content="Treks in Kasol, Treks Around Kasol, Kasol Treks, Treks Near Kasol, Kheerganga Trek, Trek destinations in Himachal"
        />
        <meta
          property="og:image"
          content="/panoramic-treks-around-kasol/panoramic-treks-around-kasol.jpg"
        />
        <meta
          property="og:description"
          content="What would be better to indulge in a trekking experience over a weekend? Panoramic trekking destinations around kasol you couldn't afford to miss. "
        />
        <meta
          property="og:title"
          content="Workcation In Kasol? Unwind with Some Nearby Treks"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <BlogContent>
          <Tags>
            <span>Kasol</span>
            <span>Trekking</span>
          </Tags>
          <BlogTitle>
            Workcation In Kasol? Unwind with Some Nearby Treks
          </BlogTitle>
          <SocialShare slug={"panoramic-treks-around-kasol"} />
          <ImageCon>
            <Image
              src="/panoramic-treks-around-kasol/panoramic-treks-around-kasol.jpg"
              alt="Workcation In Kasol? Unwind with Some Nearby Treks"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            We have one more great idea for you. While in offices, you tend to
            break free from stress by taking small chai breaks. How about you do
            something more adventurous? While on workcation in Kasol, you can
            unwind by going on these beautiful treks. They are close by and a
            great way to feel refreshed.
            <br />
            <br />
            Kasol is one of the most picturesque destinations that you can visit
            during these times. Be it a long stay, treks or even a workcation (a
            vacay that combines work and leisure). We narrowed down some amazing
            treks around Kasol.
          </Text>

          <SubHeading>Chalal</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/panoramic-treks-around-kasol/chalal.jpg"
                alt="Chalal"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Known as the ‘Mini Israel of Himachal Pradesh’, Chalal is a
            beautiful trekking destination that just a 30-min walk from Kasol.
            If you want to enjoy peace, adventure, comfortable short trek at
            affordable prices, this old mountain village is the ideal
            destination for you.
          </Text>

          <SubHeading>Rasol</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/panoramic-treks-around-kasol/rasol.jpg"
                alt="Rasol"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            You must have heard about the famous Rasol pass. Trekkers have an
            inexplicable feeling when they explore this reclusive little hamlet
            in the Parvati valley, Himachal Pradesh. While trekking, you can
            interact with the locals, enjoy the snow-clad mountain caps and
            watch how households practice wool-rearing and animal husbandry.
          </Text>

          <SubHeading>Kalga</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/panoramic-treks-around-kasol/kalga.jpg"
                alt="Kalga"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Another enchanting village near Kasol is Kalga, a heaven for
            trekkers. Who does not like the quintessential maggi, chai after a
            long trek? This beautiful trek lets you experience it all. Once you
            get to the Barshaini village from Kasol, you can simply walk to
            Kalga!
          </Text>

          <SubHeading>Pulga</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/panoramic-treks-around-kasol/pulga.jpg"
                alt="Pulga"
              />
              <Caption></Caption>
              <Source>
                The Bum Who Travels: &nbsp;
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://travelshoebum.com/"
                >
                  https://travelshoebum.com/
                </a>
              </Source>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            If crowd does not appeal you, we advise you to explore the already
            untrodden destinations. Pulga is one such tiny and quiet village
            that is your silent paradise. While you can enjoy everything here
            that you can experience at other places, the cherry on the cake is
            the peace of mind you derive.
          </Text>

          <SubHeading>Kheerganga</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/panoramic-treks-around-kasol/kheerganga.jpg"
                alt="Kheerganga"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Trekking and camping at Kheerganga is on every traveller’s
            wanderlust list. The popular destination is known to mesmerize you
            with its breath-taking views, icy streams, big trees and sno-clad
            mountains. You’ll actually feel like starring in Ruskin Bond’s
            novels. The location is such that there are many other attractions
            in the vicinity.
          </Text>

          <SubHeading>Tosh</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image src="/panoramic-treks-around-kasol/tosh.jpg" alt="Tosh" />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Situated approximately 2400m above the sea level, Tosh valley is
            snow-clad, picturesque and an awesome destination for treks. One of
            the most important parts of the Parvati valley, Tosh enables you to
            have an adventure, lets you dine at quirky hippie cafes and also
            lets you gaze at the snow-clad Himalayan peaks.
          </Text>

          <SubHeading>Rudranaag</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/panoramic-treks-around-kasol/rudranaag.jpg"
                alt="Rudranaag"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The Rudranaag trek is full of natural resources. Wildlife
            enthusiasts have discovered ample of unique fauna species as the
            place is full of foliage as well. Do make a stop at the beautiful
            Rudranaag waterfall (the famous serpant-shaped waterfall), eat at a
            lot of local dhabas, and enjoy the pristine beauty.
          </Text>

          <Text>
            These are some of the awesome options to explore for all the
            adventurous souls out there. Make sure you take precautions and
            check into places that take the necessary measures. Take care and
            experience the wanderlust!
          </Text>

          <SocialShare slug={"panoramic-treks-around-kasol"} />
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

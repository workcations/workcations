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
          10 Essential Items to Carry While Working from a Remote Location
        </title>
        <meta
          name="description"
          content="Essentials for Workcations. From electronics to accessories, we have covered all the essentials items required for working from remote places."
        />
        <meta
          name="keywords"
          content="Workcations, Working from remote locations, Work from remote locations, workcations, Workations, Work from Anywhere, Work from Mountains, Work from hills"
        />
        <meta
          property="og:image"
          content="/essentials-for-working-from-a-remote-location/essentials-for-working-from-a-remote-location.jpg"
        />
        <meta
          property="og:description"
          content="Essentials for Workcations. From electronics to accessories, we have covered all the essentials items required for working from remote places."
        />
        <meta
          property="og:title"
          content="10 Essential Items to Carry While Working from a Remote Location"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/essentials-for-working-from-a-remote-location/essentials-for-working-from-a-remote-location.jpg)`,
          }}
        >
          10 Essential Items to Carry While Working from a Remote Location
        </Cover>
        <BlogContent>
          <SocialShare slug={"essentials-for-working-from-a-remote-location"} />
          <Tags>
            <span>Remote Work</span>
            <span>Essentials</span>
          </Tags>
          <Text>
            Since 2020, we have changed our ways of working. From offices to
            work from home to workcations. Out of all, workcation has been the
            best form! And for all the right reasons, isn’t it? Everyone dreams
            of working from the mountains - amidst the natural paradise. But,
            all good things come at a price. Workations can come with a bit of
            challenge at the beginning if not prepped well for them. Here is a
            list of essential items that you can carry while working from a
            remote location, so that you can enjoy your stay in the mountains
            without any hassle.
          </Text>

          <SubHeading>1. Extension Cord</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/extension-cord.jpg"
                alt="Extension Cord"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Finding multiple charging points can be a difficult at times so we
            recommend that you carry your personal cord for a smooth work
            session.
          </Text>

          <SubHeading>2. Reusable Coffee Mugs and Thermos</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/reusable-coffee-mugs.jpg"
                alt="Reusable Coffee Mugs"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Carry your hot beverages in mugs or thermos and set up your work
            ANYWHERE! This way you are also reducing plastic usage.
          </Text>

          <SubHeading>3. Reusable Water Bottles</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/reusable-water-bottles.jpg"
                alt="Reusable Water Bottles"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The most essential of all- a reusable water bottle! Say no to
            plastic and fill up your bottle by any stream.
          </Text>

          <SubHeading>4. Packing Cubes</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/packing-cubes.jpg"
                alt="Packing Cubes"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            To keep your space and stuff organized- pack them in small bags and
            label them accordingly to help yourself identifying them easily.
          </Text>

          <SubHeading>
            5. Inflatable Pillows and Back Support Cushions
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/inflatable-pillows.jpg"
                alt="Inflatable Pillows"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Sitting in one position is tiresome especially when you don’t have
            the luxury of beds all the time. Carry your personal inflatable
            pillow or support cushion to ease that back pain!
          </Text>

          <SubHeading>6. Notepads and Journals</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/notepads-and-journals.jpg"
                alt="Notepads and Journals"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Whether you’re working or thinking, you need a notepad/journal to
            jot down those points! And what’s a better location than journaling
            by a river side or a cafe with magnificent views.
          </Text>

          <SubHeading>7. Sanitizer and Mini Handwash</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/sanitizer.jpg"
                alt="Sanitizer"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Don’t forget to carry the most priced item of the universe at the
            moment- sanitizer! You know it works. You can also carry a mini hand
            wash to avoid contact with other people.
          </Text>

          <SubHeading>8. Noise Cancellation Bluetooth Earphones</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/bluetooth-earphones.jpg"
                alt="Bluetooth Earphones"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Join meeting from ANYWHERE with the latest technology of noise
            cancelling earphones and avoid the disturbance of your surroundings.
            Nobody will ever suspect your location!
          </Text>

          <SubHeading>9. WIFI Dongles and Power Banks</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/power-bank.jpg"
                alt="Power Bank"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Carry your personal dongle to avoid the hassle of finding good
            internet connections. Don’t forget to carry a power bank when you’re
            out on the go.
            <br />
            <strong>Pro Tip:</strong> Just do a bit of research about the best
            network provider of that area before buying a dongle.
          </Text>

          <SubHeading>10. Sunscreen and Mosquito Cream</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/essentials-for-working-from-a-remote-location/face-sunscreen.jpg"
                alt="Sunscreen"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Sun is harsher at high altitude. Carry a sunscreen, a hydrating
            moistures and mosquito creams to protect your skin at all times.
          </Text>

          <Text>
            Want to work in the mountains? Contact us to know more. We’ve got
            your back while you work from a remote location!
          </Text>

          <SocialShare slug={"essentials-for-working-from-a-remote-location"} />
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

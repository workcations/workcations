import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import InstagramEmbed from "react-instagram-embed";

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
        <title>7 Work Friendly Cafes in Manali for Workcations</title>
        <meta
          name="description"
          content="Still wondering what it feels like to work from a cafe in the mountains, then worry not, we have prepared a list of Work Friendly Cafes in Manali. "
        />
        <meta
          name="keywords"
          content="Work Friendly Cafes in Manal, Cafes in Manali, Cafes with wifi in manali, best cafes in manali"
        />
        <meta
          property="og:image"
          content="/work-friendly-cafes-in-manali/work-friendly-cafes-in-manali.jpg"
        />
        <meta
          property="og:description"
          content="Still wondering what it feels like to work from a cafe in the mountains, then worry not, we have prepared a list of Work Friendly Cafes in Manali. "
        />
        <meta
          property="og:title"
          content="7 Work Friendly Cafes in Manali for Workcations"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/work-friendly-cafes-in-manali/work-friendly-cafes-in-manali.jpg)`,
          }}
        >
          7 Work Friendly Cafes in Manali for Workcations
        </Cover>
        <BlogContent>
          <SocialShare slug={"work-friendly-cafes-in-manali"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            As the global number of COVID cases is constantly going up,
            companies and government bodies have become more adamant towards
            precautionary strictness. And why not? It seems to be the sole most
            impactful way of controlling the outbreak.
            <br />
            <br />
            But on the contrary, people have started losing their minds. Mental
            stresses are on the rise, and the workload is beginning to become
            more challenging than ever before.
            <br />
            <br />
            Amidst all the chaos, the need for stepping out is arising. And
            people are starting to consider workcations. Moving ahead, this
            article is just about that. Here we are discussing seven
            work-friendly cafes in Manali that are fit for workations.
          </Text>

          <SubHeading>1. Cafe 1947</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/work-friendly-cafes-in-manali/cafe-1947.jpg"
                alt="Cafe 1947"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Often termed as one of the best cafes in Manali, 1947 is one legend
            on this list. From the ambiance to the food and the views from the
            window, everything is simply breathtaking.
            <br />
            <br />
            Plus, the fast WiFi and friendly culture make the perfect match for
            anyone looking for a peaceful and productive working spot.
          </Text>

          <SubHeading>2. Born Free Cafe</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/work-friendly-cafes-in-manali/born-free-cafe.jpg"
                alt="Born Free Cafe"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            If you love music and love working with it, Born Free has to be on
            your list. At the Born Free cafe, they play live music that will
            heal your body and relax your mind after a tiring day of vacation.
            <br />
            <br />
            Plus, their coffee will definitely keep your eyes wide open while
            working.
          </Text>

          <SubHeading>3. Rocky’s Cafe</SubHeading>
          {loadElements ? (
            <Text>
              <InstagramEmbed
                url="https://www.instagram.com/p/CHXwweQhcfv/"
                clientAccessToken="422685122236930|Do2Th7y8pjFI9d61rL2MnAJRd1g"
                maxWidth={320}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Text>
          ) : (
            <Text></Text>
          )}
          <Text>
            Enjoy the real trance at the Rocky’s cafe, set the mood, and work
            your day off with your favourite food.
            <br />
            <br />
            Set up after a small climb, this cafe also gives you stunning views,
            plus the food is finger licking good and coupled with a
            work-friendly environment.
            <br />
            <br />
            Just perfect for a rejuvenating workation.
          </Text>

          <SubHeading>4. Cafe Amigos</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/work-friendly-cafes-in-manali/cafe-amigos.jpg"
                alt="Cafe Amigos"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            If you want to work and need a warm & cozy place to sit at, Cafe
            Amigos is your best bet. The cafe fraternity warmly welcomes people
            looking for a workation spot. Plus, the veg yark is one of the best
            dishes.
            <br />
            <br />
            Just remember that you can’t find non-veg dishes here.
          </Text>

          <SubHeading>5. Casa Bella Vista</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/work-friendly-cafes-in-manali/casa-bella-vista.jpg"
                alt="Casa Bella Vista"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Love abstract design? Casa Bella Vista is a cafe with a
            distinguished theme of yellow walls. Apart from that, the place is
            famous for its pizzeria and a work-friendly culture. You can
            peacefully work your day here.
          </Text>

          <SubHeading>6. Lazy Dog Manali</SubHeading>
          {loadElements ? (
            <Text>
              <InstagramEmbed
                url="https://www.instagram.com/p/BtOKF1GFIXd/"
                clientAccessToken="422685122236930|Do2Th7y8pjFI9d61rL2MnAJRd1g"
                maxWidth={320}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Text>
          ) : (
            <Text></Text>
          )}
          <Text>
            Looking for a super-chill place with a warm ambiance and quick
            service? Lazy Dog Lounge is the place for you.
            <br />
            <br />
            Whether you’re visiting with your friends or work fraternity, you
            can have a great time here. And if you love beer, drinking here
            won’t cost the bank.
          </Text>

          <SubHeading>7. Johnson Cafe</SubHeading>
          {loadElements ? (
            <Text>
              <InstagramEmbed
                url="https://www.instagram.com/p/BzpZMwCllVJ/"
                clientAccessToken="422685122236930|Do2Th7y8pjFI9d61rL2MnAJRd1g"
                maxWidth={320}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Text>
          ) : (
            <Text></Text>
          )}
          <Text>
            If you’re going for a big pocket workcation and are looking for an
            unmatched working experience, Johnson Cafe is probably the best cafe
            in Manali.
            <br />
            <br />
            From ambiance to service and the food that they serve, everything is
            top notch.
            <br />
            <br />
            As the prices are high, you can expect a comfortable workation.
          </Text>

          <SubHeading>8. Drifter’s Cafe</SubHeading>
          {loadElements ? (
            <Text>
              <InstagramEmbed
                url="https://www.instagram.com/p/CH-fXyOn-tO/"
                clientAccessToken="422685122236930|Do2Th7y8pjFI9d61rL2MnAJRd1g"
                maxWidth={320}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </Text>
          ) : (
            <Text></Text>
          )}
          <Text>
            This beautiful cafe situated in old Manali is a home away from home
            for all the drifters out there.
            <br />
            <br />
            You will be served with the perfect food to satiate your taste buds
            at Drifter’s Cafe.
            <br />
            <br />A good collection of books to read, good WiFi for workation,
            and a chill atmosphere makes it an ideal place to sit, sip, work,
            and chill.
          </Text>

          <SubHeading>Conclusion:</SubHeading>
          <Text>
            Wrapping up, Manali is a beautiful hill station sitting in the lap
            of Himachal Pradesh. And more than anything, it’s loved for its
            beautiful cafes.
            <br />
            <br />
            If you’re looking for a quick escape to the chilly hills for a
            productive yet relaxing workation, this post could have helped you
            find the best cafes in Manali.
          </Text>

          <SocialShare slug={"work-friendly-cafes-in-manali"} />
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

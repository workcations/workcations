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
        <title>Upgrade from Workation to WorkCation</title>
        <meta
          name="description"
          content="Confused in Workation or Workcation? Give a read to our blog to know, what makes Workcations the perfect remote work option."
        />
        <meta
          name="keywords"
          content="Workation, Workcation, Workcations, Workations, Workcation For Teams, Workcations In India, Workcations Cost, Workcation Options"
        />
        <meta
          property="og:image"
          content="/workation-to-workcation/workation-to-workcation.jpg"
        />
        <meta
          property="og:description"
          content="Confused in Workation or Workcation? Give a read to our blog to know, what makes Workcations the perfect remote work option."
        />
        <meta
          property="og:title"
          content="Upgrade from Workation to WorkCation"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/workation-to-workcation/workation-to-workcation.jpg)`,
          }}
        >
          Upgrade from Workation to WorkCation
        </Cover>
        <BlogContent>
          <SocialShare slug={"workation-to-workcation"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            There are many things that can make life quite unbearable and living
            in a city during a pandemic sure does top the list. If you're caught
            in the same metropolitan rut, and want to move to the mountains,
            beaches and countryside, worry not! WanderOn Travel Community has
            got you covered.
            <br />
            <br />
            The Covid pandemic shattered many plans we made in 2020 - especially
            our travel plans. Work from home became the new normal for almost
            every working professional, but this whole scenario became chaos
            more than comfort.
            <br />
            <br />
            That's why we came up with the concept of Workcations. We, now, not
            only take you on trips but are also offering a stay in the mountains
            on a long term basis. We have named this concept - Workcation. We
            focus on the significance of the letter C.
          </Text>

          {loadElements ? (
            <ImageCon>
              <Image
                src="/workation-to-workcation/workcation.jpg"
                alt="Workcation"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            That is the reason why we incorporated community feel, ease of
            connecting with like-minded people, cost-effective options, and a
            bridge to connect with the local people and understand the culture.
            <br />
            <br />
            Following reasons sets us apart from other ordinary workations
          </Text>

          <SubHeading>1. Building a travel Community</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workation-to-workcation/travel-community.jpg"
                alt="Travel Community"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            WanderOn has always emphasized on building a community that aims to
            bring like minded people together. No matter your profession, a
            traveller at heart can always find a home away from home.
          </Text>

          <SubHeading>2. Making connections with fellow travellers</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workation-to-workcation/making-connections.jpg"
                alt="Making Connections"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            This community isn’t restricted only to trips but everlasting
            connections that we make with fellow travelers. Staying with each
            other for a longer period can build connections and spark new
            friendship. Working with them in a shared space will lead to better
            communication and coordination.
          </Text>

          <SubHeading>3. Conversations over chai</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workation-to-workcation/conversations.jpg"
                alt="Conversations"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Every second at workcation is a memory you're registering for
            lifetime. So when you're not working, you have ample time to engage
            in interesting conversations with your fellow workcationists, or the
            local people! If you're not a conversation starter, we give you a
            pro tip- grab a cuppa and let the chai do the talking!
          </Text>

          <SubHeading>4. Cost efficiency</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workation-to-workcation/cost-effective.jpg"
                alt="Cost Effective"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            As for costs of living in the mountains, we’ve stipulated a plan
            that makes your stay efficient and budget friendly. You no longer
            have to worry for groceries and electricity bills! We've got you
            covered!
          </Text>

          <SubHeading>5. Supporting the local culture</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workation-to-workcation/local-culture.jpg"
                alt="Local Culture"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            As a community, we believe in supporting and preserving the local
            culture. This not only includes respect for the culture but also the
            environment. We consciously focus to reduce our litter, make our
            trips eco-friendlier and more sustainable in order to preserve the
            surroundings around us.
          </Text>

          <Text>
            So, if you’re looking for a place to work from, nestled in the
            mountains, all you need to do is grab your laptop and backpack and
            drop a message!
          </Text>

          <SocialShare slug={"workation-to-workcation"} />
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

import React from "react";

import { Container, Card } from "./press-release.style";

const data = [
  {
    imgName: "hindu.png",
    link:
      "https://www.thehindu.com/life-and-style/travel/workcations-are-the-trend-in-the-travel-and-hospitality-sector-in-india/article32732447.ece",
  },
  {
    imgName: "india-today.png",
    link:
      "https://www.indiatoday.in/lifestyle/travel/story/what-is-workation-the-new-way-to-travel-and-end-your-wfh-boredom-1719513-2020-09-07",
  },
  {
    imgName: "yahoo.png",
    link:
      "https://in.news.yahoo.com/wanderon-launches-workcation-travel-packages-110902391.html",
  },
  {
    imgName: "hr-world.png",
    link:
      "https://hr-economictimes-indiatimes-com.cdn.ampproject.org/c/s/hr.economictimes.indiatimes.com/amp/news/workplace-4-0/wanderon-launches-workcation-travel-packages-for-millennial-workforce/78233774",
  },
  {
    imgName: "outlook.png",
    link:
      "https://www.outlookindia.com/newsscroll/wanderon-launches-workcation-travel-packages-for-millennial-workforce/1939424",
  },
  {
    imgName: "devdiscourse.svg",
    link:
      "https://www.devdiscourse.com/article/business/1219968-wanderon-launches-workcation-travel-packages-for-millennial-workforce",
  },
  {
    imgName: "zenger.svg",
    link:
      "https://www.zenger.news/2020/09/22/homebound-indians-seek-escape-in-workations/",
  },
];

const PressRelease = () => (
  <Container>
    {data.map((item) => (
      <Card key={item.imgName} href={item.link} target="_blank">
        <img src={`/press-release/${item.imgName}`} />
      </Card>
    ))}
  </Container>
);

export default PressRelease;

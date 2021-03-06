import firestore from "./firestore";

export const getProperties = async () => {
  const list = await firestore
    .doc(`propertiesList/data`)
    .get()
    .then((snap) => snap.data().data)
    .catch((err) => {
      console.log(err);
      return [];
    });

  return list.filter((item) => item.visibility === "TRUE");
};

export const getFeaturedProperties = async () => {
  const list = await getProperties();

  const idsList = list.map((item) => item.slug.split("-")[0]);

  const url =
    "https://spreadsheets.google.com/feeds/list/1S_p5EHH1yX-07c9G5nxBIuw0FyYzxnrWQo2G_U28wow/1/public/values?alt=json";

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const dataRaw = await fetch(url, requestOptions)
    .then((res) => res.text())
    .then((res) => JSON.parse(res).feed.entry)
    .then((list) => list.map((item) => item.gsx$id.$t));

  const data = dataRaw.filter((item) => idsList.indexOf(item) !== -1);

  const featured = list
    .filter((item) => item.featured === "TRUE")
    .filter((item, i) => data.indexOf(idsList[i]) === -1);

  let featuredList = [];

  for (let i = 0; i < data.length; i++) {
    featuredList.push(list[idsList.indexOf(data[i])]);
  }

  return [...featuredList, ...featured].filter((item, i) => i < 9);
};

export const getStatesList = async () => {
  const list = await getProperties();

  const statesList = [
    {
      title: "goa",
      image: "goa",
    },
    {
      title: "himachal pradesh",
      image: "himachal",
    },
    {
      title: "uttarakhand",
      image: "uttarakhand",
    },
    {
      title: "kerala",
      image: "kerala",
    },
    {
      title: "karnataka",
      image: "karnataka",
    },
    {
      title: "rajasthan",
      image: "rajasthan",
    },
  ].map((item) => {
    return {
      title: item.title,
      image: item.image,
      length: list.filter(
        (subItem) => subItem.location.state.toLowerCase() === item.title
      ).length,
    };
  });

  return statesList;
};

export const filterByType = async (type) => {
  const list = await getProperties();

  return list
    .filter((item) => item.type.toLowerCase() === type.toLowerCase())
    .filter((item, i) => i < 6);
};

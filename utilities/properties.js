const updateCost = (cost, multiplier) =>
  Math.ceil((cost * multiplier) / 50) * 50;

const updatePrice = (property, multiplier) => {
  const { ultrashort, short, normal, long, ultralong, monthly } = property;

  return {
    ...property,
    ultrashort: updateCost(ultrashort, multiplier),
    short: updateCost(short, multiplier),
    normal: updateCost(normal, multiplier),
    long: updateCost(long, multiplier),
    ultralong: updateCost(ultralong, multiplier),
    monthly: updateCost(monthly, multiplier),
  };
};

export const getProperties = async () => {
  const url = `https://wanderon-transactions.herokuapp.com/propertiesList`;
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const list = await fetch(url, requestOptions).then((res) => res.json());

  return list.map((item) => updatePrice(item, 1.3));
};

/* const readDataFromSheet = async (url) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    return await fetch(url, requestOptions)
      .then((response) => response.text())
      .then((response) => JSON.parse(response).feed.entry);
  } catch (err) {
    return await readDataFromSheet(url);
  }
}; */

export const getFeaturedProperties = async () => {
  const list = await getProperties();

  const idsList = list.map((item) => item.slug.split("-")[0]);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const url = `https://api.wanderon.in/featuredStays`;
  const dataRaw = await fetch(url, requestOptions).then((response) =>
    response.json()
  );

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

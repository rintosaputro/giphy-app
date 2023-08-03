const api = (() => {
  const baseUrl =
    "https://api.giphy.com/v1/gifs/search?api_key=4NhEwr0foNONud8cq3loQwf0EciWiHgk&limit=9&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
  const trendingUrl =
    "https://api.giphy.com/v1/gifs/trending?api_key=4NhEwr0foNONud8cq3loQwf0EciWiHgk&limit=9&offset=0&rating=g&bundle=messaging_non_clips";

  const getIronMans = async () => {
    const response = await fetch(`${baseUrl}&q=iron+man`);
    const responseJson = await response.json();
    const { status, msg } = responseJson.meta;

    if (status !== 200) {
      throw new Error(msg);
    }

    const { data } = responseJson;
    return data;
  };

  const searchGiphy = async (keyword: string) => {
    const url = keyword ? `${baseUrl}&q=${keyword}` : trendingUrl;
    const response = await fetch(url);
    const responseJson = await response.json();
    const { status, msg } = responseJson.meta;

    if (status !== 200) {
      throw new Error(msg);
    }

    const { data } = responseJson;
    return data;
  };

  return { getIronMans, searchGiphy };
})();

export default api;

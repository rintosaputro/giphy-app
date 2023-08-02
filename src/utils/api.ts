const api = (() => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

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
    const response = await fetch(`${baseUrl}&=${keyword}`);
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

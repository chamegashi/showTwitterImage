import axios from "axios";
import { useCallback, useState } from "react";

const hostname = "https://twimagebackend.herokuapp.com/";

export type User = {
  userName: string;
  id: string;
};

export type Content = {
  user: string;
  text: string;
  image_url: string;
  tweet_url: string;
  created: string;
  profile_image_url: string;
};

export type ContentsResponse = {
  data: Content[];
};

export const GetContentsData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<ContentsResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const getFn = useCallback(async (keyword: string) => {
    setLoading(true);

    const url = `${hostname}api/getData?users=` + keyword;

    await axios
      .get<ContentsResponse>(url)
      .then(async (res) => {
        const responseData = await res.data;
        setResponse(responseData);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, error, response, getFn };
};

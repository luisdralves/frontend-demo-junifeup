import { useEffect, useState } from 'react';

export function useRequest(request) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request()
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return {
    data,
    isLoading,
  };
}

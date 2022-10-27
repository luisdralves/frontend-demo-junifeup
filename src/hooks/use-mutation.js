import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

export function useMutation(mutation, destination) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const mutate = useCallback((data) => {
    setIsSubmitting(true);
    mutation(data)
      .then(() => {
        setIsSubmitting(false);
        if (destination) {
          history.push(destination);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return {
    mutate,
    isSubmitting,
  };
}

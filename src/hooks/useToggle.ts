import { useState, useCallback, Dispatch, SetStateAction } from 'react';

export const useToggle = (
  initialValue: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback((value?: boolean) => {
    setValue((prevState) => value ?? !prevState);
  }, []);

  return [value, toggle, setValue];
};

import { useState, ChangeEvent } from 'react';
import { useThrottle } from 'hooks';

export const UseThrottleDemo = () => {
  const [searchParam, setSearchParam] = useState<string>('');

  const searchDebounce = useThrottle(searchParam, 400);

  const handlerSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handlerSearch} />
      <p>Without throttle :{searchParam}</p>
      <p>Throttled Value :{searchDebounce}</p>
    </div>
  );
};

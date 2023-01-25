import { useToggle } from '../hooks';

export const UseToggleDemo = () => {
  const [value, toggle, setValue] = useToggle(false);

  return (
    <div>
      <p>Current Value: {value?.toString()}</p>
      <button onClick={() => toggle()} type="button">
        Toggle
      </button>
      <button onClick={() => setValue(true)}>Set Value</button>
    </div>
  );
};

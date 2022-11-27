import { createSignal } from "solid-js";

const arabicToEnglish = (string) => {
  const number = string.replace(/[^0-9٠-٩]+/g, "");
  return number.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));
};

function MyComponent(props) {
  const [number, setNumber] = createSignal("");

  return (
    <>
      <label>This input changes arabic numbers to english numbers!</label>
      <input
        value={number()}
        onInput={(event) => setNumber(arabicToEnglish(event.target.value))}
      />
    </>
  );
}

export default MyComponent;

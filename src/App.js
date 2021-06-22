import "./styles.css";
const PRODUCT_HIGHTLIGHT_TYPE = {
  VIRTUAL_VISIT: "3D",
  OPPORTUNITY: "opportunity",
  TOP: "topp"
};
const hightLightType = {
  [PRODUCT_HIGHTLIGHT_TYPE.VIRTUAL_VISIT]: true,
  [PRODUCT_HIGHTLIGHT_TYPE.OPPORTUNITY]: false,
  [PRODUCT_HIGHTLIGHT_TYPE.TOP]: true
};
const result = Object.entries(hightLightType)
  .reduce((acc, [key, value]) => {
    if (!value) {
      return acc;
    } else {
      acc.push(key);
      return acc;
    }
  }, [])
  .join(",");
console.log(result);
export default function App() {
  return (
    <div className="App">
      <h2>Hello CodeSandbox dtest</h2>
      <h1>{result}</h1>
    </div>
  );
}

import PassGenerator from "./components/PassGenerator.jsx";
import UseState from "./components/UseState.jsx";
import UseEffect from "./components/UseEffect.jsx";
import UseRef from "./components/UseRef.jsx";
import UseMemo from "./components/UseMemo.jsx";
import UseCallback from "./components/UseCallback.jsx";
import UseReducer from "./components/UseReducer.jsx";
import UseLayoutEffect from "./components/UseLayoutEffect.jsx";
import CurrencyConverter from "./components/CurrencyConverter.jsx";

export default function App() {
    return (
        <div className="py-5">
            <UseState/>
            <UseReducer/>
            <UseEffect/>
            <UseRef/>
            <UseMemo/>
            <UseCallback/>
            <UseLayoutEffect/>
            <CurrencyConverter/>
            <PassGenerator/>
        </div>
    )
}
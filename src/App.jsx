import PassGenerator from "./components/PassGenerator.jsx";
import UseState from "./components/UseState.jsx";
import UseEffect from "./components/UseEffect.jsx";
import UseRef from "./components/UseRef.jsx";
import UseMemo from "./components/UseMemo.jsx";
import UseCallback from "./components/UseCallback.jsx";
import UseReducer from "./components/UseReducer.jsx";
import UseLayoutEffect from "./components/UseLayoutEffect.jsx";
// import CustomHook from "./components/CustomHook.jsx";


export default function App() {
    return (
        <>
            <UseState/>
            <UseReducer/>
            <UseEffect/>
            <UseRef/>
            <UseMemo/>
            <UseCallback/>
            <UseLayoutEffect/>
            {/* <CustomHook/> */}
            <PassGenerator/>
        </>
    )
}
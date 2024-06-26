import useCurrencyInfo from "../hooks/useCurrencyInfo";

const Input = (props) => {
  const { from, to, amount, setAmount, currency, setCurrency, disabledInput, disabledSelect } = props;
  const fromCountryData = useCurrencyInfo(currency);
  let options = Object.keys(fromCountryData);
  return (
    <div className="my-2 bg-black rounded-md opacity-80">
      <div className="flex flex-row justify-between p-3">
        <p className="rounded p-2 bg-blue-100">{from ? from : to}</p>
      </div>
      <div className="p-3 my-2 flex justify-between items-center  gap-2 flex-col">
        <label className="text-white">Amount</label>
        <input
          type="number"
          className="focus:outline-none p-2 rounded w-44 sm:w-1/2 bg-white"
          placeholder="number"
          disabled={disabledInput}
          value={amount}
          onChange={(e) => {
              setAmount(e.target.value);
          }}
        />

        <select
          className={`focus:outline-none rounded p-2 w-28`}
          value={currency}
          disabled={disabledSelect}
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          {options.map((currencyCode, i) => (
            <option key={i} value={currencyCode}>
              {currencyCode.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
import { useEffect, useState } from "react";
import "./App.css";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import cancle from "./assets/cancle.svg";

function App() {
  const [result, setResult] = useState("0");

  const numberKey = (key: string | number) => {
    if (key === ".") {
      if (result.slice(-1) === ".") {
        return;
      }
      setResult(result + ".");
    } else if (key === "remove") {
      setResult(result.slice(0, -1));
    } else {
      setResult(result === "0" ? String(key) : result + String(key));
    }
  };

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const { key } = event;
      const regex = /^[0-9.]$/;
      console.log(key);
      if (!regex.test(key)) {
        return;
      } else {
        numberKey(key);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [result]);

  https: return (
    <div className="w-[400px] h-[367px] bg-[#242530] p-[25px]">
      <div className="bg-[#3A3F77] h-[70px] pt-[18px] pr-[16px] text-right rounded-[20px]">
        <span className="text-[32px] leading-[38.73px]">
          {result || 0} &nbsp;
        </span>
      </div>
      <div className="flex gap-[23px] mt-[22px]">
        <div className="grid grid-cols-3 gap-[15px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((it, idx) => (
            <NumberButton
              key={idx}
              content={it}
              className="text-[24px]"
              action={() => numberKey(it)}
            />
          ))}
          <NumberButton
            content={
              <img
                src={cancle}
                alt="숫자 지우는 키패드 아이콘"
                className="w-[33px] bg-blend-lighten"
              />
            }
            action={() => numberKey("remove")}
          />
        </div>
        <div className="grid grid-cols-2 gap-x-[12px] gap-y-[15px]">
          {["×", "÷", "+", "-"].map((it) => (
            <OperatorButton key={it} content={it} className="text-[32px]" />
          ))}
          {["%", "^"].map((it) => (
            <OperatorButton key={it} content={it} className="text-[24px]" />
          ))}
          <button className="col-span-2 bg-[#B2B2B2] w-[104.83px] h-[46.8px] rounded-[100px] text-black text-[28px]">
            ＝
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

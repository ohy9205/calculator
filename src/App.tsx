import "./App.css";
import NumberButton from "./NumberButton";
import cancle from "./assets/cancle.svg";

function App() {
  return (
    <div className="w-[400px] h-[367px] bg-[#242530] p-[25px]">
      <div className="bg-[#3A3F77] h-[70px] pt-[18px] pr-[16px] text-right rounded-[20px]">
        <span className="text-[32px] leading-[38.73px]">0 &nbsp;</span>
      </div>
      <div className="flex gap-[23px] mt-[22px] ">
        <div className="grid grid-cols-3 gap-[15px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, `.`, 0, ,].map((it, idx) => (
            <NumberButton key={idx} content={it} className="text-[24px]" />
          ))}
          <NumberButton
            content={
              <img
                src={cancle}
                alt="숫자 지우는 키패드 아이콘"
                className="w-[33px] bg-blend-lighten"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;

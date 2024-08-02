type Props = {
  content: React.ReactNode;
  className?: string;
};

function NumberButton({ content, className }: Props) {
  return (
    <button
      className={`flex justify-center items-center 
      bg-[#404258] w-[65px] h-[45px] rounded-[35px]
       ${className}`}>
      {content}
    </button>
  );
}

export default NumberButton;

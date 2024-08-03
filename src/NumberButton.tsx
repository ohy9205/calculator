type Props = {
  content: React.ReactNode;
  className?: string;
  action?: () => void;
};

function NumberButton({ content, className, action }: Props) {
  return (
    <button
      className={`flex justify-center items-center 
      bg-[#404258] w-[65px] h-[45px] rounded-[35px]
       ${className}`}
      onClick={action}>
      {content}
    </button>
  );
}

export default NumberButton;

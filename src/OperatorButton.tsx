type Props = {
  content: React.ReactNode;
  className?: string;
};

function OperatorButton({ content, className }: Props) {
  return (
    <button
      className={`flex justify-center items-center bg-[#F49D1A] w-[45px] h-[45px] rounded-full
       ${className}`}>
      {content}
    </button>
  );
}

export default OperatorButton;

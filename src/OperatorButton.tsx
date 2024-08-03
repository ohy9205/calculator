type Props = {
  content: React.ReactNode;
  className?: string;
  action?: () => void;
};

function OperatorButton({ content, className, action }: Props) {
  return (
    <button
      className={`flex justify-center items-center bg-[#F49D1A] w-[45px] h-[45px] rounded-full
       ${className}`}
      onClick={action}>
      {content}
    </button>
  );
}

export default OperatorButton;

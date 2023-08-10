function OrangeButton({ text, bgcolor }) {
  return (
    <button
      className={` text-white mx-auto   ${bgcolor} rounded-bl-3xl rounded-tr-3xl w-[90%] h-12 flex justify-center items-center gap-3 font-semibold my-2 `}
    >
      {text}
    </button>
  );
}

export default OrangeButton;

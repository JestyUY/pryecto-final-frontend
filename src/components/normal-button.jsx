function NormalButton({ text, img }) {
  return (
    <button className=" mx-auto border-2 border-slate-950 rounded-bl-3xl rounded-tr-3xl w-[90%] h-12 flex justify-center items-center gap-3 font-semibold my-2 ">
      {img} {text}
    </button>
  );
}

export default NormalButton;

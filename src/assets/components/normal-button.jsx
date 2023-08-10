function NormalButton({ text, img }) {
  return (
    <button className="mx-auto block border-2 border-slate-950 rounded-bl-3xl rounded-tr-3xl w-[90%] h-12">
      {img} {text}
    </button>
  );
}

export default NormalButton;

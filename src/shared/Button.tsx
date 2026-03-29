type Button = {
  text: string;
  color: string;
  onClick?: (id:string|undefined) => void;
  id?: string
};

export default function Button({ text, color, onClick, id }: Button) {
  return (
    <button
      className={`cursor-pointer px-2 p-1 mx-3 border border-${color}-500 text-${color}-500 rounded hover:bg-${color}-500 hover:text-amber-50 hover:shadow-2xl hover:shadow-${color}-900 transition_all`}
      onClick={() => onClick?.(id)}
    >
      {text}
    </button>
  );
}

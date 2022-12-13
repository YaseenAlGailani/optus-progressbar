export default function Control({
  value,
  onClick,
}: {
  value: number;
  onClick: Function;
}) {
  return (
    <button
      className="w-14 h-14 bg-amber-200 border border-amber-300 rounded-full hover:bg-amber-300 active:bg-amber-400 tra"
      onClick={() => onClick(value)}
    >
      <span className="sr-only">
        {value > 0 ? `Add ${Math.abs(value)}%` : `Subtract ${Math.abs(value)}%`}
      </span>
      <span aria-hidden={true}>{value > 0 ? `+${value}` : value}</span>
    </button>
  );
}
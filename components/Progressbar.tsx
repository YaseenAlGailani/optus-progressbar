export default function Progressbar({
  value,
  max,
  min,
}: {
  value: number;
  max: number;
  min: number;
}) {
  return (
    <div
      className="relative w-full h-12 border-4 border-neutral-200 dark:border-slate-900 bg-neutral-200 dark:bg-slate-900 rounded-full overflow-hidden"
      role="progressbar"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
    >
      <span className="absolute font-bold dark:text-slate-100 left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2">
        {value}%
      </span>
      <svg
        width="100"
        style={{ width: `${value > max ? max : value}%` }}
        height="100"
        className={`transition-all
        ${
          value > max
            ? "fill-red-400 dark:fill-red-800"
            : "fill-sky-400 dark:fill-sky-800"
        }`}
        aria-hidden="true"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="100%" height="100%"></rect>
      </svg>
    </div>
  );
}

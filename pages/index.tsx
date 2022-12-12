import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [progress0, setProgress0] = useState(0);

  const updateProgress = (value: number) => {
    let newProgress = 0;
    newProgress = progress0 + value;
    setProgress0(newProgress <= 0 ? 0 : newProgress);
  };

  return (
    <div>
      <Head>
        <title>Progress Bar</title>
        <meta name="description" content="Progress bar assessment by Optus" />
      </Head>

      <header className="container mx-auto mb-8 text-center">
        <h1 className="mt-8 text-2xl font-bold dark:text-slate-200">
          React Progress Bars
        </h1>
      </header>
      <hr className="border-neutral-100 dark:border-slate-700 mb-8" />
      <main className="mx-auto px-2">
        <div className="mx-auto mb-8 max-w-md grid gap-4">
          <Progressbar min={0} max={100} value={progress0} />
        </div>
        <hr className="border-neutral-100 dark:border-slate-700 mb-8" />
        <div className="mx-auto max-w-md flex justify-between">
          <button
            className="w-14 h-14 bg-amber-200 rounded-full hover:bg-amber-300"
            onClick={() => updateProgress(-25)}
          >
            -25
          </button>
          <button
            className="w-14 h-14 bg-amber-200 rounded-full hover:bg-amber-300"
            onClick={() => updateProgress(-10)}
          >
            -10
          </button>
          <button
            className="w-14 h-14 bg-amber-200 rounded-full hover:bg-amber-300"
            onClick={() => updateProgress(10)}
          >
            +10
          </button>
          <button
            className="w-14 h-14 bg-amber-200 rounded-full hover:bg-amber-300"
            onClick={() => updateProgress(25)}
          >
            +25
          </button>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

function Progressbar({ value, max, min }: { value: number, max:number, min:number }) {
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
        className={value > max ? "fill-red-400 dark:fill-red-800" : "fill-sky-400 dark:fill-sky-800"}
        aria-hidden="true"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="100%" height="100%"></rect>
      </svg>
    </div>
  );
}
import React, { ChangeEvent, useState } from "react";
import Head from "next/head";
import Progressbar from "../components/Progressbar";
import Select from "../components/Select";
import GLogo from "../components/GLogo";
import { updateStatus } from "../lib/utils";

export default function Home() {
  const [activeBar, setActiveBar] = useState(0);
  const [progress0, setProgress0] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  const updateProgress = (value: number) => {
    let newProgress = 0;
    const setters = [setProgress0, setProgress1, setProgress2];
    const values = [progress0, progress1, progress2];
    newProgress = values[activeBar] + value;
    setters[activeBar](newProgress <= 0 ? 0 : newProgress);
    updateStatus(newProgress, activeBar);
  };

  const handleBarChange = (value: number) => {
    setActiveBar(value);
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
      <main className="mx-auto mb-8">
        <div className="mx-auto mb-8 max-w-md grid gap-4 px-2">
          <Progressbar
            label="Progress bar 1"
            min={0}
            max={100}
            value={progress0}
          />
          <Progressbar
            label="Progress bar 2"
            min={0}
            max={100}
            value={progress1}
          />
          <Progressbar
            label="Progress bar 3"
            min={0}
            max={100}
            value={progress2}
          />
        </div>
        <hr className="border-neutral-100 dark:border-slate-700 mb-8" />
        <div className="mx-auto max-w-md mb-8 px-2">
          <Select activeBar={activeBar} changeHandler={handleBarChange} />
        </div>
        <div className="mx-auto max-w-md flex justify-between px-2">
          <button
            className="w-14 h-14 bg-amber-200 rounded-full hover:bg-amber-300 active:bg-amber-400 tra"
            onClick={() => updateProgress(-25)}
          >
            -25
          </button>
          <button
            className="w-14 h-14 bg-amber-200 rounded-full hover:bg-amber-300 active:bg-amber-400 tra"
            onClick={() => updateProgress(-10)}
          >
            -10
          </button>
          <button
            className="w-14 h-14 bg-amber-200 rounded-full hover:bg-amber-300 active:bg-amber-400 tra"
            onClick={() => updateProgress(10)}
          >
            +10
          </button>
          <button
            className="w-14 h-14 bg-amber-200 rounded-full hover:bg-amber-300 active:bg-amber-400 tra"
            onClick={() => updateProgress(25)}
          >
            +25
          </button>
        </div>
      </main>
      <hr className="border-neutral-100 dark:border-slate-700 mb-8" />
      <footer className="mx-auto max-w-md px-2">
        <p className="inline-block text-sm dark:text-slate-300">
          By Yaseen AlGailani
          <a href="https://www.gailani.dev">
            <GLogo small />
          </a>
        </p>
      </footer>
    </div>
  );
}

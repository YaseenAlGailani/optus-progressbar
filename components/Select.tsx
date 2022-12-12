import { ChangeEventHandler } from "react";

export default function Select({
  activeBar,
  changeHandler,
}: {
  activeBar: number;
  changeHandler: ChangeEventHandler;
}) {
  return (
    <>
      <label className="sr-only" htmlFor="barSelect">
        Pick a progress bar
      </label>
      <select
        className="w-full h-12 border-2 rounded-md"
        id="barSelect"
        value={activeBar}
        onChange={changeHandler}
      >
        <option value={0}>Progress #1</option>
        <option value={1}>Progress #2</option>
        <option value={2}>Progress #3</option>
      </select>
    </>
  );
}

import { useSelect } from "downshift";

export default function Select({
  activeBar,
  changeHandler,
}: {
  activeBar: number;
  changeHandler: Function;
}) {
  const items = [
    {
      title: "Progress bar 1",
      value: 0,
    },
    {
      title: "Progress bar 2",
      value: 1,
    },
    {
      title: "Progress bar 3",
      value: 2,
    },
  ];

  const onSelectedItemChange = ({selectedItem}:any) => {
    changeHandler(selectedItem.value);
  };

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    onSelectedItemChange,
    initialSelectedItem: items.find(item=>item.value === activeBar),
    itemToString(item) {
      return item ? item.title : "";
    },
  });

  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col gap-1">
        <label className="sr-only" {...getLabelProps()}>
          Pick a progress bar
        </label>
        <div
          className="p-3 flex justify-between cursor-pointer border-2 border-neutral-300 dark:border-slate-500 rounded-xl dark:text-slate-200"
          {...getToggleButtonProps()}
        >
          <span>{selectedItem ? selectedItem.title : "Prgress bar"}</span>
          <span className="px-2">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
        </div>
      </div>
      <ul
        {...getMenuProps()}
        className="absolute mt-2 w-full p-0 bg-white dark:bg-slate-900 shadow-md max-h-80 overflow-scroll rounded-md"
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={`py-4 px-3 shadow-sm flex flex-col dark:text-slate-200
              ${highlightedIndex === index && "bg-sky-200 dark:bg-sky-800"} 
              ${selectedItem?.value === item.value && "font-bold"}`}
              key={`${item.value}${index}`}
              {...getItemProps({ item, index })}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

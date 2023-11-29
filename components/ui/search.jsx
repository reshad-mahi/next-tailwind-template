import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchField = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex items-center gap-2 p-3 bg-white border border-solid border-[#857371] rounded-full">
      <Icon path={mdiMagnify} size={1} />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 border-none outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchField;

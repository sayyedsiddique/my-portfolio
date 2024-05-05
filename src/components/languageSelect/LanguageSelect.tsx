import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DefaultLang } from "../../types/types";

type LanguageSelectProps = {
  languageSelectHandler: () => void;
  selectedLang: DefaultLang;
};
const LanguageSelect: React.FC<LanguageSelectProps> = ({
  languageSelectHandler,
  selectedLang,
}) => {
  console.log("selectedLang ", selectedLang);

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
      {/* <InputLabel id="demo-select-small-label">Eng</InputLabel> */}
      <Select
        value={selectedLang?.name}
        onChange={languageSelectHandler}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={"English"}>Eng</MenuItem>
        <MenuItem value={"Hindi"}>Hin</MenuItem>
        {/* <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;

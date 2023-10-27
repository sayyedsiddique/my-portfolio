import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DefaultLang } from '../../types/types';

type LanguageSelectProps = {
  languageSelectHandler: () => void,
  selectedLang: DefaultLang
}
const LanguageSelect: React.FC<LanguageSelectProps> = ({languageSelectHandler, selectedLang}) => {
  console.log("selectedLang ", selectedLang)

    return (
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <InputLabel id="demo-select-small-label">Eng</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedLang?.name}
          label="Age"
          onChange={languageSelectHandler}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"English"}>Eng</MenuItem>
          <MenuItem value={"Hindi"}>Hin</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    );
}

export default LanguageSelect
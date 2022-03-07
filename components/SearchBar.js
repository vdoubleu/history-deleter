import { useState } from 'react';
import { OutlinedInput, InputAdornment, FormControl } from '@mui/material';
import Search from '@mui/icons-material/Search';

export default function SearchBar(props) {
  const [search, setSearch] = useState('');
  const { OnSubmit } = props;

  function submitForm(e) {
    e.preventDefault();
    OnSubmit(search);
  }

  return (
    <form style={{width: "100%"}} onSubmit={submitForm}>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput 
          id="filled-search"
          type="search"
          placeholder="Type keywords to search"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormControl>
    </form>
  );
}

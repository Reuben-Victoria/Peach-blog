import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar/SearchBar';
import Home from '../Container/Home/Home';
import { useDebounce } from '../Hooks/debounce';
import PageLayout from '../Layouts/PageLayout';

function HomePage() {
  const [inputValue, setInputValue] = useState('');
  const inputData = useDebounce(inputValue, 1000);

  return (
    <PageLayout
      component={SearchBar}
      componentProps={{
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value)
      }}>
      <Home inputData={inputData} />
    </PageLayout>
  );
}

export default HomePage;

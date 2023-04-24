import React, { useState } from 'react';
import SearchBar from 'components/searchBar/SearchBar';
import Home from 'container/home/Home';
import { useDebounce } from 'hooks/debounce';
import PageLayout from 'layouts/PageLayout';

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

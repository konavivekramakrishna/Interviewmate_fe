// Home.js
import React from 'react';
import Categories from './Categories';

const categoryList = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']; 

export default function Home() {
  return (
    <div className="flex-col flex justify-center items-center mt-20">
      <h1 className="text-3xl font-bold underline mb-5">Select a category</h1>
      <Categories categoryList={categoryList} />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { QueryControls } from '@wordpress/components';

export default (props) => {
  const { authors, suggestions, value, setHandler } = props;

  const AuthorList = authors?.map((author, index) => ({
    id: index,
    name: author.toLowerCase(),
  })) || null;

  const Suggestions = suggestions.reduce((acc, language, index) => {
    acc[language] = { id: index, name: language, parent: 0 };
    return acc;
  }, {}) || {};

  const updateQuery = ( newQuery ) => {
    setHandler({ query: { ...value, ...newQuery } });
  };

  // const selectedCategories = value.category
  // .map(language => Suggestions[language])
  // .filter(category => category);
  
  
  return (
    <QueryControls
      authorList={AuthorList}
      selectedAuthorId={value.author}
      onAuthorChange={( newAuthor ) => updateQuery( { author: newAuthor } )}

      numberOfItems={value.numberOfItems}
      onNumberOfItemsChange={ ( newNumberOfItems ) => updateQuery( { numberOfItems: newNumberOfItems } ) }

      orderBy={value.orderBy}
      onOrderByChange={ ( newOrderBy ) => updateQuery( { orderBy: newOrderBy } ) }

      order={value.order}
      onOrderChange={ ( newOrder ) => updateQuery( { order: newOrder } ) }

      categorySuggestions={Suggestions}
      onCategoryChange={ ( newCategory ) => updateQuery( { category: newCategory } ) }      
      selectedCategories={value.category}
    />
  );
}
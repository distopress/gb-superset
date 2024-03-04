import { QueryControls } from '@wordpress/components';

export default ({ authorList, categoriesList, value, setHandler }) => {

  const updateQuery = ( newQuery ) => { 
    setHandler({ query: { ...value, ...newQuery } }); 
  };
  
  return (
    <QueryControls
      authorList={authorList || []}
      selectedAuthorId={value?.author}
      onAuthorChange={( newAuthor ) => updateQuery( { author: newAuthor } )}

      numberOfItems={value?.numberOfItems}
      onNumberOfItemsChange={ ( newNumberOfItems ) => updateQuery( { numberOfItems: newNumberOfItems } ) }

      orderBy={value?.orderBy}
      onOrderByChange={ ( newOrderBy ) => updateQuery( { orderBy: newOrderBy } ) }

      order={value?.order}
      onOrderChange={ ( newOrder ) => updateQuery( { order: newOrder } ) }

      categoriesList={categoriesList || []}
      onCategoryChange={ ( newCategory ) => updateQuery( { category: newCategory } )}      
      selectedCategoryId={ value?.category }
    />
  );
}
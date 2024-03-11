import { QueryControls } from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  const {authorList, categoriesList, value, setHandler} = props;

  const updateQuery = ( newQuery ) => { 
    setHandler({ query: { ...value, ...newQuery } }); 
  };
  
  return (
    <ControlContainer {...props} className="gb-superset-query-controls">
      <QueryControls
        {...props}
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
    </ControlContainer>
  );
}
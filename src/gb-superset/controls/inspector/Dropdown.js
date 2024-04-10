import { Button, Dropdown } from '@wordpress/components';
import { useState, useRef, useEffect } from '@wordpress/element';

export default (props) => {
  const dropdownButtonRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const dropdownButton = dropdownButtonRef.current;
    if (dropdownButton) {
      const dropdownRect = dropdownButton.getBoundingClientRect();
      setTranslateY(Math.floor(dropdownRect.top));
    }
  }, []);

  console.log(translateY);  

  return (
      <Dropdown
        ref={dropdownButtonRef}
        className="gb-superset-dropdown"
        contentClassName="gb-superset-dropdown-content"
        popoverProps={{
          placement: "top left",
          style: { 
            position: 'absolute',
            top: '0px',
            left: '0px',
            opacity: '1',
            transform: `translateX(1350px) translateY(${translateY}px) translateY(0px) scale(1) translateZ(0px)`,
          },
        } }
        renderToggle={ ( { isOpen, onToggle } ) => (
          <Button
            className='dropdown-button'
            onClick={ onToggle }
            aria-expanded={ isOpen }
            icon={"dashicons-marker"}
          >
            {props?.label}
          </Button>
        ) }
        renderContent={ () => <div>{props?.children}</div> }
      />
  );
}
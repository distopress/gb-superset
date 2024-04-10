import { useContext, useState, useEffect } from 'react';
import { Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';

import { ControlContainer, ControlContext } from '@gb-superset/supports/control';

export default (props) => {
  // Destructure get and set from the context
  const { get, set, setAttributes } = useContext(ControlContext);

  const mediaData = (get(props.name) || []).map(data => data.url);

  // Create a state variable for get only the url not full json
  // const [imageObject, setImageObjectState] = useState(get(props.name, null) ?? []);

  // const setGroupObject = (media) => {
  //   const imageUrls = media.map(image => image.url );
  //    const imageUrls = media.map(image => ({ "url" : image.url }));
  //    console.log(media);
  //    console.log(imageUrls);
  //    setAttributes({ "images" : imageUrls });
  //    set(props.name, imageUrls, null);
  //   setImageObjectState((_) => ({...imageUrls}));
  // }

  // Use useEffect to set the groupObject in the context when it changes
  // useEffect(() => {
  //   if (typeof imageObject === 'object') {
  //       set(props.name, imageObject, null);
  //   }
  // }, [imageObject]);

  return (
    <div className="gb-superset-media-upload">
      <ControlContainer {...props} valueProp={'value'} changeProp={'onSelect'} className="gb-superset-media-input">
      {/* <ControlContainer {...props} className="gb-superset-media-upload"> */}
          <MediaUpload
            {...props}
            multiple={true}
            // value={imageObject}
            // onSelect={setGroupObject}
            allowedTypes={[ 'image', 'video', 'audio' ]}
            render={ ( { open } ) => (
              <Button variant="primary" onClick={ open }>Open Media Library</Button>
            ) }
          />
      </ControlContainer>
      { mediaData?.length !== 0 && 
        <div className={`gb-superset-show-media ${mediaData?.length >= 2 && 'media-grid'}`}>
          { mediaData.slice(0, 4).map((url, index) => <img key={index} src={url} alt={`media-${index}`} />)}
          { mediaData?.length > 4 && <span className='media-more'>...</span>}
        </div> 
      }
    </div>
  );
}
import { Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onSelect'} className="gb-superset-media-upload">
        <MediaUpload
          allowedTypes={[ 'image', 'video', 'audio' ]}
          render={ ( { open } ) => (
            <Button variant="primary" onClick={ open }>Open Media Library</Button>
          ) }
        />
    </ControlContainer>
  );
}
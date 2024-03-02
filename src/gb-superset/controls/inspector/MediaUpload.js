import { Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} valueProp={'value'} changeProp={'onSelect'} className="gb-superset-number-control">
      <MediaUploadCheck>
        <MediaUpload
          allowedTypes={[ 'image', 'video', 'audio' ]}
          render={ ( { open } ) => (
            <Button variant="primary" onClick={ open }>Open Media Library</Button>
          ) }
        />
      </MediaUploadCheck>
    </ControlContainer>
  );
}
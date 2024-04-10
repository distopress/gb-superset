import { useContext, useState, useEffect } from 'react';
import { TextControl } from '@gb-superset/controls/inspector';
import { ControlContext, GroupControlContainer } from '@gb-superset/supports/control';

export default (props) => {
    return (
      <GroupControlContainer {...props} className="gb-superset-dimensions-group-control">
        <TextControl
          {...props}
          name={'control1'}
          label="Padding"
        />
        <TextControl
          {...props}
          name={'control2'}
          label="Margin"
        />
      </GroupControlContainer>
    );
}
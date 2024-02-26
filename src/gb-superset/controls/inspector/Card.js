import {
  Card,
  CardBody,
  CardMedia,
  CardFooter,
  CardHeader,
  CardDivider,
} from '@wordpress/components';

import { ControlContainer } from '@gb-superset/supports/control';

export default (props) => {
  return (
    <ControlContainer {...props} className="gb-superset-card">
      <Card {...props}>
        <CardHeader>Card Header</CardHeader>
        <CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit vel turpis in vehicula. </CardBody>
        <CardDivider />
        <CardMedia>
          <img src="https://cdn.the-scientist.com/assets/articleNo/66864/aImg/35078/foresttb-m.jpg" />
        </CardMedia>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </ControlContainer>
  );
}
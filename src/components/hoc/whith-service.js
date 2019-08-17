import React from 'react';
import { Consumer } from '../store-service-context';

const WhithService = () => Wrapped => {
  return props => {
    return (
      <Consumer>
        {boockService => {
          <Wrapped {...props} boockService={boockService} />;
        }}
      </Consumer>
    );
  };
};

export default WhithService;

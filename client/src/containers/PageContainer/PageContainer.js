import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import './PageContainer.scss';

class PageContainer extends Component {
  render() {
    return (
      <Aux>
        <div>PageContainer</div>
      </Aux>
    );
  }
}

PageContainer.propTypes = {
  type: PropTypes.string
};

export default PageContainer;

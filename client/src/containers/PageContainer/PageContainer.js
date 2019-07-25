import React, { Component } from 'react';
import PropTypes from 'prop-types';

import News from '../../components/News/News';
import Aux from '../../hoc/Aux';
import './PageContainer.scss';

class PageContainer extends Component {
  render() {
    return (
      <Aux>
        <div>PageContainer</div>
        <News />
      </Aux>
    );
  }
}

PageContainer.propTypes = {
  type: PropTypes.string
};

export default PageContainer;

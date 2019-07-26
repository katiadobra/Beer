import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../../components/Item/Item';
import Aux from '../../hoc/Aux';
import './ItemsList.scss';

class ItemsList extends Component {
  render() {
    return (
      <Aux>
        <div>
          <p>Welcome to Zeus project!</p>
        </div>
        <Item />
        <Item />
        <Item />
      </Aux>
    );
  }
}

ItemsList.propTypes = {
  type: PropTypes.string
};

export default ItemsList;

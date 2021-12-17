import React, { Component } from 'react';

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, local: currentLocal } = this.props;
    const { change: nextChange, local: nextLocal } = nextProps;

    if (currentChange === nextChange && currentLocal === nextLocal) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { change, local, show, enable } = this.props;
    // if (!enable) return null;  // ei return kaj korle nicer return ta kaj korbe na r

    return (
      <>
        <button type='button' onClick={() => change(local)}>
          {local === 'bn-BD'
            ? 'Change Clock to Bengali'
            : 'ঘড়িটি ইংরেজিতে দেখুন'}
        </button>
        {show && <p>This is a text.</p>}
      </>
    );
  }
}
export default Button;

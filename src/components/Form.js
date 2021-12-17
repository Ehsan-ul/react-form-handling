import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    title: 'Javascipt',
    textArea: '',
    library: 'React',
    isAwesome: true,
  };

  handleChange = (e) => {
    if (e.target.type === 'text') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === 'textarea') {
      this.setState({
        textArea: e.target.value,
      });
    } else if (e.target.type === 'select-one') {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === 'checkbox') {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log('Nothing Here');
    }
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { title, textArea, library, isAwesome } = this.state;

    console.log(title, textArea, library, isAwesome);
  };

  render() {
    const { title, textArea, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            placeholder='Enter Title'
            value={title}
            onChange={this.handleChange}
          />
          <h2>{title}</h2>
          <hr />
          <br />
          <textarea
            name='text'
            placeholder='Enter Text'
            value={textArea}
            onChange={this.handleChange}
          ></textarea>
          <p>{textArea}</p>
          <hr />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value='React'>React</option>
            <option value='Angular'>Angular</option>
            <option value='Vue'>Vue</option>
          </select>
          <br /> <br />
          <hr />
          <input
            type='checkbox'
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <hr />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

import React from 'react';

export default class OrderFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrorMess: 0
    };
  }

  _handleSubmit = event => {
    event.preventDefault();
    const { customerInfo, onSubmitForm } = this.props;
    const $form = event.target;
    const name = $form.name.value.trim();
    const number = $form.phone.value.trim();
    const address = $form.address.value.trim();
    if (name.length == 0 && number.length == 0 && address.length == 0) {
      this.setState({
        showErrorMess: 1
      });
    } else if (
      /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(number.value) == false
    ) {
      this.setState({
        showErrorMess: 2
      });
    } else {
      onSubmitForm({ name, number, address });
    }
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="Input input-field ">
          <i className="material-icons prefix small">account_circle</i>
          <input id="name" type="text" />
          <label>Name</label>
        </div>
        <div className="Input input-field ">
          <i className="material-icons prefix small">phone</i>
          <input id="phone" type="text" />
          <label>Phone</label>
        </div>
        <div className="Input input-field">
          <i className="material-icons prefix small">address</i>
          <input id="address" type="text" />
          <label>Address</label>
        </div>

        <div className="col s12 offset-s4">
          <button
            id="placeOrder"
            className="waves-effect waves-light btn-large center-align pink lighten-1"
            type="submit"
            name="placeOrder">
            PLACE ORDER
          </button>
          {this.state.showErrorMess == 1
            ? <div className="tryAgain center-align pink lighten-1">
                Not Enough Info
              </div>
            : this.state.showErrorMess == 2
              ? <div className="tryAgain center-align pink lighten-1">
                  Not Valid #
                </div>
              : null}
        </div>
      </form>
    );
  }
}

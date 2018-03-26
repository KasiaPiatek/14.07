var NewComponent = React.createClass({
  proptypes: {
    element: React.PropTypes.string.isRequired,
  }
  
  render: function() {
    return
      <div className="container">
        <div className="form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Imię:</label>
              <input type="text" className="form-control" name="name" placeholder="imię" />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Nazwisko:</label>
              <input type="text" className="form-control" name="surname" placeholder="nazwisko" />
            </div>
            <div className="form-group">
              <label htmlFor="job">Zawód:</label>
              <input type="text" className="form-control" name="job" placeholder="zawód" />
            </div>
            <div className="form-group">
              <label htmlFor="email">e-mail:</label>
              <input type="email" className="form-control" name="email" placeholder="email@" />
            </div>
            <div className="form-group">
              <label htmlFor="InputMessage">Input Message:</label>
              <textarea name="InputMessage" className="form-control" id="InputMessage" rows={4} required defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-info">Wyślij</button>
          </form> </div>
      </div>
  };
});
var element = React.createElement(NewComponent);
ReactDOM.render(React.createElement(element), document.getElementById('app'));


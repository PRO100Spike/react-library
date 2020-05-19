import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Контакты</h1>
      <form>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationServer01">Имя</label>
            <input type="text" className="form-control is-valid" id="validationServer01" placeholder="Имя" value="Mark" required>
              <div className="valid-feedback">
                Looks good!
              </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationServer02">Фамилия</label>
            <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Фамилия" value="Otto" required>
              <div className="valid-feedback">
                Looks good!
              </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationServerUsername">Имя пользователя</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend3">@</span>
              </div>
              <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Имя пользователя" aria-describedby="inputGroupPrepend3" required>
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer03">City</label>
            <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required>
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationServer04">State</label>
            <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationServer05">Zip</label>
            <input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
              <label className="form-check-label" htmlFor="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>
  )
}

export default Contact

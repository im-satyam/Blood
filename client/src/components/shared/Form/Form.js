import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handelLogin, handeRegister } from "../../../services/authService";
import InputType from "./InputType";
const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handelLogin(e, email, password, role);
          else if (formType === "register")
            return handeRegister(
              e,
              name,
              role,
              email,
              password,
              organisationName,
              hospitalName,
              website,
              address,
              phone
            );
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />

        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <div className="d-flex mb-3">
                    <div className="form-check ms-2">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="donarRadio"
                        value={"donar"}
                        onChange={(e) => setRole(e.target.value)}
                        defaultChecked
                      />
                      <label htmlFor="donarRadio" className="form-check-label">
                        Donar
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="adminRadio"
                        value={"admin"}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label htmlFor="adminRadio" className="form-check-label">
                        Admin
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="hospitalRadio"
                        value={"hospital"}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label
                        htmlFor="hospitalRadio"
                        className="form-check-label"
                      >
                        Hospital
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="organisationRadio"
                        value={"organisation"}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label
                        htmlFor="organisationRadio"
                        className="form-check-label"
                      >
                        Organisation
                      </label>
                    </div>
                  </div>
                  <InputType
                    labelText={"email"}
                    labelFor={"foremail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forpassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  <div className="d-flex mb-3">
                    <div className="form-check ms-2">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="donarRadio"
                        value={"donar"}
                        onChange={(e) => setRole(e.target.value)}
                        defaultChecked
                      />
                      <label htmlFor="donarRadio" className="form-check-label">
                        Donar
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="adminRadio"
                        value={"admin"}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label htmlFor="adminRadio" className="form-check-label">
                        Admin
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="hospitalRadio"
                        value={"hospital"}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label
                        htmlFor="hospitalRadio"
                        className="form-check-label"
                      >
                        Hospital
                      </label>
                    </div>
                    <div className="form-check ms-2">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        id="organisationRadio"
                        value={"organisation"}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label
                        htmlFor="organisationRadio"
                        className="form-check-label"
                      >
                        Organisation
                      </label>
                    </div>
                  </div>

                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelText={"Name"}
                      labelFor={"forName"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "organisation" && (
                    <InputType
                      labelText={"Organisation Name"}
                      labelFor={"fororganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}

                  <InputType
                    labelText={"email"}
                    labelFor={"foremail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forpassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelText={"Website"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not registerd yet? Register
              <Link to="/register"> Here !</Link>
            </p>
          ) : (
            <p>
              Already a user
              <Link to="/login"> Login !</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

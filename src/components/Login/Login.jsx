import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/valodators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import classes from "../common/FormsControls/FormControls.module.css";
const LoginForm = (props) => {
  let { handleSubmit, error } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="email"
          name="email"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          placeholder="password"
          name="password"
          type="password"
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field component={Input} name="rememberMe" type="checkbox" /> remember
        me
      </div>
      {error && <div className={classes.formSummaryError}> {error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  let { login, isAuth } = props;
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;

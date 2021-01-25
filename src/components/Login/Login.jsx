import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/valodators/validators";
import { Input } from "../common/FormsControls/FormsControls";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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
  const onSubmit = (formData) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
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

import ReactDOM from "react-dom";
import SocialNetworkApp from "./App";
import App from "./App";

test("renders app", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SocialNetworkApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

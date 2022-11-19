import { backendURL } from "shared";

const LoginButton: React.FC = () => {
  return (
    <div>
      <a href={backendURL + "/api/login/google"}>
        <img src="img/google-login.png"></img>
      </a>
    </div>
  );
};

export default LoginButton;

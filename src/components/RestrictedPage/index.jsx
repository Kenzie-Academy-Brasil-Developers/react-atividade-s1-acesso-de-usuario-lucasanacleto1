import "./style.css";

const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Bem vindo, {user}!</h1>
          <p>
            <button className="btn" onClick={Logout}>
              Logout
            </button>
          </p>{" "}
        </div>
      ) : (
        <div>
          <h1>Você não pode acessar essa página.</h1>
          <p>
            <button className="btn" onClick={Login}>
              Entrar
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default RestrictedPage;

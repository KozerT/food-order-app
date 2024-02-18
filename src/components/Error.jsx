const Error = ({ title, message }) => {
  return (
    <div className="error">
      <h2 className="">{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;

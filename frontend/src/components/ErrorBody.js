const ErrorBody = ({ error }) => {
  return (
    <div className='error-body'>
      {error && <div className='error-message'>{error}</div>}
    </div>
  );
};

export default ErrorBody;

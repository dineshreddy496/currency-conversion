import GoogleLogin from 'react-google-login'

const responseGoogle = response => {
  console.log(response)
}

const Google = () => (
  <div className="google-container">
    <GoogleLogin
      clientId="https://mail.google.com/"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  </div>
)

export default Google

import welcomegif from './img/hello-welcome.gif';

function Anasayfa() {
  return (
    <div>
      <h1>Anasayfa</h1>
      <p>
        Websiteme hoşgeldiniz.
      </p>
      <div>
        <img src={welcomegif} alt="Hoşgeldiniz" />
      </div>
    </div>
  )
}

export default Anasayfa;
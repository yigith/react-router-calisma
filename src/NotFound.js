import notfound from './img/notfound.jpg';

function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sayfa Bulunamadı :(</h1>
      <p>Üzgünüm, böyle bir sayfa yok!</p>
      <div>
        <img src={notfound} alt="Not Found" style={{ maxWidth: "100%" }} />
      </div>
    </div>
  )
}

export default NotFound;
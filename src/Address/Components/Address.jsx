import './Address.css'

export default function Address() {
  return (
    <div className="container">
    <div className="section-title">
      <h2>Address</h2>
      <div className="underline" />
    </div>   
    <br/>
 <div className="input-group flex-nowrap co">
  <span className="input-group-text " id="addon-wrapping"></span>
  <input type="text" className="form-control " placeholder="Address"  aria-describedby="addon-wrapping" />
</div>

      </div>
  )
}

import { NavLink } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return (
<footer className=" h text-center text-lg-start">

  <div className="container p-4">

    <div className="row">

      <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ">
      <h3 className='lobster-regular' > <span>Feryal</span>Store</h3> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 iconsp ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
      <p>palestine _Tulkarem </p>
      </div>

      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
      <h3 className='lobster-regular' >Contact with us</h3> 
      <ul className="SidebarList">
  <div className="row">
  <NavLink className="text" to = 'https://www.facebook.com/profile.php?id=100008106768584'>
    
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 iconsp "  >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
 Facebook</NavLink>

      <NavLink className="text"  to = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 iconsp">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

Email</NavLink>
<NavLink className="text"  to = 'https://github.com/feryalmoneer'> 

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 iconsp ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

GitHup</NavLink>

  </div>
 </ul>

    </div>
    <div>


   

    </div>
  

    </div>

  </div>

  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2024 FeryaLMoneer
 
  </div>

</footer>


  )
}

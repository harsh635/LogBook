import "./header.css"
import bl from "./pexels-jess-bailey-designs-743986.jpg"

export default function header() {
  return (
    <div className='header'>
        <div className="headerTitle">
            <span className="headerSm">
              Let's Get Started
            </span>
            <span className="headerlg">
                Blog
            </span>
        </div>
        <img className="headerImg" src={bl} alt="background"></img>
    </div>
  )
}


import Logo from "../../src/assets/website/Vector.png" 
export default function Navigation() {
  return (
    <div className="px-1 py-1 flex border-r-1 w-1 h-screen ">
      <div className="logo-div flex space-x-3 items-center" ></div>
      <img src={Logo}/>
      <span> Tournamnet</span>
    </div>
  )
}

import { Link } from "gatsby";
import React,{ useState, useEffect, useRef } from "react";
import CTALink from "./CTALink";

function useInterval(fn,delay){
  const savedFn = useRef;
  useEffect(()=>{
    savedFn.current = fn;
  },[fn])

  useEffect(()=>{
    function callFn(){
      savedFn.current();
    }
    if(delay !== null){
      let id = setInterval(callFn,delay)
      return ()=>clearInterval(id)
    }
  },[delay])
}
const Request = ()=>{
  let [data , setData] = useState(0);
  useEffect(()=>{
    fetch("https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/maticinr",{
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data.ticker.last)
      setData(data.ticker.last) 
    })
  },[])
  const delay = 5000;
  useInterval(()=>{
    fetch("https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/maticinr",{
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data.ticker.last)
      setData(data.ticker.last) 
    })
  },[delay])

  return data
}
// useEffect(() => {
//   async function getDogecoinPrice() {
//     const { data } = await axios.get(
//       'https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/dogeusdt'
//     );
//     setTicker(data.ticker);
//   }
//   getDogecoinPrice();
//   setInterval(() => getDogecoinPrice(), 10000);
// }, []);

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true }) => {

  let headerClass = "fixed w-full z-30 top-0 text-white";

  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 text-white";


  let navContentClass =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20 text-white";


  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-white";


  return (
    <nav id="header" className={headerClass} style={{background:"#0a1647"}}>
      <script src="https://widget.nomics.com/embed.js"></script>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link id="siteTitle" className={titleClass} to="/">
            <div style={{display:"flex",alignItems:"center"}}>
            <img src="https://cdn.sanity.io/images/pbft8nsp/production/df94f40876875ad59ce6672508d6d7fdf70327d8-38x34.svg" height="60" width="60"/>
            <span>{siteTitle}</span>
            </div>
          </Link>
        </div>
        <div className="flex-1">
          <div style={{color:"white",textAlign:"right",paddingRight:"5%"}}>
            <Link href="https://wazirx.com/exchange/MATIC-INR" target="_blank">
              <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
              <div style={{position:"relative",right:"-54px"}}><svg xmlns="http://www.w3.org/2000/svg" id="i-matic-logo" viewBox="0 0 131 32" style={{height:"22px"}}><g fill="none" fill-rule="evenodd"><path fill="#2BBDF7" d="M15.701 13.193l4.464 9.9 6.644-3.83.005-.002v-7.666z"></path><path fill="#2891F9" d="M35.394 5.847l-4.147-1.562-4.432-.358V27.75l6.649 3.832 5.248-10.74-3.31-10.385z"></path><path fill="#2BBDF7" d="M35.005 3.929l-1.54 3.831h-.002v23.82l6.65-3.831V3.929z"></path><path fill="#2B6DEF" d="M33.464.095l-6.65 3.834 6.65 3.833 6.65-3.833z"></path><path fill="#2891F9" d="M20.168 15.424v-.002l-6.649-7.44L.22 3.926v23.82l6.648 3.833 1.9-13.182 4.751.863v-.004l6.65 3.832v-7.664z"></path><path fill="#2B6DEF" d="M6.87.094L.218 3.927l19.946 11.502 3.014-1.737 3.635-2.097z"></path><path fill="#2BBDF7" d="M6.87 15.425h-.001v16.154l6.65-3.832v-8.489z"></path></g></svg></div>
              <div>₹{" "}{<Request />}</div>
              </div>
            </Link> 
          </div>
        </div>
        {showNav && navMenuItems && (
          <div className={navContentClass} id="nav-content">
            <ul className="list-reset flex justify-end flex-1 items-center">
              {navMenuItems.map((i) => (
                <li className="mr-3">
                  <CTALink {...i} buttonActionClass={navActionClass} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Header;

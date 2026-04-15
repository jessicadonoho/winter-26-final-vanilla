const addNumbers = (first, second) => {
  return first + second;
}

if (typeof module !== 'undefined') {
  module.exports = {
    addNumbers
  }
}

document.querySelector("#hello").addEventListener("click", (e)=>{
  document.querySelector("#output").innerHTML="<p>World</p>"
})
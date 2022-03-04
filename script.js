const btn = document.querySelector("#btn-inc");
const decrBTN = document.querySelector("#decr-btn");
const output = document.querySelector("#text-output");
const incrBTN = document.querySelector("#incr-btn");

const URLinput = document.querySelector("#inputURL");
const encode = document.querySelector("#encodeURL");
const decode = document.querySelector("#decodeURL");
const res = document.querySelector("#result");

const charlen = document.querySelector("#char-input");
const outchar = document.querySelector("#char-length");

const hxinpt = document.querySelector("#hex-input");
const hxotp = document.querySelector("#hex-output");

btn.addEventListener("click",(event) =>{
    event.target.value++;
});

let count = 0;
decrBTN.addEventListener("click",(
    
)=>{
    count--;
    output.value = count;
});

incrBTN.addEventListener("click",() =>{
    count++;
    output.value = count;
})

encode.addEventListener("click",() =>{
    
    res.value = encodeURIComponent(URLinput.value);
});

decode.addEventListener("click",() =>{
    res.value = decodeURIComponent(URLinput.value);
});

charlen.addEventListener("input",(ch) =>{
    outchar.innerText = ch.target.value.length;
});

hxinpt.addEventListener("input",() =>{
    hxotp.style.backgroundColor = hxinpt.value;
});
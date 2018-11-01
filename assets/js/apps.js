import log from './log';
import config from './config';
import $ from "jquery";

console.log(config)

log("salut2")


const [a, ...rest] = [1,2,3]

$(function(){
    console.log("jquery!")
})

console.log(rest,a)



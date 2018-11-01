import log from './log';
import config from './config';
import css from '../scss/app.scss';
import $ from "jquery";

console.log(config)

log("salut2")

$("#app").html("<div class='test'><div>truc</div></div>")


const [a, ...rest] = [1,2,3]

$(function(){
    console.log("jquery!")
})

console.log(rest,a)



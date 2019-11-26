import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/Logo.png'
import header from './img/header.jpg'

//import { **insert prototype name** } from './Ivan_Project.js';

$(document).ready(function() {

  $('.header').append(`<img src="${header}" width="100%" height="550px" alt="artistryLogo"><p class="Htext">Ivan Ramos</p> <p class="Ptext">Front-end web developer.</p>`)
  $('.logo').append(`<img src="${logo}" width="55" height="55" alt="artistryLogo">  `)
});

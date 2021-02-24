const inquirer = require("inquirer");

const Employee = require ("./lib/Employee");
const Manager = require ("./lib/Manager");
const Intern = require ("./lib/Intern");
const Engineer  = require ("./lib/Engineer");

const fs = require ("fs");

const employee1 = new Employee ("Anthony", "15", "mail@mail.com");

console.log (employee1)

//"use strict";
// output
    //window.alert(); //popupbox
    //document.write(); //testing porpues
    //innerHTML/innerTEXT //to element content
    //console.log()/console.warn()/console.error()/console.table(); debugging
    //value / form input elment value

// const { data } = require("jquery");

    // alert('dnvshgc ');
    // console.log("dsjcvshdvc");

// alert("hello ");  
// prompt("Enter your Age");
// confirm("Do you want Delete ?")
// datas={
//     name:"sdd",
//     email:"sdsdds",
//     exam:25
// }

// document.write('Hello Document write');
// 

// console.log("Hello console");
// console.warn("Hello console");
// console.error("Hello console");
// console.table(datas);

// Selecting Elements
    // document.getElementById();
    // document.getElementsByClassName();
    // document.getElementsByName();
    // document.getElementsByTagName();

    // if there is id we can select directly
    // demo

    // select element by css selectors
        // document.querySelector('.demo');
    


// innerHTML/innerTEXT 

// document.getElementById('demo').innerHTML="Hello inner <mark>html</mark>";
// document.getElementById('demo2').innerText="Hello inner  <mark>html</mark>";

// document.getElementById('in').value=123456;
// function display(){
//     alert(demo.innerHTML);
// }



// varables
    // identifiers
     // 1.unique name 
     // 2.start with alpaha
     // 3.may can be start with _
     // 4.may can be start with $
     // 5.casesitive
     // 6.Reserved word
     // 7.may be include numbers

    // $na215me100; //variable declaration 4000
    // name=10; // data assign
    // name="Akil" // data re assigning
    // console.log(name); // data access
    // Name; //5000
    // NaMe; //6000

//                     var              let             const
//     scope           Global           Block           Block
//     Reassign        ✔                ✔              ✖
//     Rediclaration   ✔                ✖              ✖
//     decalre/usage   alltime          after          after

// var age;
// not defined
// undefined
// age=10;
// var age; //create

// name=10;
// let name;
// console.log(name);
// let name;

// const PI=3.145458;

 

// {
// }
// console.log(age);

// operators
    // Arithmatic
        // + - * / % ++ -- **

    // assignmnet
        // = += -= *= /= %= **=  x=x+10;  x+=10;

    // condition/   
    // relational/   
    // comparison/ 
        // < > <= >= 10!=10 10=="10" 10 === "10" !==  10>20  // boolean expression
    //Logical
       // 10>20&&20>10  || !    0 0  0
    // Ternory oper
        // (condition)? true : false
    
        
        // + 
        
        //console.log("10"+10+10+"10"); // 102010
        // var sum=10+20;
        // document.write(`
        // <ul>
        //     <li>Sum is ${sum}</li>
        //     <li>Sum is ${sum}</li>
        //     <li>Sum is ${sum}</li>
        //     <li>Sum is ${sum}</li>
        // </ul>`);

        // // String is a charector array
        // var txt="Hello, World, hello, world";
        // var res;
        //     res=txt.length;
        //     res=txt.includes("hellos");//boolen
        //     res=txt.concat(" dfvkhbdgu");// copy of text
        //     res=txt.endsWith('orld');// boolean
        //     res=txt.startsWith('He');// boolean
        //     res=txt.indexOf('rl');// first oocurence
        //     res=txt.lastIndexOf('rl');// last oocurence
        //     res=txt.match("lo");// array of matched string
        //     res=txt.padEnd(40,".");// copy string with padding text
        //     res=txt.trimEnd();// copy string without whitespace
        //     res=txt.repeat(5);// array of matched string
        //     res=txt.replace("world","Island");// array of matched string
        //     res=txt.search(/rld/);// array of matched string
        //     res=txt.slice(10,13);// array of matched string
        //     res=txt.substring(10,20);// array of matched string
        //     res=txt.split(",");// array of matched string
        //     res=txt.toLowerCase();// array of matched string
        //     res=txt.toUpperCase();// array of matched string


        //     console.log(res);

        //conditional statement
        // 1.if
            // .Nested if
            // .else
            // .esle if
        // 2.switch

        if(10>20){
            console.log("Greater is 10");
        }else if(10<20){
            if (11==10) {
                
                console.log("10 equals 10");
            }
            console.log("Greater is 20");
        }else if(20<30){
            console.log("Error");
        }
        var age=15;
        if (age>=18) {
            console.log("Eligble");
        } else {
            console.log("Not Eligble");
        }
        console.log((age>=18)? "Elibleeeee":"Nottttt");
        // ()? : ;
        function grade() {
            grades=document.getElementById('in').value;
            switch (grades) {
                case 'A':
                    document.getElementById("out").innerHTML="very very good";
                    break;
                case 'B':
                    document.getElementById("out").innerHTML=" very good";
                    break;
                case 'C':
                    document.getElementById("out").innerHTML="good";
                    break;
            
                default:
                    document.getElementById("out").innerHTML="Error check grade";
                    break;
            }
        }

        // Array and object
            // multiple elemetns store
             //var arr=[10,20,30,40,500,80,70]; // index 0 1 2 3
            // var arr2=Array(1,2,3,4);
            // var arr3=[
            //     [10,20,30,
            //         [1,2,3]
            //     ],
            //     [40,50,60],
            // ];

            // arr.splice(1,2,50,60,70);
            // arr.slice(1);
            // console.log(arr3.flat());
            // console.log(arr.slice(0,-1));
            // Array methodes
            // arr[6]=50;
            // arr.push(50);
            // arr.push(60);
            // arr.pop();   // remove last
            // arr.shift(); // remove first
            // arr.unshift(5); // add first
            //  var newarr=arr.find(res=>res > 30);
            //  console.log(newarr);
            // console.log(Math.max(...arr));
            // console.log(arr.sort((a,b)=>a-b));
            
            // console.log(arr.join("*"));
            //  arr[arr.legnth];
            // delete arr[0];
            // console.log(arr.concat(arr2));
            // arr.push(...arr2);
            // console.log(arr)
        // object
        // var name="Arun";
        //    var student={ name,Age:0,Class:0,mark:0,
        //         exam(){
        //             console.log(`${this.name} got ${this.mark} in Exam`)
        //         },
        //         read(){
        //             console.log(this.name+" is reeading")
        //         }
        //     };
        //     student["course"]; //add
        //     console.log(student.course);

        //     var std1=student;
        //         std1.name="Akash";
        //         std1.read();
        //         std1.mark=59;
        //         std1.exam();

        //     var std2=student;
        //         std2.name="Arun";
        //         std2.read();
        //         std2.mark=68;
        //         std2.exam();
        //         std2.course="dkb";

        //         console.log(std2.course)

        // loop
        //    for
        //    while        
        //    do while        
        //    foreach        
        //    for in        
        //    for of        
        // var i=0;
        
        // for (let i = 0; i <= 10; i++) {
        //     demo.innerHTML+=`
        //     <div class="col">
        //         <div class=" rounded shadow p-3 text-center bg-success-subtle">
        //             ${i}
        //         </div>
        //     </div>
        //     `;
           
        // }

        var count=1;
        // while (count <=10) {
        //     demo.innerHTML+=`
        //      <div class="col">
        //          <div class=" rounded shadow p-3 text-center bg-success-subtle">
        //              ${count}
        //          </div>
        //      </div>
        //      `;
        //     count++;
        // }
        // var num=5;
        // do {
        //     demo.innerHTML+=`
        //     <div class="col">
        //         <div class=" rounded shadow p-3 text-center bg-success-subtle">
        //             Heleoo
        //         </div>
        //     </div>
        //     `;
        //     num--;
        // } while (num>=0);

        // var users=["Akil","Arun","AKASH","Adam"];
        var students=[
            {name:"Akil",age:25,class:10,mob:987654321},
            {name:"Arun",age:26,class:11,mob:123548554},
            {name:"AKASH",age:27,class:10,mob:59656555},
            {name:"Adam",age:28,class:12,mob:987566321},
            {name:"Devika",age:28,class:13,mob:987566321},
        ];

        // students.forEach(item => {
        //     // document.write(item.name+" - "+item.age+" - "+item.class+" - "+item.mob+"<br>");
        //     row.innerHTML+=`
        //              <tr>
        //                  <td>${item.name}</td>
        //                  <td>${item.age}</td>
        //                  <td>${item.class}</td>
        //                  <td>${item.mob}</td>
        //                  <td>
        //                      <button class="btn btn-warning">Edit</button>
        //                      <button class="btn btn-danger">Delete</button>
        //                  </td>
        //              </tr>
        //          `;
        // });

        for (let item of students) {
            document.write(item.name+" - "+item.age+" - "+item.class+" - "+item.mob+"<br>");
        }

        for (const key in students[0]) {
            document.write(key+"<br>");
        }

        // for (let i = 0; i < students.length; i++) {
            // demo.innerHTML+=`
            //  <div class="col">
            //      <div class="card rounded shadow p-3 text-center bg-success-subtle">
            //          <p clas="card-text">Name : ${students[i].name}</p>
            //          <p clas="card-text">Age : ${students[i].age}</p>
            //          <p clas="card-text">Class : ${students[i].class}</p>
            //          <p clas="card-text">Mobile : ${students[i].mob}</p>
            //          </div>
            //      </div>
            //  </div>
            //  `;

        //     row.innerHTML+=`
        //         <tr>
        //             <td>${students[i].name}</td>
        //             <td>${students[i].age}</td>
        //             <td>${students[i].class}</td>
        //             <td>${students[i].mob}</td>
        //             <td>
        //                 <button class="btn btn-warning">Edit</button>
        //                 <button class="btn btn-danger">Delete</button>
        //             </td>
        //         </tr>
        //     `;

        // }
        

            // console.log(std1.name);
            // console.log(student["age"]);
            

        // Functions 
            // Inbuild func
            // User difined function

        // function sum(num1,num2,...data) {
        //     //  num1=parseInt(n1.value); // 
        //     //  num2=parseInt(n2.value); // ["hi", 1, 2, "frog"].reduce((a, b) => a + b)
           
        //     return num1+num2+data.reduce((a,b)=>a+b);
        // }
        //      result.innerHTML= sum(100,100,100,100,100);

        //      var x=10;
        //      var y=20;

        //      function change(o,p) {
        //         o=20;
        //         p=30;
        //      }


        //      change(10,20);

        function Sum() {
            return 10+20;
        }
        Sum();

        var Add=function () {
            return 10+20;
        }
        Add();

        var Diff=() =>{
            return 20-10;
        }
        Diff();

        var Mult= data => data+10; 

        function hi(data) {
            return ()=>{
                
            }
        }


      
       

        var res=Mult(30);
       console.log(res);
       
       (()=>{
        //    alert("In");
        })(); // 
        
        // alert("Out");
        //z=10;
        import  ExternalSum ,{message} from "./data.js";

        console.log(ExternalSum());
        console.log(message);

        // Math 
        console.log(Math.PI);
        console.log(Math.pow(10,2));
        console.log(Math.random()*100);
        console.log(Math.min(10,20,3,20));
        console.log(Math.max(10,20,3,20));
        console.log(Math.sqrt(25));
        console.log(Math.round(5.5));
        console.log(Math.ceil(5.5));
        console.log(Math.floor(5.9));


        // Math ✔
        // Date
        // Timing func
        // REguExpres
        // Exception handling
        // Set
        // Map
        // Set
        // modules ✔
        // json
        // promises
        // filter
        // addEventListener


// work 1
    // var arr1=["PHP","JAVA","PYTHON"];
    // var arr2=["PHP","RUBY",".NET"];
    // var arr3=["ANGULAR","JAVASCRIPT","TYPSCRIPT"];
    // var arr4=["ECMASCRIPT","JAVA","PYTHON"];
// CREATE A NEW ARRAY THEN MERGE THESE ARRAYS WITH NO REPEATING VALUES 
        // :- spread operator

// Work 2
    // RECORD VIDEO AND AUDIO WITH YOUR WEBCAM THEN DOWNLOAD THE RECORDED VIDEO

// Work 3
    // Accepting star rview with count
        // :- ⭐⭐⭐⭐⭐ 5
        
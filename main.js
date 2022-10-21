//1,.variable in javascript
/*
var x=10;   
let name="jake";
const y=true;

//there are many different type of variable in javascript ;


*/



// 2. Array in Javascript 


// let selectcolor = ['Red','green','blue'];
// selectcolor[3]='black';

// console.log(selectcolor);










// 3. Funtion in Javascript 




// function game(name){
//     console.log('Hello' + name );
// }
// game('A.Joker') ;


// function square(number){
//     return number * number;
// }
// console.log(square(9));








//5. object in array

// const todos =[
//     {
//         id:1,
//         text:'meeting',
//         iscompleted: true
//     },
//     {
//         id:2,
//         text:'Code',
//         iscompleted:true


//     },
//     {
//         id:3,
//         text:"Chocolate",
//         iscompleted:false
//     }
// ];

//   console.log(todos);

//   const todojsonj=JSON.stringify(todos);
//   console.log(todojsonj);
  



//6.--------------------Loops-----------------------------------------

//1. Forloops
   // for (let i=0;i<=100000;i++){
  //     console.log(i); 
   // }

// //2.While Loops
    // let i=0;
    // while(i<200){
    //     console.log(i);
    //     i++;
    
    // }

//3.Loops through Array  // IMPORTANT//////////
 

    //  for (let i=0;i<todos.length;i++){
    //       console.log(todos[i].text)
    //  }   



    // for(let todo of todos){
    //     console.log(todo.iscompleted);
    // }








    //7.-------------------high order array method------------------

    //1.foreach
             // todos.forEach(function(name){
             //             console.log(name.Text);
             // });
    
    //2.map-
          //    const todoText = todos.map (function(todo){
           //           return todo.Text;
            //   });      

          //        console.log(todoText);


    //3.filter
        //    const todoComplete=todos.filter(function(todo){
        //            return todo.iscompleted  ===false;
        //    });
        //     console.log(todoComplete);

    //4.FIllter and Map
        //  const todoComplete=todos.filter(function(todo){
        //    return todo.iscompleted===true;
        //  }).map(function(todo){
        //          return(todo.Text);
        //  });
        //    console.log(todoComplete);






//8...................Conditional......................

   //1.If ......else

        //  const x=20;

        //  if (x===20){
        //      console.log('x is 20');

        //  }else{
        //      console.log('x is NOT 10');
        //  }


    //2.IF......elseIf......else
            //  let x=20;
             
            //  if(x===10){
            //      console.log('x is 10');
            //  } else if(x>10){
            //      console.log('x is greater than 10');
            //  }else{
            //     console.log('x is less than 10');
            //  }
    //3.IF with(Or)
    
      
    // const x=20;
    // consty=10;

    // if(x>=10 || y<20){
    //     console.log('x is more than 10');
    // }


    //4.IF with (and)
        // const x=20;
        // const y=10;
        // if(x>10 && y<20){
        //     console.log('x is greater than y');
        // }

    //5.Ternary operation
    //    const x=10;


       
       
    //    const color = x>8 ?  'Red':'blue';
       
       
    //    console.log(color);
 
//   const x=10;

//   const color=x>10 ? 'red':'blue';
   
    // switch(color){
       //     case'red': 
      //       console.log('Color is red');
    //      break;
    //      case'blue':
     //      console.log('color is blue');
      //      break;
      //      default :
      //          console.log('color is not red or blue');
     // }



 //9...............function..........................
     //1.NormalFunction

        // function addnum(num1,num2){
        //     console.log(num1 +num2);
        // }
       // addnum(7,2);         
    


     //2.function with return
    //    function addnum(num1,num2){
    //        return num1+num2;

    //    }
    //    console.log(addnum(7,2));

    //3.Arrow Function
    //    const addnum=(num1,num2)=> console.log(num1+num2);

    //    addnum(7,2);

    //4.Constructor Function   //// NEED TO UNDER STAND THIS /////
        //   function person(firstname,lastname,dob){
        //       this.firstname=firstname;
        //       this.lastname=lastname;
        //       this.DOB=dob;
        //   }

        //   const person1=new person('name','smith','7-7-1770');
        //   const person2=new person('Hermes','Smith','05-03-1990');
        //   console.log(person1);
        //   console.log(person2);
        

 // 10 ...............D.O.M(Document object method)..........................
      //1.single element
            //   const f=   document.getElementsByClassName('logo');
              //    console.log(f);
        

            
        
               
     //right-click on javascript in console for below function
    //  console.log(document.body);


            //11........innerhtml...........................
                       //    var time=document.querySelector('.hour');
                       //           let hour=12;
     
                       //           if(hour>12){
                       //               time.innerHTML='Goodevening';
                       //           }else{
                       //               time.innerHTML='Goodmorning';
                       //           }
        //


    //...................looping throught two style........................................
                    // const item=document.querySelectorAll('.items');
                    //    console.log(item);
                   
                    //      item[1].style.background='black';
                //    for(i=0;i<item.length;i++){
                //        item[1].style.background='red';
                //    }
 
 
 
 //...........................  Query Selector............................
        //   var bar=document.querySelector('input');
        //   bar.style.display='none';


        //   var kk=document.querySelector('input[type=submit]');
        //   kk.style.display='none';
//..............parent and children selector...............................
        // let parent=document.querySelector('.container');
          

        //    console.log(parent.children);
        //    console.log(parent.children[0]);


//..................creating a div through javascript..................
    //   var newdiv=document.createElement('div');
      
    //   console.log(newdiv);

           //adding class and id to the new div...........
        //    newdiv.className='hello world';
        //    newdiv.id='hello world 1';

           //inserting text in the div....
        //    var text=document.createTextNode('"hello world"');
        //    newdiv.appendChild(text);

           //now inserting 'IT' in the html
            //  var inhtml=document.querySelector('.main,hr');
            //  inhtml.insertBefore(text,hr);
//...............5.adding eventlistener.................................................................................   

                //   var padding=document.querySelector('.child-divs');

                   //1. var button=document.querySelector('.btn-55').addEventListener('click', function(){
                     //     padding.style.padding='50px';
    
                           // });
 
                //  2.   var button=document.querySelector('btn-55').addEventListener('click', buttn);


                //   function buttn(){
                //       padding.style.background='red';
                //   }


  //.............up is incomplete......................













// ................high-order array method.............................................................................................

                                          //  const computer=[
                                          //     {
                                          //       name:'JAVA',
                                          //       class:'highly qulified',
                                          //       id:001,   
                                          // },
                                          // {
                                          //     name:'DELL',
                                          //     class:'highly functional',
                                          //     id:002,
                                          // },
  
                                          //  ];

                                          //  const age=[11,22,33,44,55,,66,77,,88,80];



  //looping through array(age) with number greater or equal to 21 
  

// let age21=[];
// for(let i=0;i < age.length ;i++){
//     if (age[i] >=20){
//         age21.push(age[i]);
//     }
// }
// console.log(age21);

//...............now same as upward is done through high order method= "filter"
  


                    //   const agethe21=age.filter(function(age){
                    //       if(age >11){
                    //           return true;
                    //       };

                    //   });
                   
                //  const dell=computer.filter(function(dell2){
                //      if(dell2.id===002){
                //          return true;
                //      }

                //  });
                //  console.log(dell);


//.................now lopping   array using method ="map()"..................
            // 1//   const computertest=computer.map(function(test){
            //        return test.id;

            //    });
            //    console.log(computertest);

          

             //2//Now by using templet string"`${}" in map //NOTE:temoplet can be used in any thing in javscip
                    //      const computertest=computer.map(function(test){
                    //    return `${test.name}[${test.id}-${test.class}]`;
                    // });
                    //  console.log(computertest);

           // 3// now  finding  square root of age by using map()

                    //   const agesquare=age.map(function(square){
                    //       return Math.sqrt(square);
                    //   });


                    //   console.log(agesquare);
   
          //4//Now multiplying using map()
                //    const agemulti=age.map(function(multiply){
                //         return multiply * 2;

                //    });


                //    console.log(agemulti);
        

        //5//Now first squaring and then  multiplying
            //    const agemap=age.map(function(square){
            //        return Math.sqrt(square);
            //    }).map(function(multiply){
            //        return multiply * 2;
            //    });

            //    console.log(agemap);


//........................Now looping  through sort().......................................................
        //this arry is for sorting only because sortting need usely numbers.......
            //   const company=[
            //       {
            //           name:'comapany1',start:1980,end:2000,
            //       },
            //       {
            //           name:'comapany2',start:1970,end:2001,
            //       },
            //   ];
               
              //1//.........now sorting up array in order of start date....
                 
                        //   const sortedcompany=company.sort(function(c1,c2){
                        //       if(c1.start>c2.start){
                        //           return 1;

                        //       }else{
                        //           return -1;
                        //       }
                        //   });  
                        //    console.log(sortedcompany);
                        
                     //..............this is same as up one diffrencs is this is done with an array with number only...............................................                                        
                                        //  const age=[20,19,21,22,23,24,25,26,27,28,29,,6,30,10,11];
                                        //   const sortedage=age.sort(function(sor1 , sor2){
                                        //      if(sor1 > sor2){
                                        //     return 1;

                                        //       }else{
                                        //          return -1;
                                        //       }
                                        //  });
                                        //  console.log(sortedage);


                                        //....................or...................

                                                //  const sortedage=age.sort(function(a1,a2){
                                                //      return a1 - a2;
                                                //  });
                                                //  console.log(sortedage);


                // ...........................now loopping through array using reduce()................................................
                                // const number =[23,6,49,90,2,29,99,69,70,6,99,10,20];
                                // .......aadding up number using forloop().....
                                             // let sum=0;
                                             // for(i=0;i<number.length;i++){
                                             //     sum += number[i];
                                             // }

                                             // console.log(sum);
                              //.................now adding number using reduce()......................
                                            //  const sum=number.reduce(function(total , num){
                                            //          return total + num;
                                            //  },0);
                                            //  console.log(sum);

                               //.................same as before but these time for company................             '
                                            // const company=[
                                            //      {name:'com1',Start:1990,end:2010},
                                            //      {name:'com2',Start:1970,end:2000},
                                            //  ];
                                     
                                  
                                            //  const totalcompany=company.reduce(function( total,company){
                                            //      return total + (company.end - company.Start);
                                            //  },0);


                                            //  console.log(totalcompany);

                         //now doing combined method of high arry method
                                        //   const ages=[20,10,30,40,50,60,70,9];
                                        //   const combined=ages
                                        //   .map(ages => ages * 2)
                                        //   .filter(function(ages){
                                        //       if(ages >=50){
                                        //           return true;

                                        //       }
                                        //   }) .sort(function(a,b){
                                        //     return a-b;
                                        // }).reduce(function(a1,a2){
                                        //       return a1 + a2;
                                        //   },0)
                                         
                                        //   console.log(combined):



                                    
                                    
                                    

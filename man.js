
// document.addEventListener('DOMContentLoaded', function () {
//   const screen = document.querySelector('.screen');
//   const buttons = document.querySelectorAll('.btn');
//   const clear = document.querySelector('.btn-clear');
//   const equal = document.querySelector('.btn-equal');

//   buttons.forEach(function (button) {
//       button.addEventListener('click', function (e) {
//           const value = e.target.dataset.num;
//           console.log(value);
//           screen.value += value;
//       });
//   });

//   clear.addEventListener('click', function () {
//       screen.value = '';
//   });

//   equal.addEventListener('click', function () {
//       try {
//           screen.value = eval(screen.value);
//       } catch (error) {
//           screen.value = 'Error';
//       }
//   });
// });

// ikinci practica

// document.addEventListener("DOMContentLoaded", function (){

//     const screen = document.querySelector('.screen');
//     const buttons = document.querySelectorAll('.btn');
//     const clear = document.querySelector('.btn-clear');
//     const equal = document.querySelector('.btn-equal');

//     buttons.forEach(function(button){
//      button.addEventListener("click", function(e){
//          const value = e.target.dataset.num;
//          console.log(value);
//          screen.value += value;
//      })
//     })

//     clear.addEventListener("click", function(){
//       screen.value = "";
//     })



// equal.addEventListener("click", function(){
//   try{
//     screen.value = eval(screen.value)
//   }catch(error) {
//     screen.value = "Error"
//   }
// })
// })


document.addEventListener("DOMContentLoaded", function () {

    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            let value = e.target.dataset.num;
            console.log(value);
            screen.value += value;
        })
    })

    clear.addEventListener("click", function () {
        screen.value = "";
    })

    equal.addEventListener("click", function () {
        try {
            screen.value = eval(screen.value)
        } catch (error) {
            screen.value = "ERROR"
        }

    })
})
// 机制 监听任何异常

function func1() {
    try {
        func2() 
    } catch (error) {
        
    }
  
}

async function func2() {
    try {
        await func3()
    } catch (error) {
        console.log('error')
    }
}

//Promise async await
// KOA 库 包 Promise axios Promise Sequelize

// 全局异常处理 异常 Promise Async 回调 难
// 不同
function func3() {
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const r = Math.random()
            if(r<0.5){
                reject('error async')
            }
        })
    })
}



func1()





// async function func3() {
//     return new Promise((resolve, reject) => (
//         setTimeout(function () {
//             var rand = Math.random();
//             if(rand<0.5){
//                 reject('error')
//             }
//         }, 1000)
//     ))
// }
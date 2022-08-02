const deleteBtn = document.querySelectorAll('.deleteItem')
const item = document.querySelectorAll('.journalItem')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

// Array.from(item).forEach((element)=>{
//     element.addEventListener('click', markComplete)
// })


async function deleteItem (){
    // console.log(this.parentNode.childNodes[1].childNodes[1].data)
    const itemText = this.parentNode.childNodes[1].childNodes[1].data
    // console.log(itemText)
    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    } 
    catch(err){
        console.log(err)
    }
}

// async function markComplete(){
//     const itemText = this.parentNode.childNodes[1].innerText
//     try{
//         const response = await fetch('markComplete', {
//             method: 'put',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 'itemFromJS': itemText
//             })
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }

// async function markUnComplete(){
//     const itemText = this.parentNode.childNodes[1].innerText
//     try{
//         const response = await fetch('markUnComplete', {
//             method: 'put',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 'itemFromJS': itemText
//             })
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }
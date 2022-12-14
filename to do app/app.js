var a = document.getElementById('abc')



function bhejo(){
    var ab = document.getElementById('xyz')
    var li = document.createElement('li')
    var b = document.createTextNode(ab.value)
    li.appendChild(b)
    a.appendChild(li)
ab.value = ''
var del = document.createElement('button')
var delbtn = document.createTextNode('Delete')
del.appendChild(delbtn)
li.appendChild(del)
del.setAttribute('onclick','delitem(this)')

var edt = document.createElement('button')
var edtbtn = document.createTextNode('Edit')
edt.appendChild(edtbtn)
li.appendChild(edt)
edt.setAttribute('onclick','edtitem(this)')


 }

function delitem(s){

    s.parentNode.remove()
}
function delall(){
    a.innerHTML=""
}
function edtitem(e){
    var b = prompt('EDIT YOUR ITEM FROM LIST',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=b
      
    }

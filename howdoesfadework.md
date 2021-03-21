Outer logic: 

state is [1,2] 1: show 1, 2: show 2


inner logic:

function(outerIndex){
    when outer index changes, fade out current element
    when fade out finishes, remove current element
    make element2 current element
    fade in element 2
}

OI: 1
element 1
iI: 1
OI: 2
element 1
iI: 1


set the opacity by outer logic
set render/mount by inner logic

on change of outer logic, call setTimeout
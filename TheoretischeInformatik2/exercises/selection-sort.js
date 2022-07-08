function selectionSort(pList) {
    var min;
    if(isNaN(pList[0])){
        return "Error: List is not a number";
    }
    for (var i = 0; i < pList.length; i++) {
        min = i;
        for (var j = i + 1; j < pList.length; j++) {
            if (pList[j] < pList[min]) {
                min = j;
            }
        }
        swapItemsOfList(pList, i, min);
    }
}

function swapItemsOfList(pList, indexA, indexB) {
    var temp = pList[indexA];
    pList[indexA] = pList[indexB];
    pList[indexB] = temp;
}

//Test aufrufen
var TestList = [3, 7, 2, 9, 2, 0, 1, 10];
selectionSort(TestList);
console.log(TestList);
# Elementare Sortierverfahren
## Selection Sort
Selektieren und tauschen  <br>
![Sort Gif](https://th.bing.com/th/id/R.1f66c277a7a820e3492149c6e499bdb1?rik=%2bmoXmDuAcYgtQQ&riu=http%3a%2f%2fpiratelearner.com%2fstatic%2fmedia%2fimages%2fadmin%2f2015%2f10%2f13%2fselection.gif&ehk=Htfp1HLTiCrFGkYf4E3f24eK8NBBLRqcan9EWuhND30%3d&risl=&pid=ImgRaw&r=0)

### JS Code Beispiel
```js
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
```

## Insertion Sort

![Insertion Gif](https://piratelearner.com/static/media/images/admin/2015/10/14/insertion.gif)
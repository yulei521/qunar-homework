currentActiveImgIndex = 0;

function getImgDivs() {
    var scrollId = document.getElementById("scroll-img");
    var imgDivs = scrollId.getElementsByTagName("div");
    return imgDivs;
}

function changeImgItem(index) {
    if (index == currentActiveImgIndex)return;
    var imgDivs = getImgDivs();
    imgDivs[currentActiveImgIndex].className = "img item" + currentActiveImgIndex + " change";
    imgDivs[index].className = "img " + "item" + index + " active change";
    currentActiveImgIndex = index;
    console.log(currentActiveImgIndex);
}

window.onload = function () {
    var imgDivs = getImgDivs();
    imgDivs[0].className = "img item0 active";
}
let hat = document.querySelector('.hat');
let item = items;
function create(){
    for(let i = item.length - 1; i >= 0 ; i = i - 1){
        let user = item[i];
        let containText = document.createElement('div');
        containText.className = "contain__text";
        hat.after(containText);
        let textFirst = document.createElement('div');
        textFirst.className = "text__first"
        textFirst.innerHTML = user.name;
        containText.prepend(textFirst);
        let textSecond = document.createElement('div');
        textSecond.className = "text__second";
        textSecond.innerHTML = user.description;
        textFirst.after(textSecond);
        let textThird = document.createElement('div');
        textThird.className = "text_third";
        textThird.innerHTML = user.quality;
        textSecond.after(textThird);
    }
}
create();

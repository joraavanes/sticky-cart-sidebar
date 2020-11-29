const doc = document;
const items = doc.querySelector('.items');
const componentItems = doc.querySelector('.component .items');
const emptyBtn = doc.querySelector('#empty-cart-btn');
const emptyTitle = doc.querySelector('#empty-title');

items.addEventListener('click', e => {
    if(emptyTitle !== null){
        emptyTitle.setAttribute('hidden', true);
    }

    if(e.target.matches('.item')){
        const item = e.target.cloneNode(true);
        componentItems.append(item);
    }
});

componentItems.addEventListener('click', e => {
    if(e.target.matches('.item')){
        e.target.remove();
    }

    if(componentItems.children.length < 1){
        emptyTitle.removeAttribute('hidden');
    }
});

emptyBtn.addEventListener('click', function(){
    while(componentItems.lastElementChild){
        componentItems.removeChild(componentItems.lastElementChild);
    }
    emptyTitle.removeAttribute('hidden');
});
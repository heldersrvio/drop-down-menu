export default function newDropDownMenu(doc, leadingItemId, menuItemsClass, clickOrHover) {
    const leadingItem = doc.querySelector(`#${leadingItemId}`);
    const menuItems = doc.querySelectorAll(`.${menuItemsClass}`);

    if (clickOrHover) {
        leadingItem.addEventListener('click', () => {
            menuItems.forEach((item) => {
                item.hidden = !item.hidden;
            });
        });
    } else {
        leadingItem.addEventListener('mouseover', () => {
            menuItems.forEach((item) => {
                item.hidden = false;
            });
        });

        leadingItem.addEventListener('mouseout', () => {
            menuItems.forEach((item) => {
                item.hidden = true;
            });
        });
    }

}
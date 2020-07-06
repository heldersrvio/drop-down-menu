export default function newDropDownMenu(
    doc,
    leadingItemId,
    menuItemsContainerId,
    menuItemsClass,
    clickOrHover,
    customization = false,
    menuItemsHoverEffect = false,
    leadingItemBorder = "none",
    leadingItemBorderRadius = "0px",
    leadingItemBackgroundColor = "rgb(192, 192, 192)",
    leadingItemBoxShadow = "none",
    leadingItemColor = "gray",
    leadingItemWidth = "80px",
    leadingItemHeight = "32px",
    leadingItemFont = "sans-serif",
    leadingItemFontSize = "20px",
    leadingItemFontWeight = "bold",
    leadingItemMargin = "0",
    leadingItemPadding = "auto",
    menuItemsBorder = "none",
    menuItemsBorderRadius = "0px",
    menuItemsBackgroundColor = "rgb(192, 192, 192)",
    menuItemsBoxShadow = "none",
    menuItemsColor = "gray",
    menuItemsWidth = "100px",
    menuItemsHeight = "32px",
    menuItemsFont = "sans-serif",
    menuItemsFontSize = "20px",
    menuItemsFontWeight = "bold",
    menuItemsMargin = "0px",
    menuItemsPadding = "auto",
    menuItemsHoverBackgroundColor = "black",
    menuItemsHoverColor = "white"
    ) {
    const leadingItem = doc.querySelector(`#${leadingItemId}`);
    const menuItemsContainer = doc.querySelector(`#${menuItemsContainerId}`);
    const menuItems = doc.querySelectorAll(`.${menuItemsClass}`);

    function getFirstChild(node){
        var firstChild = node.firstChild;
        while (firstChild != null && firstChild.nodeType == 3) {
            firstChild = firstChild.nextSibling;
        }
        return firstChild;
    }

    menuItemsContainer.hidden = true;

    if (clickOrHover) {
        leadingItem.addEventListener('click', () => {
            menuItemsContainer.hidden = !menuItems.hidden;
        });
    } else {
        leadingItem.addEventListener('mouseover', () => {
            menuItemsContainer.hidden = false;
        });

        leadingItem.addEventListener('mouseout', () => {
            menuItemsContainer.hidden = true;
        });

        menuItemsContainer.addEventListener('mouseover', () => {
            menuItemsContainer.hidden = false;
        });

        menuItemsContainer.addEventListener('mouseout', () => {
            menuItemsContainer.hidden = true;
        });
    }

    if (customization) {
        getFirstChild(leadingItem).style.cssText = `
            cursor: pointer;
            border-radius: ${leadingItemBorderRadius};
            border: ${leadingItemBorder};
            box-shadow: ${leadingItemBoxShadow};
            color: ${leadingItemColor};
            background-color: ${leadingItemBackgroundColor};
            width: ${leadingItemWidth};
            height: ${leadingItemHeight};
            font-family: ${leadingItemFont};
            font-size: ${leadingItemFontSize};
            font-weight: ${leadingItemFontWeight};
            margin: ${leadingItemMargin};
            padding: ${leadingItemPadding};
        `;
        menuItemsContainer.style.cssText = `
            width: ${menuItemsWidth};
            background-color: ${menuItemsBackgroundColor};
        `;
        menuItems.forEach((item) => {
            item.style.cssText = `
            cursor: pointer;
            border-radius: ${menuItemsBorderRadius};
            border: ${menuItemsBorder};
            box-shadow: ${menuItemsBoxShadow};
            color: ${menuItemsColor};
            width: ${menuItemsWidth};
            height: ${menuItemsHeight};
            font-family: ${menuItemsFont};
            font-size: ${menuItemsFontSize};
            font-weight: ${menuItemsFontWeight};
            margin: ${menuItemsMargin};
            padding: ${menuItemsPadding};
            `;

            if (menuItemsHoverEffect){
                item.addEventListener('mouseover', () => {
                    item.style.backgroundColor = menuItemsHoverBackgroundColor;
                    item.style.color = menuItemsHoverColor;
                });
                item.addEventListener('mouseout', () => {
                    item.style.backgroundColor = menuItemsBackgroundColor;
                    item.style.color = menuItemsColor;
                });
            }
        });
    }
}

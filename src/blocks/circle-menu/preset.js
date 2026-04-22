export const handleAddItem = (menuItems, setAttributes) => {
    const newItem = {
        id: `item-${Date.now()}`,
        title: 'New Item',
        icon: 'fas fa-star',
        link: '#'
    };
    setAttributes({ menuItems: [...menuItems, newItem] });
};

export const handleChangeItem = (id, key, value, menuItems, setAttributes) => {
    const newItems = menuItems.map(item => {
        if (item.id === id) {
            return { ...item, [key]: value };
        }
        return item;
    });
    setAttributes({ menuItems: newItems });
};

export const handleDeleteItem = (id, menuItems, setAttributes) => {
    if (menuItems.length > 1) {
        const newItems = menuItems.filter(item => item.id !== id);
        setAttributes({ menuItems: newItems });
    }
};

export const handleDuplicateItem = (id, menuItems, setAttributes) => {
    const index = menuItems.findIndex(item => item.id === id);
    if (index !== -1) {
        const clonedItem = { ...menuItems[index], id: `item-${Date.now()}` };
        const newItems = [...menuItems];
        newItems.splice(index + 1, 0, clonedItem);
        setAttributes({ menuItems: newItems });
    }
};

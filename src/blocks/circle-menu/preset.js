// ==========================================
// 1. Add New Item Handler
// ==========================================
export const handleAddItem = (menuItemsRef, setAttributes) => {
	const newItem = {
		id: `item-${Date.now()}`,
		title: "New Item",
		contentType: "icon",
		icon: "fas fa-star",
		image: "",
		imageAlt: "",
		imageID: undefined,
		imageSize: "cover",
		link: "#",
	};
	const newItems = [...menuItemsRef.current, newItem];
	menuItemsRef.current = newItems;
	setAttributes({ menuItems: newItems });
};

// ==========================================
// 2. Change/Update Item Property Handler
// ==========================================
export const handleChangeItem = (id, key, value, menuItemsRef, setAttributes) => {
	const newItems = menuItemsRef.current.map((item) => {
		if (item.id === id) {
			return { ...item, [key]: value };
		}
		return item;
	});
	menuItemsRef.current = newItems;
	setAttributes({ menuItems: newItems });
};

// ==========================================
// 3. Delete Item Handler
// ==========================================
export const handleDeleteItem = (id, menuItemsRef, setAttributes) => {
	if (menuItemsRef.current.length > 1) {
		const newItems = menuItemsRef.current.filter((item) => item.id !== id);
		menuItemsRef.current = newItems;
		setAttributes({ menuItems: newItems });
	}
};

// ==========================================
// 4. Duplicate Item Handler
// ==========================================
export const handleDuplicateItem = (id, menuItemsRef, setAttributes) => {
	const index = menuItemsRef.current.findIndex((item) => item.id === id);
	if (index !== -1) {
		const clonedItem = { ...menuItemsRef.current[index], id: `item-${Date.now()}` };
		const newItems = [...menuItemsRef.current];
		newItems.splice(index + 1, 0, clonedItem);
		menuItemsRef.current = newItems;
		setAttributes({ menuItems: newItems });
	}
};

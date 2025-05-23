"use client";
import { useEffect, useState } from "react";
import PageButton from "./components/button";
import InputBar from "./components/input";
import { getAnonymousUserId } from "./util/session";

type ShoppingListItem = {
  id: number;
  priority: number;
  item: string;
  quantity: number;
  details: string | null;
  date: Date;
  userId: string;
};

export default function Home() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);

  const [loading, setLoading] = useState(false);
  const [selection, setSelection] = useState<number | null>(null);

  // Input field states
  const [item, setItem] = useState("");
  const [priority, setPriority] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [details, setDetails] = useState("No Description");

  const [isEditing, setIsEditing] = useState(false);

  const userId = getAnonymousUserId();

  // Get shopping list items from the database
  useEffect(() => {
    setLoading(true);
    const fetchList = async () => {
      const result = await fetch(`api/shoplist?userId=${userId}`);
      const data = await result.json();
      setShoppingList(data);
      setLoading(false);
    };

    fetchList();
  }, [userId]);

  // Add an item
  const addItem = async () => {
    if (!item.trim()) {
      alert("Please enter a valid item name.");
      return;
    }

    const res = await fetch(`api/shoplist?userId=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        priority,
        item,
        quantity,
        details,
        date: new Date().toISOString(),
        userId,
      }),
    });
    // Error Handling
    if (!res.ok) {
      alert("Failed to add item. Please try again.");
      return;
    }
    try {
      const newItem = await res.json();
      setShoppingList((p) => [...p, newItem]);
    } catch (error) {
      console.error("Invalid JSON response:", error);
      alert(
        "An error occurred while processing the response. Please try again."
      );
    }

    // Reset States
    setItem("");
    setPriority(1);
    setQuantity(1);
    setDetails("");
    setSelection(null);
  };

  // Delete an item
  const deleteItem = async () => {
    if (selection === null) {
      return;
    }

    const res = await fetch(`api/shoplist/${selection}?userId=${userId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error(res.statusText);
      alert("Failed to delete item. Please try again.");
      return;
    }
    setShoppingList((p) => p.filter((item) => item.id !== selection));
    setItem("");
    setPriority(1);
    setQuantity(1);
    setDetails("");
    setSelection(null);
  };

  // Update an item

  const updateItem = async () => {
    if (!isEditing) {
      return;
    }

    const res = await fetch(`api/shoplist/${selection}?userId=${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priority,
        item,
        quantity,
        details,
      }),
    });
    if (!res.ok) {
      alert("Failed to update item. Please try again.");
      return;
    }
    const updatedItem = await res.json();

    // Replace item in state
    setShoppingList((prev) =>
      prev.map((it) => (it.id === selection ? updatedItem : it))
    );

    // Reset States
    setItem("");
    setPriority(1);
    setQuantity(1);
    setDetails("");
    setSelection(null);
    setIsEditing(false);
  };

  // Copy to clipboard
  const copyItem = () => {
    if (shoppingList.length === 0) {
      return;
    }
    const date = new Date();
    const header = `The Shopping List as of ${date}:\n`;

    const format = shoppingList
      .map((item, index) => {
        const itemname = item.item;
        const description = item.details;
        const quantity = item.quantity;
        const priority = item.priority;

        return `${index + 1}. ${itemname} (${quantity}) ${
          description &&
          `- ${description} [${
            (priority === 2 && `IMPORTANT`) || (priority >= 3 && `URGENT`)
          }]`
        }`;
      })
      .join("\n");

    // Insert text into clipboard
    navigator.clipboard
      .writeText(header + format)

      // Error handling
      .then(() => alert("Copied to Clipboard successfully!"))
      .catch(() => alert("Failed to copy to clipboard. Please try again."));
  };

  // Confirm Deletion Message
  const confirmDelete = async () => {
    if (shoppingList.length === 0) {
      return;
    }

    const confirmation = window.confirm(
      "Are you sure you want to clear your entire shopping list?"
    );
    if (!confirmation) {
      return;
    }

    const res = await fetch(`api/shoplist?userId=${userId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Shopping list cleared successfully.");
      setShoppingList([]);
    } else {
      alert("Failed to clear shopping list. Please try again.");
    }
  };

  // Clear Selection

  const clearSelection = () => {
    // Reset Selection and States
    setItem("");
    setPriority(1);
    setQuantity(1);
    setDetails("");
    setSelection(null);
    setIsEditing(false);
  };

  // Main Front-End Interface
  return (
    <main className="flex flex-col items-center justify-start min-h-[100vh] p-6 overflow-auto bg-gray-200 shadow-lg">
      <div className="w-full max-w-screen-xl p-3 m-4 text-black bg-white border-4 border-gray-200 shadow-lg shadow-gray-400 outline-4 outline-gray-500 rounded-xl">
        <h1 className="p-3 mb-6 text-4xl text-center underline bg-gray-300 border-black bold italize underline-offset-8 border-3 sm:text-5xl">
          ListEase
        </h1>

        <div className="p-3 m-3 text-lg sm:text-xl outline-4 outline-gray-500 rounded-xl">
          <p className="mb-6 text-center">
            ListEase is a clean, responsive shopping list web app that helps you
            create, manage, and copy a perfectly formatted shopping list, ready
            to share via text or notes.
          </p>
          <ol className="p-6 m-6 mx-auto space-y-1 list-decimal list-inside transition-all duration-300 bg-gray-200 shadow-2xl hover:scale-120 sm:hover:scale-105 outline-gray-500 outline-3 rounded-xl w-fit shadow-gray-400">
            <li>
              Type in your <b>item name, quantity, priority, and any details</b>
            </li>
            <li>
              Click <b>Create</b> to add it to the list
            </li>
            <li>
              Use the <b>Copy to Clipboard</b> button to export the list for
              texting or saving
            </li>
            <li>
              <b>Edit</b> or <b>delete</b> items on the fly!
            </li>
          </ol>
        </div>

        <h1 className="p-3 mx-auto mt-20 text-4xl text-center bg-gray-300 border-black shadow-xl rounded-2xl w-fit border-3 sm:text-5xl">
          Your Shopping List
        </h1>

        {/* Retrieve and display all items on the list */}
        <div className="p-6 mt-6 mb-5 overflow-x-hidden bg-gray-100 border-4 border-gray-400 shadow-gray-100 rounded-3xl">
          {loading && (
            <div className="items-center mx-auto my-auto">
              <h1 className="text-3xl text-center text-black transition-all sm:text-4xl animate-bounce">
                Loading Shopping List...
              </h1>
            </div>
          )}

          {/* Retrieve and display database contents */}
          {shoppingList.map((items) => (
            <div key={items.id}>
              <ul className="p-2 text-lg sm:text-xl">
                {/* Highlight item content on click */}
                <li
                  onClick={() => {
                    setSelection(items.id);
                    setItem(items.item);
                    setPriority(items.priority);
                    setQuantity(items.quantity);
                    setDetails(items.details ?? "");
                    setIsEditing(true);
                  }}
                  className={`capitalize bg-amber-300 rounded-xl border-3 border-yellow-500 ${
                    selection === items.id
                      ? "bg-yellow-200 p-3 capitalize shadow-xl shadow-yellow-100"
                      : "p-3 capitalize shadow-2xl hover:bg-yellow-500 shadow-yellow-300 transition-all duration-500"
                  }`}
                >
                  <b>Name:</b> {items.item} | <b>Priority:</b> {items.priority}{" "}
                  | <b>Quantity</b>: {items.quantity} | <b>Details:</b>{" "}
                  {items.details || "No Description"} | <b>Date:</b>{" "}
                  {items.date.toString()}
                </li>
              </ul>
            </div>
          ))}

          {shoppingList.length === 0 && (
            <p className="p-6 text-lg font-bold text-center text-red-500 bg-red-300 border-4 shadow-lg shadow-red-500 rounded-2xl sm:text-xl">
              No items found in your shopping list.
            </p>
          )}
        </div>

        {/* Clear and Copy to Clipboard Button */}
        <div className="flex justify-end w-full max-w-screen-xl grid-cols-2 gap-2 mb-20">
          <PageButton
            onClick={confirmDelete}
            label="Clear List"
            variant="reset"
            disabled={shoppingList.length === 0}
          />

          <PageButton
            onClick={copyItem}
            label="Copy to Clipboard"
            variant="copy"
            disabled={shoppingList.length === 0}
          />
        </div>

        {/* Input Fields */}
        <div className="grid items-center justify-center w-full max-w-screen-xl gap-6 p-6 m-3 mx-auto mb-10 xl:grid-cols-4 sm:grid-cols-4 md:grid-cols-2 rounded-xl outline-3 outline-gray-400">
          {/* Item Name */}
          <InputBar
            label="Item Name"
            type="text"
            placeholder="Name..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          {/* Priority */}
          <InputBar
            label="Item Priority (Default 1, Max 3)"
            type="number"
            placeholder="Item Priority (default: 1)"
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
          />

          {/* Quantity */}
          <InputBar
            label="Item Quantity (Default 1)"
            type="number"
            placeholder="Item Quantity (default: 1)"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          {/* Details */}
          <InputBar
            label="Item Details"
            type="text"
            placeholder="Your Description Here..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="grid items-center w-full max-w-xl gap-1 m-3 mx-auto mb-5 justify- center md:grid-cols-3">
          {/* Add or Update Item */}
          {isEditing ? (
            <PageButton
              onClick={updateItem}
              label="Update Item"
              variant="update"
            />
          ) : (
            <PageButton onClick={addItem} label="Add Item" variant="add" />
          )}

          {/* Delete Item */}
          <PageButton
            onClick={deleteItem}
            label="Remove Item"
            disabled={selection === null}
            variant="remove"
          />

          {/* Clear Item Selection */}
          <PageButton
            onClick={clearSelection}
            label="Clear Selection"
            variant="clear"
            disabled={selection === null}
          />
        </div>

        {/* Bottom Caption */}
        <div className="p-3 m-3 space-y-8 text-lg text-center sm:text-xl outline-4 outline-gray-500 rounded-xl">
          <p>
            Simply enter your items, click Create, and your shopping list is
            ready to be copied to your clipboard and shared! <br />
            Add, remove, and update entries as often as you need.
          </p>
          <p>
            A digital shopping list is a convenient way to keep track of your
            grocery needs. You can add, remove, and update items as needed,
            making it easier to plan your shopping trips and avoid forgetting
            your most-essential items.
          </p>
        </div>
      </div>
    </main>
  );
}

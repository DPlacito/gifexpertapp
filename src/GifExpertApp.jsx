import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Naruto']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            return;
        }

        setCategories([...categories, newCategory]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}

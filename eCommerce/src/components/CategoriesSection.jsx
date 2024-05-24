import './Styles/CategoriesSection.css'

export function CategoriesSection(){
    return(
        <div className='containerMainCat'>
            <div className="containerCategories">
                <ul>
                    <li>
                        <a href="#">Lanzamientos</a>
                    </li>
                    <li>
                        <a href="#">Hombre - Caballero</a>
                    </li>
                    <li>
                        <a href="#">Mujer - Dama</a>
                    </li>
                    <li>
                        <a href="#">Niños</a>
                    </li>
                    <li>
                        <a href="#">Accesorios</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
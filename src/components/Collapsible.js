import { useState } from 'react';

const Collapsible = ({label, categories, links, collapsed}) => {
    const [ isCollapsed, setIsCollapsed ] = useState(collapsed)

    return (
        <div className="item py-3" onClick={() => setIsCollapsed(!isCollapsed)}>
            <div className="topic text-sm flex justify-between font-light">
                <p>{label}</p>
                {isCollapsed ? 
                    <img src="./icons/arrow_up.svg" height="13" width="13" />
                    :
                    <img src="./icons/arrow_down.svg" height="13" width="13" />
                }
                
            </div>
            {isCollapsed && 
                <div className="expand">
                    <ul className="text-xs">
                        {categories && categories.map((category) => (
                            <li className="my-6"><a href="#" className="text-blue-400">{category.title}</a></li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}


export default Collapsible;
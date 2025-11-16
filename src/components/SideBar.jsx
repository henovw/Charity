import "./SideBar.css"


function SideBar(prop) {
    return (
        <div className="main">
            {prop.list.map((item) => {
            return <div>

                <h2>{item.name}</h2>

            </div>



            })}
        </div>
    )
}

export default SideBar
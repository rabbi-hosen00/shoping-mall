
const NavBar = ({selectedProducts}) => {
    return (
        <div className="bg-[#0000ff0a]">
            <nav className="flex justify-between max-w-screen-lg mx-auto ">
                <ul className="ml-7">
                    <li ><a href="" >Logo</a></li>
                </ul>
                <div >
                    <ul className="flex gap-12">
                        <li ><a href="" >Home</a></li>
                        <li ><a href="" >Product</a></li>
                        <li ><a href="" >Cart {selectedProducts.length}</a></li>
                        <li className="mr-7" ><a href="" >$ 500</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
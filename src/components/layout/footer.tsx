export default function Footer() {
    return (
        <>
            <div className="p-5 gap-5 grid grid-cols-2 md:grid-cols-4">
                <div>
                    <ul className="flex flex-col gap-1">
                        <li className="font-bold mb-4">Navigation</li>
                        <li>Shop</li>
                        <li>Lookbook</li>
                        <li>About</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-1">
                        <li className="font-bold mb-4">Customer Care</li>
                        <li>Shop</li>
                        <li>Lookbook</li>
                        <li>About</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-1">
                        <li className="font-bold mb-4">Contact</li>
                        <li>Vercencia@info.com</li>
                        <li>+1667 991082</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-1">
                        <li className="font-bold mb-4">Social Media</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            {/* <div className="font-bold text-9xl">©VERCENCIA</div> */}
        </>
    );
}

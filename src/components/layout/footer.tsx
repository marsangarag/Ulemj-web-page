export default function Footer() {
    return (
        <>
            <div className="p-5 grid gap-y-8 text-center sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col">
                    <span className="font-bold mb-2">Navigation</span>
                    <span>Shop</span>
                    <span>Lookbook</span>
                    <span>About</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold mb-2">Customer Care</span>
                    <span>Shipping info & returns</span>
                    <span>Terms & conditions</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold mb-2">Contact</span>
                    <span>Vercencia@info.com</span>
                    <span>+976 88110011</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold mb-2">Social media</span>
                    <span>Instagram</span>
                    <span>Facebook</span>
                    <span>Twitter</span>
                </div>
            </div>
        </>
    );
}

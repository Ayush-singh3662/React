const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
            <form>
                <input className="border border-black m-4 p-2" placeholder="Name"/>
                <br />
                <input className="border border-black m-4 p-2" placeholder="Message" />
                <br />
                <button className="bg-gray-300 rounded-lg p-4 m-4 shadow-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
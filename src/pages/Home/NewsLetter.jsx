import { ToastContainer, toast } from "react-toastify";
const NewsLetter = () => {
    const handleNewsletter = e => {
        e.preventDefault();

        // const form = new FormData(e.currentTarget);
        // const email = form.get('email');


        toast.success('Thank you for subscribing to our newsletter');

    }
    return (
        <div>
            <div className=" max-w-7xl mx-auto px-8">
                <div className="bg-gray-600 shadow-lg p-3 border mb-40 rounded-3xl  mt-20 text-white">
                    <h1 className="mt-2 text-4xl text-center font-bold">Join Our Newsletter</h1>
                    <p className="mt-2 text-center md:text-xl font-medium">Keep up with our latest news. Subscribe to our newsletter</p>

                    <form onSubmit={handleNewsletter} className="md:w-1/2 mx-auto card-body   rounded-3xl">
                        <div className="form-control">

                            <input type="email" placeholder="Email Address" name="email" className="input input-bordered  " required />
                        </div>

                        <div className="form-control mt-3 flex items-center">
                            <button className=" w-1/2 btn bg-green-500 border-none font-bold text-xl text-gray-950">Subscribe</button>
                        </div>
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
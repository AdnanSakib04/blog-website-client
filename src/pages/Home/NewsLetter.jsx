import Swal from "sweetalert2";
const NewsLetter = () => {
    const handleNewsletter = e => {
        e.preventDefault();

        // const form = new FormData(e.currentTarget);
        // const email = form.get('email');


        Swal.fire({
            title: 'Success!',
            text: 'Subscribed Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
    }
    return (
        <div className="bg-[#b2d8d8] shadow-lg p-3 border mb-40 rounded-3xl max-w-7xl mx-auto mt-3 text-gray-950">
            <h1 className="mt-2 text-4xl text-center font-bold">Join Our Newsletter</h1>
            <p className="mt-2 text-center text-xl font-medium">Keep up with our latest news. Subscribe to our newsletter</p>

            <form onSubmit={handleNewsletter} className="md:w-1/2 mx-auto card-body bg-[#b2d8d8]  rounded-3xl">
                <div className="form-control">

                    <input type="email" placeholder="Email Address" name="email" className="input input-bordered  " required />
                </div>

                <div className="form-control mt-3 flex items-center">
                    <button className=" w-1/2 btn bg-[#66b2b2] border-none font-bold text-xl text-gray-950">Subscribe</button>
                </div>
            </form>
        </div>
    );
};

export default NewsLetter;
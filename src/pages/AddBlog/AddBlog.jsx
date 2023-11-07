import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const AddBlog = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.email);

    const handleAddBlog = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const title = form.title.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;

        // current user email
        const userEmail = user.email;



        const newBlog = { photo, title, category, shortDescription, longDescription, userEmail }

        console.log(newBlog);

        fetch('http://localhost:5000/addblog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Blog Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <div className='max-w-7xl mx-auto mb-40'>

            <div className="  p-4 mt-8 rounded-3xl ">

                <form onSubmit={handleAddBlog} className="md:w-1/2 mx-auto card-body bg-gray-600 rounded-3xl">
                    <h1 className="text-4xl font-bold lg:text-5xl mt-8 text-center text-white">Add Blog</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px] text-white">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered " required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px] text-white">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title" className="input input-bordered " required />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px] text-white">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered " required />
                    </div> */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px] text-white">Category</span>
                        </label>
                        <select name="category" className="input input-bordered" required>
                            {/* <option value="" disabled>Select a category</option> */}
                            <option value="food">food</option>
                            <option value="travel">travel</option>
                            <option value="health">health</option>
                            <option value="lifestyle">lifestyle</option>
                        </select>
                    </div>

                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px] text-white">Short Description</span>
                        </label>
                        <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px] text-white">Long Description</span>
                        </label>
                        <input type="text" placeholder="Long Description" name="longDescription" className="input input-bordered " required />
                    </div>
                    
                   
                    
                    <div className="form-control mt-6">
                    <input  type="submit" className="btn bg-green-500 border-none font-bold text-xl text-white" value="Add Blog"  />
                    </div>
                   
                   
                </form >

            </div >
        </div >
    );
};

export default AddBlog;
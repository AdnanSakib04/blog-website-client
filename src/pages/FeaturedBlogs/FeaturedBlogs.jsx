import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
  //--------- instead of loader, i will use transtack query-------
  // const featuredBlogs = useLoaderData();



  const { isPending, isError, error, data: featuredBlogs } = useQuery({
    queryKey: ['featuredBlogs'],
    queryFn: async () => {
      const res = await fetch('https://blog-website-server-six.vercel.app/featuredBlogs');
      return res.json()
    }
  })
  if (isPending) {
    return <span className=" loading loading-spinner text-primary"></span>
  }
  if (isError) {
    return <p>{error.message}</p>
  }

  

  // add a serial number to each blog
  // because my database documents does not have any serial number
  const blogsWithSerialNumber = featuredBlogs.map((blog, index) => ({
    ...blog,
    serialNumber: index + 1,
  }));


  // columns for the table
  const columns = [
    {
      name: "Serial Number",
      selector: "serialNumber",
      sortable: true,
    },
    {
      name: "Blog Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Blog Owner",
      selector: "userEmail",
      sortable: true,
    },
    {
      name: "Blog Owner Profile Picture",
      cell: (row) => <img src={row.userPhoto} alt="" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="mt-10 text-5xl font-bold text-center mb-14 max-w-max mx-auto p-3 rounded-lg text-gray-600">Featured Blogs</h1>
      <div className=" mb-20">
      <DataTable
        columns={columns}
        data={blogsWithSerialNumber} 
        highlightOnHover
        responsive
      />
      </div>
    </div>
  );
};

export default FeaturedBlogs;

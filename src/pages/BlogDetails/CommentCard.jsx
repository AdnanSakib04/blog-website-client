

const CommentCard = ({singleComment}) => {
    const { userPhoto, userEmail, comment, userName  } = singleComment;
    return (
        <div className=" mb-2 ">
            <div className="border border-gray-600 p-2 rounded-3xl bg-white">
                <div className=" flex items-center gap-4">
                <img src={userPhoto} alt="" className=" h-[48px] w-[48px] rounded-full"/>
                <p className=" font-medium text-xl md:text-2xl text-gray-600">{userName}</p>
                </div>
                <p className=" ml-[64px] italic text-black md:text-xl">{comment}</p>
            </div>
        </div>
    );
};

export default CommentCard;



const Coffee = ({coffee,handleDelete}) => {
    const {name, tast, photo, details, category, _id} = coffee || {};

  

    return (
        <div className=" flex items-center gap-10">
            <div className=" w-44">
                <img src={photo} alt="" />
            </div>
            <div className=" grow">
                <h4 className=" text-4xl font-bold font-rancho">{name}</h4>
                <p className=" text-xl font-rancho">{tast}</p>
            </div>
            <div className="flex flex-col justify-between gap-7">
                <button onClick={() => handleDelete(_id)} className="btn btn-warning font-rancho">X</button>
                <button className="btn btn-warning font-rancho">Update</button>
            </div>
        </div>
    );
};

export default Coffee;
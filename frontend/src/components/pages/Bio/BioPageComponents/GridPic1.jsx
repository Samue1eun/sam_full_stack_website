import { useIndividualPicture } from "../../../../hooks/pictures/IndividualPictureHook";



const GridPic1 = () => {

    const { imageUrl, loading, error } = useIndividualPicture("website_header_this_is_me.jpg");

    return (
        <>
            <div className="relative w-full h-full overflow-hidden">
            {loading && <div className="text-center">Loading image...</div>}
            {error && <div className="text-center text-red-500">Error: {error}</div>}
            {imageUrl && (
                <img 
                    src={imageUrl} 
                    alt="Website Header"
                    className="w-full object-cover"
                />
            )}
            </div>


        </>
    )
}

export default GridPic1;
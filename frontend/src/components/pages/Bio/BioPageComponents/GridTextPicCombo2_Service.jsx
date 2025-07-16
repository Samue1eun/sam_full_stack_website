import { useIndividualPicture } from "../../../../hooks/pictures/IndividualPictureHook";

const GridTextPicCombo2_Service = () => {

    const { imageUrl, loading, error } = useIndividualPicture("me_w_vp.jpg");

    return (
            <>
                <div className="card flex h-full w-full rounded-2xl overflow-hidden justify-center items-center p-6">
                    <div className="flex flex-col justify-center items-center h-full w-full">
                        <div className="flex flex-col items-baseline overflow-visible">
                            <h1 className="text-center font-bold text-4xl md:text-6xl lg:text-8xl text-white">SERVICE</h1>
                        </div>
                        {/* <div> */}
                            <figure className="h-full w-full overflow-hidden border-4 border-white shadow-md rounded-4xl">
                                <div className="relative w-full h-full overflow-hidden">
                                {loading && <div className="text-center">Loading image...</div>}
                                {error && <div className="text-center text-red-500">Error: {error}</div>}
                                {imageUrl && (
                                    <img 
                                        src={imageUrl} 
                                        alt="Me with the VP"
                                        className="w-full object-cover"
                                    />
                                )}
                                </div>
                            </figure>
                        {/* </div> */}
                        <div className="flex items-center justify-center mt-5">
                            <div className="text-white text-2xl font-bold px-5 py-2 border-4 border-white shadow-md rounded-2xl max-w-lg">
                                <h2 className="mb-10">
                                    In 2013, I attended the United States Coast Guard Academy and graduated in 2017 as an officer with a B.S. in Naval Architecture and Maine Engineering.
                                </h2>
                                <h2>
                                    During my eight years in active duty Coast Guard, I sailed from California to Fiji and South America, managed the engineering program for over 300 boats, and patrolled the waters of Cuba and Haiti.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default GridTextPicCombo2_Service;
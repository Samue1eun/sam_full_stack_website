import { useIndividualPicture } from "../../../../hooks/pictures/IndividualPictureHook";

const GridTextPicCombo1_Outset = () => {

    const { imageUrl, loading, error } = useIndividualPicture("cub_scout_pic.jpg");

    return (
            <>
                <div className="card flex h-full w-full rounded-2xl overflow-hidden">
                    <div className="flex flex-col justify-center items-center h-full w-full">
                        <div className="flex flex-col items-baseline overflow-visible">
                            <h1 className="text-center font-bold text-9xl mb-[-62px] relative z-10 text-red-300">OUTSET</h1>
                        </div>
                        <div>
                            <figure className="h-full w-full overflow-hidden border-4 border-red-400 rounded-4xl shadow-md shadow-red-400">
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
                                <div className="absolute bottom-15 flex items-center justify-center">
                                    <h2 className="text- text-white text-2xl font-bold px-5 py-2 bg-red-400 rounded-2xl max-w-lg">
                                    Born in Dallas, Texas and raised in Torrance, California, I spent my childhood hiking, camping, skateboarding, snowboarding, and near the ocean.
                                    </h2>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default GridTextPicCombo1_Outset;
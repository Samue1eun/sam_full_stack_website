import GridPic1 from './BioPageComponents/GridPic1';

const BioPage = () => {
    return (
        <>
            <h1 className="text-center font-bold">Bio Page</h1>
            <div className="flex flex-col items-center justify-center">
                <div className="grid md:grid-cols-12">
                    Main Header Picture
                    <div className="col-span-1 md:col-span-12">
                        <GridPic1 />
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>

                </div>

        
            </div>
        </>

    )
}

export default BioPage;
import GridPic1 from './BioPageComponents/GridPic1';
import GridTextPicCombo1_Outset from './BioPageComponents/GridTextPicCombo1_Outset';

const BioPage = () => {
    return (
        <>
            <h1 className="text-center font-bold">Bio Page</h1>
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12">
                    Main Header Picture
                    <div className="col-span-1 md:col-span-12">
                        <GridPic1 />
                    </div>
                    <div className="col-span-1 md:col-span-5">
                        <GridTextPicCombo1_Outset />
                    </div>
                    <div>

                    </div>

                </div>

        
            </div>
        </>

    )
}

export default BioPage;
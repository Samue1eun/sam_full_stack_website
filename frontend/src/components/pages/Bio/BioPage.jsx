import GridPic1 from './BioPageComponents/GridPic1';
import GridTextPicCombo1_Outset from './BioPageComponents/GridTextPicCombo1_Outset';
import GridTextPicCombo2_Service from './BioPageComponents/GridTextPicCombo2_Service';

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
                    <div className="col-span-1 md:col-span-6 m-8">
                        <GridTextPicCombo1_Outset />
                    </div>
                    <div className="col-span-1 md:col-span-6 m-8">
                        <GridTextPicCombo2_Service />
                    </div>

                </div>

        
            </div>
        </>

    )
}

export default BioPage;
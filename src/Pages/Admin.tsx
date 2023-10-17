// Admin Home 
// When authorities login, this is the first page they see.

import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { Grid } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import NextButtonAdmin from "./NextButtonAdmin";

const Admin = () => {
    return(
        <>
            <Header></Header>
            <form action="">
                {/* Next Button */}
                <Grid
                paddingX={{ base: "20px", md: "10%" }}
                paddingY={{ base: "10px", md: "1%" }}
                >
                <Link to="/admin1">
                <NextButtonAdmin currrentStep={0} onStepperChange={function (): void {
                    throw new Error("Function not implemented.");
                } } />
                </Link>
                </Grid>
            </form>
            <FooterSection></FooterSection>
        </>
    );
}
export default Admin;